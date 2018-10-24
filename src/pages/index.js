import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>freeCodeCamp 2018 JAMstack Hackathon</h1>
    <h2>astv99</h2>
    <p>Full-stack JS developer (Vue.js, Node.js + Express.js, SQL)</p>
    <p>Visit my <a href="https://www.freecodecamp.org/forum/u/astv99">profile</a> on freeCodeCamp</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
