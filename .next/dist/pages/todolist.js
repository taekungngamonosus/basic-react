'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('next\\node_modules\\babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _List = require('../components/List');

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\PremSan\\Desktop\\apps\\code\\pages\\todolist.js?entry';


var TodoList = function (_Component) {
  (0, _inherits3.default)(TodoList, _Component);

  function TodoList(props) {
    (0, _classCallCheck3.default)(this, TodoList);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TodoList.__proto__ || (0, _getPrototypeOf2.default)(TodoList)).call(this, props));

    _this.state = {
      term: '',
      items: []
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onSubmitForm = _this.onSubmitForm.bind(_this);

    _this.updateItem = _this.updateItem.bind(_this);
    _this.removeItem = _this.removeItem.bind(_this);

    return _this;
  }

  (0, _createClass3.default)(TodoList, [{
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
    key: 'onSubmitForm',
    value: function onSubmitForm(e) {
      e.preventDefault();

      var v = this.state.term;
      if (v == '' || v == 'undefined') {
        alert('Have no value');
        return;
      }

      this.setState({
        term: '',
        items: [].concat((0, _toConsumableArray3.default)(this.state.items), [this.state.term])
      });
    }
  }, {
    key: 'updateItem',
    value: function updateItem(i, value) {
      // console.log(i, value);
      var arr = this.state.items;
      arr[i] = value;
      this.setState({
        term: '',
        items: arr
      });
    }
  }, {
    key: 'removeItem',
    value: function removeItem(i) {
      var arr = this.state.items;
      arr.splice(i, 1);
      this.setState({
        term: '',
        items: arr
      });
    }
  }, {
    key: 'renderList',
    value: function renderList() {
      var _this2 = this;

      return this.state.items.map(function (item, key) {
        return _react2.default.createElement(_List2.default, {
          key: key,
          index: key,
          item: item,
          remove: _this2.removeItem,
          update: _this2.updateItem, __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, { title: ' Todo List - Next.js ', __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement('h4', { className: 'header', 'data-jsx': 2293081579,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, 'Todo List'), _react2.default.createElement('form', { className: 'form-wrapper', onSubmit: this.onSubmitForm, 'data-jsx': 2293081579,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement('input', { ref: function ref(input) {
          _this3.textInput = input;
        },
        className: 'form-control', value: this.state.term,
        onChange: this.onChange, 'data-jsx': 2293081579,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), _react2.default.createElement('button', { className: 'btn-add', 'data-jsx': 2293081579,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, ' Add ')), _react2.default.createElement('div', { className: 'consolelog', 'data-jsx': 2293081579,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement('p', { className: 'message', 'data-jsx': 2293081579,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, 'Message'), _react2.default.createElement('p', {
        'data-jsx': 2293081579,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, 'Count item : ', ' ', this.state.items.length)), _react2.default.createElement('div', { className: 'list-content', 'data-jsx': 2293081579,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, this.state.items <= 0 ? 'Have no item' : '', _react2.default.createElement('ul', {
        'data-jsx': 2293081579,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, this.renderList())), _react2.default.createElement(_style2.default, {
        styleId: 2293081579,
        css: ':root{--ff:\'Roboto\',Helvetica,Arial,sans-serif}.header[data-jsx="2293081579"]{font-size:36px;font-family:var(--ff);font-weight:300;text-align:center;color:#4dd0e1}.form-wrapper[data-jsx="2293081579"]{margin-bottom:30px;position:relative;text-align:center}.form-control[data-jsx="2293081579"]{color:#393d3d;font-size:16px;font-family:var(--ff);width:320px;background-color:#fff;border:1px solid #ebebeb;border-top-left-radius:20px;border-bottom-left-radius:20px;height:34px;padding:0 15px;outline:0;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;display:inline-block}.form-control[data-jsx="2293081579"]:focus{border:1px solid #7986cb;box-shadow:0 2px 3px rgba(121,134,203,.18)}.btn-add[data-jsx="2293081579"]{border:1px solid #7986cb;height:36px;border-top-right-radius:20px;border-bottom-right-radius:20px;padding:5px 20px 5px 15px;color:#fff;background-color:#7986cb;font-size:14px;cursor:pointer;outline:0}.consolelog[data-jsx="2293081579"],.list-content[data-jsx="2293081579"]{border-radius:4px;line-height:1.8;background-color:#fff;padding:15px;font-size:14px;font-family:var(--ff);border:1px solid #ebebeb;margin-bottom:15px;display:block}.consolelog[data-jsx="2293081579"] p[data-jsx="2293081579"]{margin:0}.consolelog[data-jsx="2293081579"] .message[data-jsx="2293081579"]{font-size:16px;font-weight:700;color:#ff5252}.list-content[data-jsx="2293081579"] ul[data-jsx="2293081579"]{margin:0;padding:0;list-style:none}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFx0b2RvbGlzdC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvR29CLEFBR3lELEFBRzdCLEFBT0ksQUFLTCxBQWVXLEFBSUEsQUFZUCxBQVdULEFBR00sQUFLTixTQVBYLEFBUVksS0FsREssQ0FaTyxBQXlETixHQWRBLENBcENFLEFBd0RGLE1BcEM4QixBQUlsQyxJQWxCVSxFQTZDUixHQWRRLENBb0J4QixFQS9Ea0IsQUFPRSxBQXdCVyxJQW5DL0IsSUE4REEsTUE3Q2MsRUFaTSxFQU9wQixDQW9DZSxPQTlCUyxHQWtCVSxFQUxsQyxDQWtCaUIsRUEzQ0QsYUE0Q1EsQ0EzQ3hCLEFBWTJCLGFBa0JDLFFBY0QsSUEvQkcsY0FrQmpCLE9BY1EsSUFiTSxHQWxCTSxZQWdDakIsVUFiQyxJQWNqQixLQWhDYyxNQW1CRyxNQWxCQSxTQW1CTCxNQWxCQSxJQW1CWixNQWxCa0Msd0VBQ1gscUJBQ3ZCIiwiZmlsZSI6InBhZ2VzXFx0b2RvbGlzdC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9QcmVtU2FuL0Rlc2t0b3AvYXBwcy9jb2RlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHRlcm06ICcnLFxyXG4gICAgICBpdGVtczogW11cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLm9uU3VibWl0Rm9ybSA9IHRoaXMub25TdWJtaXRGb3JtLmJpbmQodGhpcylcclxuXHJcbiAgICB0aGlzLnVwZGF0ZUl0ZW0gPSB0aGlzLnVwZGF0ZUl0ZW0uYmluZCh0aGlzKVxyXG4gICAgdGhpcy5yZW1vdmVJdGVtID0gdGhpcy5yZW1vdmVJdGVtLmJpbmQodGhpcylcclxuXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMudGV4dElucHV0LmZvY3VzKClcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXJtOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gIH1cclxuXHJcbiAgb25TdWJtaXRGb3JtKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgIGxldCB2ID0gdGhpcy5zdGF0ZS50ZXJtXHJcbiAgICBpZiAodiA9PSAnJyB8fCB2ID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGFsZXJ0KCdIYXZlIG5vIHZhbHVlJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHRlcm06ICcnLFxyXG4gICAgICBpdGVtczogWy4uLnRoaXMuc3RhdGUuaXRlbXMsIHRoaXMuc3RhdGUudGVybV1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICB1cGRhdGVJdGVtKGksIHZhbHVlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhpLCB2YWx1ZSk7XHJcbiAgICBsZXQgYXJyID0gdGhpcy5zdGF0ZS5pdGVtc1xyXG4gICAgYXJyW2ldID0gdmFsdWVcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICB0ZXJtOiAnJyxcclxuICAgICAgaXRlbXM6IGFyclxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlbW92ZUl0ZW0oaSkge1xyXG4gICAgbGV0IGFyciA9IHRoaXMuc3RhdGUuaXRlbXNcclxuICAgIGFyci5zcGxpY2UoaSwgMSlcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICB0ZXJtOiAnJyxcclxuICAgICAgaXRlbXM6IGFyclxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlbmRlckxpc3QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5pdGVtcy5tYXAoKGl0ZW0sIGtleSkgPT4gKFxyXG4gICAgICA8TGlzdFxyXG4gICAgICAgIGtleT17IGtleSB9XHJcbiAgICAgICAgaW5kZXg9eyBrZXkgfVxyXG4gICAgICAgIGl0ZW09eyBpdGVtIH1cclxuICAgICAgICByZW1vdmU9eyB0aGlzLnJlbW92ZUl0ZW0gfVxyXG4gICAgICAgIHVwZGF0ZT17IHRoaXMudXBkYXRlSXRlbSB9Lz5cclxuICAgICkpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0IHRpdGxlPXtgIFRvZG8gTGlzdCAtIE5leHQuanMgYH0+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT17YGhlYWRlcmB9PlRvZG8gTGlzdDwvaDQ+XHJcblxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17YGZvcm0td3JhcHBlcmB9IG9uU3VibWl0PXsgdGhpcy5vblN1Ym1pdEZvcm0gfT5cclxuXHJcbiAgICAgICAgICA8aW5wdXQgcmVmPXsoaW5wdXQpID0+IHsgdGhpcy50ZXh0SW5wdXQgPSBpbnB1dCB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2xgfSB2YWx1ZT17IHRoaXMuc3RhdGUudGVybSB9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZSB9IC8+XHJcblxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2BidG4tYWRkYH0+e2AgQWRkIGB9PC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbnNvbGVsb2dgfT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17YG1lc3NhZ2VgfT57YE1lc3NhZ2VgfTwvcD5cclxuICAgICAgICAgIDxwPnsgYENvdW50IGl0ZW0gOiBgfSB7IHRoaXMuc3RhdGUuaXRlbXMubGVuZ3RoIH08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbGlzdC1jb250ZW50YH0+XHJcbiAgICAgICAgICB7IHRoaXMuc3RhdGUuaXRlbXMgPD0gMCA/ICdIYXZlIG5vIGl0ZW0nIDogJycgfVxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7IHRoaXMucmVuZGVyTGlzdCgpIH1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIDpnbG9iYWwoOnJvb3QpIHtcclxuICAgICAgICAgICAgLS1mZjogJ1JvYm90bycsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZmYpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNGRkMGUxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0td3JhcHBlciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzkzZDNkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZik7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMjBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzc5ODZjYjtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMTIxLCAxMzQsIDIwMywgLjE4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5idG4tYWRkIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzc5ODZjYjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAyMHB4IDVweCAxNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc5ODZjYjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY29uc29sZWxvZywgLmxpc3QtY29udGVudCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuODtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZmYpO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jb25zb2xlbG9nIHAge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY29uc29sZWxvZyAubWVzc2FnZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZjUyNTI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGlzdC1jb250ZW50IHVsIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=pages\\todolist.js?entry */'
      }));
    }
  }]);

  return TodoList;
}(_react.Component);

exports.default = TodoList;