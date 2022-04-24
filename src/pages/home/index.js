import React, { Fragment } from 'react'
import Navbar from '../../components/navbar'

import {
  Features, Hero, Portfolio, Resume, Testimonial,
  Clients, Pricing, Blog, Contact, Footer
} from "../../containers"
const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Features />
      <Portfolio />
      <Resume />
      <Testimonial />
      <Clients />
      <Pricing />
      <Blog />
      <Contact />
      <Footer />
    </Fragment>
  )
}

export default Home