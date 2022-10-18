// import React from 'react';
import Header from "./components/Header";

function App() {
  const fname = 'Patience';
  const lname = 'Igiraneza';

  return (
    <div className="container">
      <Header title="My website title"/>
      <h1> Welcome to my first React JS app, <br></br>   </h1>
      <h2> React is dreams maker of {fname} {lname}. </h2>
    </div>
  );
}

// class App extends React.Component{
//   render(){
//     return <h1> Hello from the class </h1>
//   }
// }

export default App;
