import React, {Component, useState} from "react";
import '../styles/App.css';

const projects = [
    {
      name: "AI Chatbot",
      description: "A smart chatbot that can answer user queries using NLP."
    },
    {
      name: "E-commerce Website",
      description: "An online platform to buy and sell products."
    },
    {
      name: "Fitness Tracker",
      description: "An app to track workouts, calories, and health stats."
    }
  ];



const App = () => {
  return (
    <div id="main">
      {
        projects.map((pro,key)=>{
      <div key={index}>
      <h1 data-ns-test="project-name">Project-name:{pro.name}</h1>
      <h6 data-ns-test="project-description">Description:{pro.description}</h6>
      </div>
        })
      }
    </div>
    
  )
}


export default App;
