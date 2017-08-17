webpackHotUpdate(5,{

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(106);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = __webpack_require__(67);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(68);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(69);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(573);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(559);

var _Layout2 = _interopRequireDefault(_Layout);

var _List = __webpack_require__(572);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\PremSan\\Desktop\\apps\\code\\pages\\todolist.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\PremSan\\Desktop\\apps\\code\\pages\\todolist.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(108)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/todolist")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4zMGUyYjI2ZTg1MzdiMGMzMWRlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvdG9kb2xpc3QuanM/NjE0Y2FjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvTGlzdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdGVybTogJycsXHJcbiAgICAgIGl0ZW1zOiBbXVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcclxuICAgIHRoaXMub25TdWJtaXRGb3JtID0gdGhpcy5vblN1Ym1pdEZvcm0uYmluZCh0aGlzKVxyXG5cclxuICAgIHRoaXMudXBkYXRlSXRlbSA9IHRoaXMudXBkYXRlSXRlbS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLnJlbW92ZUl0ZW0gPSB0aGlzLnJlbW92ZUl0ZW0uYmluZCh0aGlzKVxyXG5cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy50ZXh0SW5wdXQuZm9jdXMoKVxyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UoZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRlcm06IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgfVxyXG5cclxuICBvblN1Ym1pdEZvcm0oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgbGV0IHYgPSB0aGlzLnN0YXRlLnRlcm1cclxuICAgIGlmICh2ID09ICcnIHx8IHYgPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgYWxlcnQoJ0hhdmUgbm8gdmFsdWUnKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdGVybTogJycsXHJcbiAgICAgIGl0ZW1zOiBbLi4udGhpcy5zdGF0ZS5pdGVtcywgdGhpcy5zdGF0ZS50ZXJtXVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHVwZGF0ZUl0ZW0oaSwgdmFsdWUpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGksIHZhbHVlKTtcclxuICAgIGxldCBhcnIgPSB0aGlzLnN0YXRlLml0ZW1zXHJcbiAgICBhcnJbaV0gPSB2YWx1ZVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHRlcm06ICcnLFxyXG4gICAgICBpdGVtczogYXJyXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSXRlbShpKSB7XHJcbiAgICBsZXQgYXJyID0gdGhpcy5zdGF0ZS5pdGVtc1xyXG4gICAgYXJyLnNwbGljZShpLCAxKVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHRlcm06ICcnLFxyXG4gICAgICBpdGVtczogYXJyXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyTGlzdCgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLml0ZW1zLm1hcCgoaXRlbSwga2V5KSA9PiAoXHJcbiAgICAgIDxMaXN0XHJcbiAgICAgICAga2V5PXsga2V5IH1cclxuICAgICAgICBpbmRleD17IGtleSB9XHJcbiAgICAgICAgaXRlbT17IGl0ZW0gfVxyXG4gICAgICAgIHJlbW92ZT17IHRoaXMucmVtb3ZlSXRlbSB9XHJcbiAgICAgICAgdXBkYXRlPXsgdGhpcy51cGRhdGVJdGVtIH0vPlxyXG4gICAgKSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQgdGl0bGU9e2AgVG9kbyBMaXN0IC0gTmV4dC5qcyBgfT5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPXtgaGVhZGVyYH0+VG9kbyBMaXN0PC9oND5cclxuXHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtgZm9ybS13cmFwcGVyYH0gb25TdWJtaXQ9eyB0aGlzLm9uU3VibWl0Rm9ybSB9PlxyXG5cclxuICAgICAgICAgIDxpbnB1dCByZWY9eyhpbnB1dCkgPT4geyB0aGlzLnRleHRJbnB1dCA9IGlucHV0IH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbGB9IHZhbHVlPXsgdGhpcy5zdGF0ZS50ZXJtIH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlIH0gLz5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGJ0bi1hZGRgfT57YCBBZGQgYH08L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29uc29sZWxvZ2B9PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtgbWVzc2FnZWB9PntgTWVzc2FnZWB9PC9wPlxyXG4gICAgICAgICAgPHA+eyBgQ291bnQgaXRlbSA6IGB9IHsgdGhpcy5zdGF0ZS5pdGVtcy5sZW5ndGggfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BsaXN0LWNvbnRlbnRgfT5cclxuICAgICAgICAgIHsgdGhpcy5zdGF0ZS5pdGVtcyA8PSAwID8gJ0hhdmUgbm8gaXRlbScgOiAnJyB9XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJMaXN0KCkgfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgOmdsb2JhbCg6cm9vdCkge1xyXG4gICAgICAgICAgICAtLWZmOiAnUm9ib3RvJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZik7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICM0ZGQwZTE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybS13cmFwcGVyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICAgICAgY29sb3I6ICMzOTNkM2Q7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZmKTtcclxuICAgICAgICAgICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNzk4NmNiO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAzcHggcmdiYSgxMjEsIDEzNCwgMjAzLCAuMTgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ0bi1hZGQge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNzk4NmNiO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDIwcHggNXB4IDE1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk4NmNiO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jb25zb2xlbG9nLCAubGlzdC1jb250ZW50IHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZik7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNvbnNvbGVsb2cgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jb25zb2xlbG9nIC5tZXNzYWdlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmNTI1MjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5saXN0LWNvbnRlbnQgdWwge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3RvZG9saXN0LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFFQTtBQUdBO0FBSkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUdBO0FBQUE7Ozs7QUFHQTtBQUNBOzs7O0FBR0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBREE7Ozs7QUFLQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUhBOzs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBSEE7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUNBO0FBTUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUVBOztBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBRUE7O0FBRkE7QUFJQTtBQUpBO0FBSUE7O0FBQUE7QUFBQTtBQUFBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBbkJBO0FBbUdBO0FBbkdBOzs7OztBQXhFQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==