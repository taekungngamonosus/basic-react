import React, { Component, PropTypes } from 'react'

export default class Edit extends Component {

  constructor(props) {
    super(props)

    this.state = {
      term: '',
    }

    this.onChange = this.onChange.bind(this)

    this.edit = this.edit.bind(this)
    this.update = this.update.bind(this)

    this.closeEdit = this.closeEdit.bind(this)
  }

  componentDidMount() {
    this.textInput.focus()
  }

  onChange(e) {
    this.setState({ term: e.target.value })
  }

  edit(e) {
    e.preventDefault()
    this.props.enable()
  }

  update(e) {
    e.preventDefault()
    let v = this.state.term
    if (v == '' || v == 'undefined') {
      alert('Have no value')
      return
    }
    this.props.update(this.state.term)
  }

  closeEdit(e) {
    if (e.keyCode === 27) {
      this.props.enable()
    }
  }

  render() {
    return (
      <div className={`edit-warpper`} onKeyDown={ this.closeEdit }>
        <form onSubmit={ this.update }>

          <input
            ref={(input) => { this.textInput = input }}
            className={`form-control`}
            value={ this.state.term }
            onChange={ this.onChange } />

          <button
            className={`btn-save`}>
            {`Save`}</button>
          <button
            className={`btn-cancel`}
            onClick={ this.edit }>
            {`Cancel`}</button>

        </form>
        <style jsx>{`
          .edit-warpper {
            background-color: #4dd0e1;
            position: relative;
            padding: 15px;
            border-bottom-left-radius: 12px;
            border-bottom-right-radius: 12px;
          }
          .form-control {
            color: #393d3d;
            font-size: 16px;
            font-family: var(--ff);
            width: 335px;
            background-color: #fff;
            border: 1px solid #ebebeb;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
            height: 34px;
            padding: 0 15px;
            outline: 0;
            transition: all 0.2s ease-in-out;
            display: inline-block;
          }
          .form-control:focus {
            border: 1px solid #7986cb;
            box-shadow: 0 2px 3px rgba(121, 134, 203, .18);
          }
          .btn-save {
            border: 1px solid #7986cb;
            height: 36px;
            padding: 5px 20px 5px 15px;
            color: #fff;
            background-color: #7986cb;
            font-size: 14px;
            cursor: pointer;
            outline: 0;
          }
          .btn-save {
            border: 1px solid #7986cb;
            height: 36px;
            padding: 5px 20px 5px 15px;
            color: #fff;
            background-color: #7986cb;
            font-size: 14px;
            cursor: pointer;
            outline: 0;
          }
          .btn-cancel {
            border: 1px solid #ff5252;
            height: 36px;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
            padding: 5px 20px 5px 15px;
            color: #fff;
            background-color: #ff5252;
            font-size: 14px;
            cursor: pointer;
            outline: 0;
          }
        `}</style>
      </div>
    )
  }
}

Edit.propTypes = {
  enable: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
}
