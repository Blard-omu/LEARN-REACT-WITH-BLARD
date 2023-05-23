import React from 'react'

const Navbar = (props) => {
  return (
    <div>
        <h1>{props.title}</h1>
        <p>{props.des}</p>
        <a href="/">{props.links}</a>
    </div>
  )
}

export default Navbar