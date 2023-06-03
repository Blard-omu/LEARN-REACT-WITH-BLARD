import { createContext } from 'react'

// context Hook is used to manage global state
// step 1: creating the context
// step 2: It comes with two important methods, Consumer, Provider
// Export the context
// wrap the component with the provider

export const MyContext = createContext('yellow')
// console.log(MyContext);


