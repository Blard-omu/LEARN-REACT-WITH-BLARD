// useState hook is used to update the state of function based components
// It must be used inside the function body.
// Must be imported at the top level of your component
// It has three main parts: stateName, function to update the state(i.e setName()) and the useState(initialState)

import React, { useState, useEffect} from 'react'

const UseState = () => {
    // 
    const [count, setCount] = useState(0);
    const [isAuth, setAuth] = useState(false);
    // 
    const handleIncrease = () =>{
        setCount(count + 1);
    }
    const handleDecrease = () =>{
        setCount(count - 1);
    }
    const handleReset = () =>{
        setCount(0);
    }
    // useEffect
    // On every render, useEffect is called.
    useEffect(()=>{
        console.log("use Effect is called always");
    })

    // To avoid it from re-rendering everytime, you'll need to add an empty dependency array i.e componentDidMount()
    useEffect(()=>{
        console.log("use Effect is called only once")
    }, [])// useEffect as componentDidMount

    // useEffect as componentDidUpdate
    useEffect(()=>{
        if(count ===5){
            setAuth(true);
        }
    }, [count])// useEffect as componentDidUpdate
    

  return (
    <div>
        <h1 className='text-center display-2'>Count: {count}</h1>

        {isAuth && <p>Login successful!</p>}
        
        <button className='btn btn-danger' onClick={handleDecrease}>decrement</button>

        <button className='btn btn-info' onClick={handleReset}>Reset</button>

        <button className='btn btn-success' onClick={handleIncrease}>increment</button>
    </div>
  )
}

export default UseState
