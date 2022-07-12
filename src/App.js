import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Login from './components/String/String.js'
// import Book from "./components/Array/Array.js";
import Object from "./components/object/Object";
import "./App.css";

const App = () => {
  // const arr = ["Afifa", "Bilal", "Cat", "Dog"];
  // const num = ["1", "2", "3", "4"];
  const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

  return (
    <div>
      {/* <h1 className=' text-center'>hi</h1>
      <Login b="learning react js"/> */}
      {/* <Book arr={arr} title="Story Books" num={num} /> */}
      <Object person={person}/>
      
    </div>
  );
};

export default App;
