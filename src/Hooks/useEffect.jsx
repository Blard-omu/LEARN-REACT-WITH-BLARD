import { useEffect } from "react";
// useEffect Hook
// It's use to perform side effects
// It usually run anytime page is loaded/rendered i.e componentDidMount()
// It runs when component is updated i.e componentDidUpdate()
// It runs when component is destroyed i.e componentWillUnload()


const UseEffect = () => {
    useEffect(()=>{
        console.log("use Effect is called")
    })
  return (
    <div>

    </div>
  )
}

export default UseEffect