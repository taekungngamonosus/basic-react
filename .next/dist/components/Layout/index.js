'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('next\\node_modules\\babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next\\node_modules\\babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next\\node_modules\\babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next\\node_modules\\babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next\\node_modules\\babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('next\\node_modules\\styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\PremSan\\Desktop\\apps\\code\\components\\Layout\\index.js';


var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout(props) {
    (0, _classCallCheck3.default)(this, Layout);

    return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call(this, props));
  }

  (0, _createClass3.default)(Layout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        'data-jsx': 4239488201,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('title', {
        'data-jsx': 4239488201,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, this.props.title)), _react2.default.createElement('div', { className: 'wrapper', 'data-jsx': 4239488201,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('div', { className: 'navbar', 'data-jsx': 4239488201,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement(_link2.default, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('a', {
        'data-jsx': 4239488201,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, 'Home')), _react2.default.createElement(_link2.default, { href: '/todolist', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('a', {
        'data-jsx': 4239488201,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, 'Todo List'))), _react2.default.createElement('div', {
        'data-jsx': 4239488201,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, this.props.children)), _react2.default.createElement(_style2.default, {
        styleId: 4239488201,
        css: '.wrapper[data-jsx="4239488201"]{width:640px;margin:0 auto;font:15px \'Roboto\',Helvetica,Arial,sans-serif;background:#fbfbfb;display:block;padding:30px;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.08)}.navbar[data-jsx="4239488201"]{text-align:center;padding:10px 20px;background-color:#ffffff;box-shadow:0 1px 3px rgba(0,0,0,.08)}.navbar[data-jsx="4239488201"] a[data-jsx="4239488201"]{font-size:16px;font-weight:400;color:#2c2f30;text-decoration:none;padding:0 15px;position:relative;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out}.navbar[data-jsx="4239488201"] a[data-jsx="4239488201"]:hover,.navbar[data-jsx="4239488201"] a[data-jsx="4239488201"]:active{color:#4dd0e1;text-decoration:underline}.navbar[data-jsx="4239488201"] a[data-jsx="4239488201"]::after{content:"|";position:absolute;right:0}.navbar[data-jsx="4239488201"] a[data-jsx="4239488201"]:last-child[data-jsx="4239488201"]::after{content:none}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dFxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JvQixBQUd5QixBQVVNLEFBTUgsQUFTRCxBQUlGLEFBS0MsWUFqQ0MsQUE2QkksQ0FLcEIsQ0FUNEIsQ0FUVixHQU5FLFFBVCtCLElBNkJ6QyxDQWJNLEtBTlcsRUFvQjNCLEVBTEEsS0FSdUIsZ0JBTm1CLEtBT3pCLE1BakJJLFNBa0JELFVBakJKLE9BVWhCLENBUWtDLE1BakJuQixhQUNLLGtCQUNzQixtQ0FnQjFDLEVBZkEiLCJmaWxlIjoiY29tcG9uZW50c1xcTGF5b3V0XFxpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9QcmVtU2FuL0Rlc2t0b3AvYXBwcy9jb2RlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT57IHRoaXMucHJvcHMudGl0bGUgfTwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgd3JhcHBlcmB9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BuYXZiYXJgfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9gfT48YT5Ib21lPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC90b2RvbGlzdGB9PjxhPlRvZG8gTGlzdDwvYT48L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAud3JhcHBlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2NDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIGZvbnQ6IDE1cHggJ1JvYm90bycsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYmZiZmI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIC4wOCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIC4wOCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubmF2YmFyIGEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMmMyZjMwO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5uYXZiYXIgYTpob3ZlciwgLm5hdmJhciBhOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNGRkMGUxO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5uYXZiYXIgYTo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcInxcIjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5uYXZiYXIgYTpsYXN0LWNoaWxkOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbkxheW91dC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdGl0bGU6ICdIZWxsbyA6IE5leHQuanMnXHJcbn1cclxuIl19 */\n/*@ sourceURL=components\\Layout\\index.js */'
      }));
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = Layout;


Layout.defaultProps = {
  title: 'Hello : Next.js'
};