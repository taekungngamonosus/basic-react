import React, { Component } from 'react'

export default class Message extends Component {
  constructor(props) {
    super(props)

    this.state = {
      color: '#000',
    }
    this.handleChangeColor = this.handleChangeColor.bind(this)
  }

  handleChangeColor(e) {
    this.setState({
      color: e.target.value
    })
  }

  render() {
    return (
      <div>
        <div className={`wrapper`}>
          <div className={`avatar`} style={{ backgroundImage: `url(` + this.props.avatar + `)` }} />
          <input
            type={`text`}
            placeholder={`color name or hex color`}
            onChange={ this.handleChangeColor }
            className={`form-control`} />
          <p className={`text-center`}>
            Hello,{` `}
            <b style={{ color: this.state.color }}>{ this.props.name }</b>
          </p>
        </div>
        <style jsx>{`
          :global(:root) {
            --ff: 'Roboto', Helvetica, Arial, sans-serif;
          }
          .wrapper {
            width: 400px;
            margin: 0 auto;
            position: realtive;
          }
          .avatar {
            width: 80px;
            height: 80px;
            margin: 0 auto;
            background-position: center center;
            background-size: cover;
            border-radius: 50px;
            border: 3px solid #ebebeb;
            box-shadow: 0 2px 5px rgba(0, 0, 0, .12);
            margin-bottom: 30px;
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
            border-radius: 20px;
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
          .text-center {
            font-size: 16px;
            font-family: var(--ff);
            margin: 20px 0;
            display: block;
            text-align: center;
          }
        `}</style>
      </div>
    )
  }
}

Message.defaultProps = {
  name: 'Tyrion Lannister',
  avatar: 'http://vignette1.wikia.nocookie.net/gameofthrones/images/6/61/The_children_Tyrion_with_Bow_S4.png/revision/latest?cb=20140616190514',
}
