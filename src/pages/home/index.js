import React, { Fragment } from 'react'
import Navbar from '../../components/navbar'
import { Features, Hero, Portfolio } from "../../containers"
const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Features />
      <Portfolio />
    </Fragment>
  )
}

export default Home