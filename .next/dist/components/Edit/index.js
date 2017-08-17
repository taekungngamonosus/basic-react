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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\PremSan\\Desktop\\apps\\code\\components\\Edit\\index.js';


var Edit = function (_Component) {
  (0, _inherits3.default)(Edit, _Component);

  function Edit(props) {
    (0, _classCallCheck3.default)(this, Edit);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Edit.__proto__ || (0, _getPrototypeOf2.default)(Edit)).call(this, props));

    _this.state = {
      term: ''
    };

    _this.onChange = _this.onChange.bind(_this);

    _this.edit = _this.edit.bind(_this);
    _this.update = _this.update.bind(_this);

    _this.closeEdit = _this.closeEdit.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Edit, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.textInput.focus();
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      this.setState({ term: e.target.value });
    }
  }, {
    key: 'edit',
    value: function edit(e) {
      e.preventDefault();
      this.props.enable();
    }
  }, {
    key: 'update',
    value: function update(e) {
      e.preventDefault();
      var v = this.state.term;
      if (v == '' || v == 'undefined') {
        alert('Have no value');
        return;
      }
      this.props.update(this.state.term);
    }
  }, {
    key: 'closeEdit',
    value: function closeEdit(e) {
      if (e.keyCode === 27) {
        this.props.enable();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', { className: 'edit-warpper', onKeyDown: this.closeEdit, 'data-jsx': 3381681614,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('form', { onSubmit: this.update, 'data-jsx': 3381681614,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement('input', {
        ref: function ref(input) {
          _this2.textInput = input;
        },
        className: 'form-control',
        value: this.state.term,
        onChange: this.onChange, 'data-jsx': 3381681614,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), _react2.default.createElement('button', {
        className: 'btn-save', 'data-jsx': 3381681614,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, 'Save'), _react2.default.createElement('button', {
        className: 'btn-cancel',
        onClick: this.edit, 'data-jsx': 3381681614,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, 'Cancel')), _react2.default.createElement(_style2.default, {
        styleId: 3381681614,
        css: '.edit-warpper[data-jsx="3381681614"]{background-color:#4dd0e1;position:relative;padding:15px;border-bottom-left-radius:12px;border-bottom-right-radius:12px}.form-control[data-jsx="3381681614"]{color:#393d3d;font-size:16px;font-family:var(--ff);width:335px;background-color:#fff;border:1px solid #ebebeb;border-top-left-radius:20px;border-bottom-left-radius:20px;height:34px;padding:0 15px;outline:0;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;display:inline-block}.form-control[data-jsx="3381681614"]:focus{border:1px solid #7986cb;box-shadow:0 2px 3px rgba(121,134,203,.18)}.btn-save[data-jsx="3381681614"]{border:1px solid #7986cb;height:36px;padding:5px 20px 5px 15px;color:#fff;background-color:#7986cb;font-size:14px;cursor:pointer;outline:0}.btn-save[data-jsx="3381681614"]{border:1px solid #7986cb;height:36px;padding:5px 20px 5px 15px;color:#fff;background-color:#7986cb;font-size:14px;cursor:pointer;outline:0}.btn-cancel[data-jsx="3381681614"]{border:1px solid #ff5252;height:36px;border-top-right-radius:20px;border-bottom-right-radius:20px;padding:5px 20px 5px 15px;color:#fff;background-color:#ff5252;font-size:14px;cursor:pointer;outline:0}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEVkaXRcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Fb0IsQUFHc0MsQUFPWCxBQWVXLEFBSUEsQUFVQSxBQVVBLGNBdENWLFdBUEcsQUFzQjRCLEFBSWxDLEFBVUEsQUFVQSxJQXRDVSxRQW1CSSxBQVVBLEFBVUcsTUE5Q2hCLFFBUUQsS0FQbUIsT0FRVCxBQWtCWCxBQVVBLEdBVXFCLEVBekJsQyxNQU0yQixBQVVBLFdBNUJBLEVBUk8sV0E4Q04sQ0FuQlgsQUFVQSxXQTVCYSxJQW1CYixBQVVBLEtBckNqQixLQThDYSxLQWxCRCxBQVVBLE1BU2UsR0F0Q00sQ0FvQmpDLEFBVUEscUJBU2lCLFNBdENILE1BdUNHLE1BdENBLFNBdUNMLE1BdENBLElBdUNaLE1BdENrQyx3RUFDWCxxQkFDdkIiLCJmaWxlIjoiY29tcG9uZW50c1xcRWRpdFxcaW5kZXguanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvUHJlbVNhbi9EZXNrdG9wL2FwcHMvY29kZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB0ZXJtOiAnJyxcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpXHJcblxyXG4gICAgdGhpcy5lZGl0ID0gdGhpcy5lZGl0LmJpbmQodGhpcylcclxuICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKVxyXG5cclxuICAgIHRoaXMuY2xvc2VFZGl0ID0gdGhpcy5jbG9zZUVkaXQuYmluZCh0aGlzKVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnRleHRJbnB1dC5mb2N1cygpXHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZShlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdGVybTogZS50YXJnZXQudmFsdWUgfSlcclxuICB9XHJcblxyXG4gIGVkaXQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB0aGlzLnByb3BzLmVuYWJsZSgpXHJcbiAgfVxyXG5cclxuICB1cGRhdGUoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBsZXQgdiA9IHRoaXMuc3RhdGUudGVybVxyXG4gICAgaWYgKHYgPT0gJycgfHwgdiA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBhbGVydCgnSGF2ZSBubyB2YWx1ZScpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5wcm9wcy51cGRhdGUodGhpcy5zdGF0ZS50ZXJtKVxyXG4gIH1cclxuXHJcbiAgY2xvc2VFZGl0KGUpIHtcclxuICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XHJcbiAgICAgIHRoaXMucHJvcHMuZW5hYmxlKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZWRpdC13YXJwcGVyYH0gb25LZXlEb3duPXsgdGhpcy5jbG9zZUVkaXQgfT5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17IHRoaXMudXBkYXRlIH0+XHJcblxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB7IHRoaXMudGV4dElucHV0ID0gaW5wdXQgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sYH1cclxuICAgICAgICAgICAgdmFsdWU9eyB0aGlzLnN0YXRlLnRlcm0gfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2UgfSAvPlxyXG5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuLXNhdmVgfT5cclxuICAgICAgICAgICAge2BTYXZlYH08L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuLWNhbmNlbGB9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLmVkaXQgfT5cclxuICAgICAgICAgICAge2BDYW5jZWxgfTwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmVkaXQtd2FycHBlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZGQwZTE7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICAgICAgY29sb3I6ICMzOTNkM2Q7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZmKTtcclxuICAgICAgICAgICAgd2lkdGg6IDMzNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNzk4NmNiO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAzcHggcmdiYSgxMjEsIDEzNCwgMjAzLCAuMTgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ0bi1zYXZlIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzc5ODZjYjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMjBweCA1cHggMTVweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTg2Y2I7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ0bi1zYXZlIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzc5ODZjYjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMjBweCA1cHggMTVweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTg2Y2I7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ0bi1jYW5jZWwge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmY1MjUyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDIwcHggNXB4IDE1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1MjUyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuRWRpdC5wcm9wVHlwZXMgPSB7XHJcbiAgZW5hYmxlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIHVwZGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufVxyXG4iXX0= */\n/*@ sourceURL=components\\Edit\\index.js */'
      }));
    }
  }]);

  return Edit;
}(_react.Component);

exports.default = Edit;


Edit.propTypes = {
  enable: _react.PropTypes.func.isRequired,
  update: _react.PropTypes.func.isRequired
};