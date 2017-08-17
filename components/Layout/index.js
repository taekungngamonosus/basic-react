import React, { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default class Layout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Head>
          <title>{ this.props.title }</title>
        </Head>
        <div className={`wrapper`}>
          <div className={`navbar`}>
            <Link href={`/`}><a>Home</a></Link>
            <Link href={`/todolist`}><a>Todo List</a></Link>
          </div>
          <div>
            { this.props.children }
          </div>
        </div>
        <style jsx>{`
          .wrapper {
            width: 640px;
            margin: 0 auto;
            font: 15px 'Roboto', Helvetica, Arial, sans-serif;
            background: #fbfbfb;
            display: block;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, .08);
          }
          .navbar {
            text-align: center;
            padding: 10px 20px;
            background-color: #ffffff;
            box-shadow: 0 1px 3px rgba(0, 0, 0, .08);
          }
          .navbar a {
            font-size: 16px;
            font-weight: 400;
            color: #2c2f30;
            text-decoration: none;
            padding: 0 15px;
            position: relative;
            transition: all 0.2s ease-in-out;
          }
          .navbar a:hover, .navbar a:active {
            color: #4dd0e1;
            text-decoration: underline;
          }
          .navbar a::after {
            content: "|";
            position: absolute;
            right: 0;
          }
          .navbar a:last-child::after {
            content: none;
          }
        `}</style>
      </div>
    )
  }
}

Layout.defaultProps = {
  title: 'Hello : Next.js'
}
