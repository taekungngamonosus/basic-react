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

var _Edit = require('../Edit');

var _Edit2 = _interopRequireDefault(_Edit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\PremSan\\Desktop\\apps\\code\\components\\List\\index.js';


var List = function (_Component) {
  (0, _inherits3.default)(List, _Component);

  function List(props) {
    (0, _classCallCheck3.default)(this, List);

    var _this = (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).call(this, props));

    _this.state = {
      edit: false,
      term: ''
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.enable = _this.enable.bind(_this);
    _this.toggleEditState = _this.toggleEditState.bind(_this);

    _this.update = _this.update.bind(_this);
    _this.remove = _this.remove.bind(_this);

    return _this;
  }

  (0, _createClass3.default)(List, [{
    key: 'onChange',
    value: function onChange(e) {
      this.setState({ term: e.target.value });
    }
  }, {
    key: 'toggleEditState',
    value: function toggleEditState() {
      var edit = this.state.edit;

      if (edit) {
        this.setState({
          edit: false,
          term: ''
        });
      } else {
        this.setState({
          edit: true
        });
      }
    }
  }, {
    key: 'enable',
    value: function enable() {
      this.toggleEditState();
    }
  }, {
    key: 'update',
    value: function update(v) {
      if (this.state.edit) {
        this.props.update(this.props.index, v);
      }
      this.toggleEditState();
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.props.remove(this.props.index);
    }
  }, {
    key: 'renderEditForm',
    value: function renderEditForm() {
      return _react2.default.createElement(_Edit2.default, { enable: this.enable, update: this.update, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('li', { className: 'item', 'data-jsx': 1628814492,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement('div', { className: 'content-wrapper', 'data-jsx': 1628814492,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement('p', {
        'data-jsx': 1628814492,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, this.props.item), _react2.default.createElement('p', {
        'data-jsx': 1628814492,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement('button', {
        className: 'btn-edit',
        onClick: this.toggleEditState, 'data-jsx': 1628814492,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, 'Edit'), _react2.default.createElement('button', {
        className: 'btn-remove',
        onClick: this.remove, 'data-jsx': 1628814492,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, 'Remove'))), _react2.default.createElement('div', {
        'data-jsx': 1628814492,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, this.state.edit ? this.renderEditForm() : null), _react2.default.createElement(_style2.default, {
        styleId: 1628814492,
        css: ':root{--ff:\'Roboto\',Helvetica,Arial,sans-serif}.item[data-jsx="1628814492"]:nth-child(2n-1){font-family:var(--ff);background-color:#fbfbfb}.content-wrapper[data-jsx="1628814492"]{padding:15px;border-bottom:3px solid #4dd0e1}.content-wrapper[data-jsx="1628814492"]::before,.content-wrapper[data-jsx="1628814492"]::after{content:" ";display:table}.content-wrapper[data-jsx="1628814492"]::after{clear:both}.content-wrapper[data-jsx="1628814492"] p[data-jsx="1628814492"]:first-child{width:320px;float:left}.content-wrapper[data-jsx="1628814492"] p[data-jsx="1628814492"]:last-child{float:right}.btn-edit[data-jsx="1628814492"]{width:100px;border:1px solid #4dd0e1;height:36px;border-radius:2px;margin-right:10px;padding:5px 20px 5px 15px;color:#fff;background-color:#4dd0e1;font-size:14px;cursor:pointer;outline:0;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out}.btn-remove[data-jsx="1628814492"]{width:100px;border:1px solid #ff5252;height:36px;border-radius:2px;padding:5px 20px;color:#fff;background-color:#ff5252;font-size:14px;cursor:pointer;outline:0;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out}.btn-edit[data-jsx="1628814492"]:hover,.btn-edit[data-jsx="1628814492"]:active,.btn-remove[data-jsx="1628814492"]:hover,.btn-edit[data-jsx="1628814492"]:active{opacity:.8}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExpc3RcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtGb0IsQUFHeUQsQUFHdEIsQUFJVCxBQUlELEFBSUQsQUFHQyxBQUlBLEFBR0EsQUFjQSxBQWNELFdBckNiLEFBc0NBLENBMUNnQixBQU9ILEFBSWIsQUFHMkIsQUFjQSxDQWhDTyxTQUpQLENBZ0IzQixHQVBBLFdBY2MsQUFjQSxJQXhDZCxJQVFBLEVBSkEsRUF1Qm9CLEFBY0Esa0JBYkEsQUFjRCxpQkFDTixDQWRlLFVBZUQsZ0JBZGQsU0FlSSxFQWRVLGFBZVYsWUFkQSxHQWVMLFVBQ3NCLEVBZmpCLGVBQ0wsVUFDc0IsNkNBY2xDLDJCQWJBIiwiZmlsZSI6ImNvbXBvbmVudHNcXExpc3RcXGluZGV4LmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL1ByZW1TYW4vRGVza3RvcC9hcHBzL2NvZGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBFZGl0IGZyb20gJy4uL0VkaXQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZWRpdDogZmFsc2UsXG4gICAgICB0ZXJtOiAnJyxcbiAgICB9XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5lbmFibGUgPSB0aGlzLmVuYWJsZS5iaW5kKHRoaXMpXG4gICAgdGhpcy50b2dnbGVFZGl0U3RhdGUgPSB0aGlzLnRvZ2dsZUVkaXRTdGF0ZS5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcylcbiAgICB0aGlzLnJlbW92ZSA9IHRoaXMucmVtb3ZlLmJpbmQodGhpcylcblxuICB9XG5cbiAgb25DaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXJtOiBlLnRhcmdldC52YWx1ZSB9KVxuICB9XG5cbiAgdG9nZ2xlRWRpdFN0YXRlKCkge1xuICAgIGxldCBlZGl0ID0gdGhpcy5zdGF0ZS5lZGl0XG5cbiAgICBpZiAoZWRpdCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGVkaXQ6IGZhbHNlLFxuICAgICAgICB0ZXJtOiAnJyxcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBlZGl0OiB0cnVlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLnRvZ2dsZUVkaXRTdGF0ZSgpXG4gIH1cblxuICB1cGRhdGUodikge1xuICAgIGlmICh0aGlzLnN0YXRlLmVkaXQpIHtcbiAgICAgIHRoaXMucHJvcHMudXBkYXRlKHRoaXMucHJvcHMuaW5kZXgsIHYpXG4gICAgfVxuICAgIHRoaXMudG9nZ2xlRWRpdFN0YXRlKClcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICB0aGlzLnByb3BzLnJlbW92ZSh0aGlzLnByb3BzLmluZGV4KVxuICB9XG5cbiAgcmVuZGVyRWRpdEZvcm0oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxFZGl0IGVuYWJsZT17IHRoaXMuZW5hYmxlIH0gdXBkYXRlPXsgdGhpcy51cGRhdGUgfSAvPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGNsYXNzTmFtZT17YGl0ZW1gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb250ZW50LXdyYXBwZXJgfT5cbiAgICAgICAgICA8cD57IHRoaXMucHJvcHMuaXRlbSB9PC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidG4tZWRpdGB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLnRvZ2dsZUVkaXRTdGF0ZSB9PlxuICAgICAgICAgICAgICB7YEVkaXRgfTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidG4tcmVtb3ZlYH1cbiAgICAgICAgICAgICAgb25DbGljaz17IHRoaXMucmVtb3ZlIH0+XG4gICAgICAgICAgICAgIHtgUmVtb3ZlYH08L2J1dHRvbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHsgdGhpcy5zdGF0ZS5lZGl0ID8gdGhpcy5yZW5kZXJFZGl0Rm9ybSgpIDogbnVsbCB9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICA6Z2xvYmFsKDpyb290KSB7XG4gICAgICAgICAgICAtLWZmOiAnUm9ib3RvJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLml0ZW06bnRoLWNoaWxkKDJuLTEpIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mZik7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGVudC13cmFwcGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzRkZDBlMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRlbnQtd3JhcHBlcjo6YmVmb3JlLCAuY29udGVudC13cmFwcGVyOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGVudC13cmFwcGVyOjphZnRlciB7XG4gICAgICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRlbnQtd3JhcHBlciBwOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMjBweDtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGVudC13cmFwcGVyIHAgOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnRuLWVkaXQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzRkZDBlMTtcbiAgICAgICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAyMHB4IDVweCAxNXB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGRkMGUxO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYnRuLXJlbW92ZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmY1MjUyO1xuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjUyNTI7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5idG4tZWRpdDpob3ZlciwgLmJ0bi1lZGl0OmFjdGl2ZSxcbiAgICAgICAgICAuYnRuLXJlbW92ZTpob3ZlciwgLmJ0bi1lZGl0OmFjdGl2ZSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAuODtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvbGk+XG4gICAgKVxuICB9XG59XG5cbkxpc3QucHJvcFR5cGVzID0ge1xuICBpbmRleDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICBpdGVtOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHVwZGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcmVtb3ZlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuIl19 */\n/*@ sourceURL=components\\List\\index.js */'
      }));
    }
  }]);

  return List;
}(_react.Component);

exports.default = List;


List.propTypes = {
  index: _react.PropTypes.any.isRequired,
  item: _react.PropTypes.string.isRequired,
  update: _react.PropTypes.func.isRequired,
  remove: _react.PropTypes.func.isRequired
};