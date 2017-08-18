import React, { Component, PropTypes } from 'react'
import Edit from '../Edit'

export default class List extends Component {

  constructor(props) {
    super(props)

    this.state = {
      edit: false,
    }

    this.onChange = this.onChange.bind(this)
    this.enable = this.enable.bind(this)
    this.toggleEditState = this.toggleEditState.bind(this)

    this.update = this.update.bind(this)
    this.remove = this.remove.bind(this)

  }

  toggleEditState() {
    let edit = this.state.edit

    if (edit) {
      this.setState({
        edit: false,
      })
    } else {
      this.setState({
        edit: true
      })
    }
  }

  enable() {
    this.toggleEditState()
  }

  update(v) {
    if (this.state.edit) {
      this.props.update(this.props.index, v)
    }
    this.toggleEditState()
  }

  remove() {
    this.props.remove(this.props.index)
  }

  renderEditForm() {
    return (
      <Edit enable={ this.enable } update={ this.update } />
    )
  }

  render() {
    return (
      <li className={`item`}>
        <div className={`content-wrapper`}>
          <p>{ this.props.item }</p>
          <p>
            <button
              className={`btn-edit`}
              onClick={ this.toggleEditState }>
              {`Edit`}</button>
            <button
              className={`btn-remove`}
              onClick={ this.remove }>
              {`Remove`}</button>
          </p>
        </div>
        <div>
          { this.state.edit ? this.renderEditForm() : null }
        </div>

        <style jsx>{`
          :global(:root) {
            --ff: 'Roboto', Helvetica, Arial, sans-serif;
          }
          .item:nth-child(2n-1) {
            font-family: var(--ff);
            background-color: #fbfbfb;
          }
          .content-wrapper {
            padding: 15px;
            border-bottom: 3px solid #4dd0e1;
          }
          .content-wrapper::before, .content-wrapper::after {
            content: " ";
            display: table;
          }
          .content-wrapper::after {
            clear: both;
          }
          .content-wrapper p:first-child {
            width: 320px;
            float: left;
          }
          .content-wrapper p:last-child {
            float: right;
          }
          .btn-edit {
            width: 100px;
            border: 1px solid #4dd0e1;
            height: 36px;
            border-radius: 2px;
            margin-right: 10px;
            padding: 5px 20px 5px 15px;
            color: #fff;
            background-color: #4dd0e1;
            font-size: 14px;
            cursor: pointer;
            outline: 0;
            transition: all 0.2s ease-in-out;
          }
          .btn-remove {
            width: 100px;
            border: 1px solid #ff5252;
            height: 36px;
            border-radius: 2px;
            padding: 5px 20px;
            color: #fff;
            background-color: #ff5252;
            font-size: 14px;
            cursor: pointer;
            outline: 0;
            transition: all 0.2s ease-in-out;
          }
          .btn-edit:hover, .btn-edit:active,
          .btn-remove:hover, .btn-edit:active {
            opacity: .8;
          }
        `}</style>
      </li>
    )
  }
}

List.propTypes = {
  index: PropTypes.any.isRequired,
  item: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
}
