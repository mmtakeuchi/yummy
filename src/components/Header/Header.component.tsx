import React from 'react'
import { Link } from 'react-router-dom'
import './Header.styles.css'

type Props = {}

const Header = (props: Props) => {

  return (
    <header className="header">
        <Link to="/" className="links">Meals</Link>
    </header>
  )
}

export default Header
