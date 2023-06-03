// index.js
import React, { Component} from 'react'


// Stateteful component
class States extends Component {
  // declaring state
  state = {
    count: 0,
    // loading: true,
  }

  
  render() {
    // accessing the state value
    const count = this.state.count
    // const loading = this.state.loading

    return (
      <div className='states col-md-4 offset-md-3 bg-black d-flex flex-column justify-content-center align-items-center '>
        <h1>Counter App</h1>
        <h1 className='text-center'>{count} </h1>
        <div className='text-center'>
        <button className='btn btn-outline-success me-3' onClick={()=>this.setState({count: this.state.count - 1})}>Decrease</button>
        <button className='btn btn-outline-success' onClick={()=>this.setState({count: this.state.count + 1})}>Increase</button>
        </div>
      </div>
    )
  }
}
export default States
