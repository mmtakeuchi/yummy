import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.styles.css'

const Footer = () => {
  return (
    <footer>
        <Link className="footer-links" to={{ pathname: "https://github.com/mmtakeuchi" }} target="_blank">Github</Link>
    </footer>
  )
}

export default Footer
