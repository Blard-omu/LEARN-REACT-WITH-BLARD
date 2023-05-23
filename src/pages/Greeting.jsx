import React from 'react'

const Greeting = (props) => {
   let status = props.status ? 'I am married' : 'I am still single'
  return (
    <div>
        <h2>Hello! I'm  {props.name}, I am {props.age} years old</h2>
        <p>{status}</p>


    </div>
  )
}

export default Greeting