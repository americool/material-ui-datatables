import React from 'react';
import PropTypes from 'prop-types';
import {TableFooter} from 'material-ui/Table';
import ClickAwayListener from 'material-ui/internal/ClickAwayListener';

function getStyles(props, context) {
  const {tableRow} = context.muiTheme;

  return {
    root: {
      borderBottom: props.displayBorder && `1px solid ${tableRow.borderColor}`,
      color: tableRow.textColor,
      height: tableRow.height,
    },
  };
}

class DataTablesFooter extends TableFooter {
  static muiName = 'TableFooter';

  static propTypes = {
    /**
     * Children passed to table body.
     */
    children: PropTypes.node,
    /**
     * The css class name of the root element.
     */
    className: PropTypes.string,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
  };

  createRows() {
    const numChildren = React.Children.count(this.props.children);
    let rowNumber = 0;
    return React.Children.map(this.props.children, (child) => {
      if (React.isValidElement(child)) {
        const props = {
          rowNumber: rowNumber++,
        };

        if (rowNumber === numChildren) {
          props.displayBorder = false;
        }

        const styles = getStyles(this.props, this.context, this.state);
        props.style = Object.assign({}, styles.cell, child.props.style);

        const children = [];

        React.Children.forEach(child.props.children, (child) => {
          children.push(child);
        });

        return React.cloneElement(child, {...props}, children);
      }
    });
  }

  render() {
    const {style} = this.props;

    const {prepareStyles} = this.context.muiTheme;

    return (
      <ClickAwayListener onClickAway={this.handleClickAway}>
        <tfoot style={prepareStyles(Object.assign({}, style))}>
          {this.createRows()}
        </tfoot>
      </ClickAwayListener>
    );
  }
}

export default DataTablesFooter;
