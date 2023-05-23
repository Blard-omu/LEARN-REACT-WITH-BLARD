import React from 'react'
import Skills from './pages/Skills'


const User = (props) => {
  return (
    <div>
        <h1>{props.firstname} {props.lastname}</h1>
        <small>{props.occupation}</small>
        <Skills skills = {['HTML', 'CSS', 'Javascript', 'React']}/>
    </div>
  )
}

export default User