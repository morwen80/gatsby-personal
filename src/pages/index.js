import React from "react";
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <div>
      <h1>Ciao!</h1>
      <h2>I'm Valeria, a full-stack developer living in London.</h2>
      <p>Need a developer? <Link to="/contact">Contact me!</Link></p>
    </div>
  )
}

export default IndexPage
