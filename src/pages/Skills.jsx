import React from 'react'

const Skills = (props) => {
    const skillList = props.stacks.map((skill) =><li>{skill}</li>)

  return (
    <div>
        <ul>{skillList}</ul>
    </div>
  )
}

export default Skills