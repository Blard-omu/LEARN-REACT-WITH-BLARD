import React from "react";
import './App.css'
import Contact from "./Contact";
import User from "./User";

// React component
const Home = ()=>{
    return(
        <div className="home">
            <h1>Hello world</h1>
            <Contact/>
            <User firstname="Blard" lastname="Omu" occupation="junior Dev"  />
           


        </div>
    )
}

export default Home
