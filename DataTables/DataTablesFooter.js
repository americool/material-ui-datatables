'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Table = require('material-ui/Table');

var _ClickAwayListener = require('material-ui/internal/ClickAwayListener');

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var tableRow = context.muiTheme.tableRow;


  return {
    root: {
      borderBottom: props.displayBorder && '1px solid ' + tableRow.borderColor,
      color: tableRow.textColor,
      height: tableRow.height
    }
  };
}

var DataTablesFooter = function (_TableFooter) {
  (0, _inherits3.default)(DataTablesFooter, _TableFooter);

  function DataTablesFooter() {
    (0, _classCallCheck3.default)(this, DataTablesFooter);
    return (0, _possibleConstructorReturn3.default)(this, (DataTablesFooter.__proto__ || (0, _getPrototypeOf2.default)(DataTablesFooter)).apply(this, arguments));
  }

  (0, _createClass3.default)(DataTablesFooter, [{
    key: 'createRows',
    value: function createRows() {
      var _this2 = this;

      var numChildren = _react2.default.Children.count(this.props.children);
      var rowNumber = 0;
      return _react2.default.Children.map(this.props.children, function (child) {
        if (_react2.default.isValidElement(child)) {
          var props = {
            rowNumber: rowNumber++
          };

          if (rowNumber === numChildren) {
            props.displayBorder = false;
          }

          var styles = getStyles(_this2.props, _this2.context, _this2.state);
          props.style = (0, _assign2.default)({}, styles.cell, child.props.style);

          var children = [];

          _react2.default.Children.forEach(child.props.children, function (child) {
            children.push(child);
          });

          return _react2.default.cloneElement(child, (0, _extends3.default)({}, props), children);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var style = this.props.style;
      var prepareStyles = this.context.muiTheme.prepareStyles;


      return _react2.default.createElement(
        _ClickAwayListener2.default,
        { onClickAway: this.handleClickAway },
        _react2.default.createElement(
          'tfoot',
          { style: prepareStyles((0, _assign2.default)({}, style)) },
          this.createRows()
        )
      );
    }
  }]);
  return DataTablesFooter;
}(_Table.TableFooter);

DataTablesFooter.muiName = 'TableFooter';
DataTablesFooter.propTypes = {
  /**
   * Children passed to table body.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
};
exports.default = DataTablesFooter;