import React, { Component } from 'react'
import Layout from '../components/Layout'
import Message from '../components/Message'

export default class Index extends Component {
  render() {
    let avatar = 'http://images.hellogiggles.com/uploads/2016/10/08143330/82639965_game-of-thrones-season-2-jon-snow.jpg'

    return (
      <Layout>
        <div className={`wrapper`}>
          <article>
            <h1 className={`header`}>Basic props & state</h1>
          </article>
          <div className={`contents`}>
            <h4>{`Use default props`}</h4>
            <Message />
          </div>
          <div className={`contents`}>
            <h4>{`Input custom props`}</h4>
            <Message name={`John Snow`} avatar={avatar} />
          </div>
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
          .wrapper {
            width: 400px;
            margin: 0 auto;
            position: relative;
          }
          .contents {
            display: block;
            position: relative;
            margin-bottom: 60px;
          }
        `}</style>
      </Layout>
    )
  }
}
