import React from 'react'
import img1 from './images/photo-1575936123452-b67c3203c357.jpeg'
import Navbar from './Navbar'

const About = () => {
  return (
    <div>
        <Navbar title="Welcome To My About Page" des="This is my about page ...." links="Home" />
        <h1>About Page</h1>
        <img src={img1} alt="" />
    </div>
  )
}

export default About