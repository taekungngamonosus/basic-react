import React, { Component } from 'react'
import Layout from '../components/Layout'
import List from '../components/List'

export default class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: '',
      items: []
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmitForm = this.onSubmitForm.bind(this)

    this.updateItem = this.updateItem.bind(this)
    this.removeItem = this.removeItem.bind(this)

  }

  componentDidMount() {
    this.textInput.focus()
  }

  onChange(e) {
    this.setState({ term: e.target.value })
  }

  onSubmitForm(e) {
    e.preventDefault()

    let v = this.state.term
    if (v == '' || v == 'undefined') {
      alert('Have no value')
      return
    }

    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    })
  }

  updateItem(i, value) {
    // console.log(i, value);
    let arr = this.state.items
    arr[i] = value
    this.setState({
      term: '',
      items: arr
    })
  }

  removeItem(i) {
    let arr = this.state.items
    arr.splice(i, 1)
    this.setState({
      term: '',
      items: arr
    })
  }

  renderList() {
    return this.state.items.map((item, key) => (
      <List
        key={ key }
        index={ key }
        item={ item }
        remove={ this.removeItem }
        update={ this.updateItem }/>
    ))
  }

  render() {
    return (
      <Layout title={` Todo List - Next.js `}>
        <h4 className={`header`}>Todo List</h4>

        <form className={`form-wrapper`} onSubmit={ this.onSubmitForm }>

          <input ref={(input) => { this.textInput = input }}
            className={`form-control`} value={ this.state.term }
            onChange={ this.onChange } />

          <button className={`btn-add`}>{` Add `}</button>
        </form>

        <div className={`consolelog`}>
          <p className={`message`}>{`Message`}</p>
          <p>{ `Count item : `} { this.state.items.length }</p>
        </div>

        <div className={`list-content`}>
          { this.state.items <= 0 ? 'Have no item' : '' }
          <ul>
            { this.renderList() }
          </ul>
        </div>

        <style jsx>{`
          :global(:root) {
            --ff: 'Roboto', Helvetica, Arial, sans-serif;
          }
          .header {
            font-size: 36px;
            font-family: var(--ff);
            font-weight: 300;
            text-align: center;
            color: #4dd0e1;
          }
          .form-wrapper {
            margin-bottom: 30px;
            position: relative;
            text-align: center;
          }
          .form-control {
            color: #393d3d;
            font-size: 16px;
            font-family: var(--ff);
            width: 320px;
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
          .btn-add {
            border: 1px solid #7986cb;
            height: 36px;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
            padding: 5px 20px 5px 15px;
            color: #fff;
            background-color: #7986cb;
            font-size: 14px;
            cursor: pointer;
            outline: 0;
          }
          .consolelog, .list-content {
            border-radius: 4px;
            line-height: 1.8;
            background-color: #fff;
            padding: 15px;
            font-size: 14px;
            font-family: var(--ff);
            border: 1px solid #ebebeb;
            margin-bottom: 15px;
            display: block;
          }
          .consolelog p {
            margin: 0;
          }
          .consolelog .message {
            font-size: 16px;
            font-weight: 700;
            color: #ff5252;
          }
          .list-content ul {
            margin: 0;
            padding: 0;
            list-style: none;
          }
        `}</style>

      </Layout>
    )
  }
}
