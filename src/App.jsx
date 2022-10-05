import React from "react";
import "./App.css";
import data from "./data";
import Nav from "./component/Nav";
import Card from "./component/Card";

function App() {
  const htmlElementt = data.map((con) => {
    return <Card key={con.id} props={con} />;
  });
  // console.log(htmlElementt);
  return (
    <div className="App">
      <Nav />
      <div className="card-container grid--1x2">{htmlElementt}</div>
    </div>
  );
}

export default App;
