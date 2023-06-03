import React from "react";

//  props is basically a way passing data across components in react, either from child to parent componentsand vice versa.

const Example = (props) => {
  // console.log(props);
  // you can destructure the props
  const { flag, data, handleClickProp, getValueFromChildComponent } = props;

  const handleValueChange =()=>{
    const count = 5;
    getValueFromChildComponent(count + 1);
  }
  return(
  <div>
    {flag ? <h1>{data}</h1> : 'flag is false'}
    <button onClick={handleClickProp}>Click</button>

    {/*
    -passing data from child to parent.
    -Notice that after the first click, the parent -component stopped updating the value.
    -we're not seeing the updated value cos we're not yet managing the state.
    -This takes us to stateteful and stateless components
    -Hooks
    */}
    <button onClick={handleValueChange}>Change value</button>
</div>
)
};

export default Example;


// State management, Hooks
// Lifecycle methods in class based components

// 1) componentDidMount()- This is called when the component is rendered on the dom. use case, when data is fetched from API.

// 2) componentDidUpdate()- This is called immediately after the component is updated. it can be use to manage side effects like. it takes in two properties: the prevProps and  prevState.

// 3) componentWillUnmount()- This is called immediately the component is destroyed. It's like a cleanup method or reset method. It can be use to cancel network requests, clean up DOM elements, local storage or cookies.