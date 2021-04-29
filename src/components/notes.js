/*
import React from "react";

ReactDOM.render(WHAT DO I WANT TO RENDER, WHERE DO I WANT TO RENDER IT)document.getElementById("root")

rafce - maps out a function for component building

rcc React Class component 

impt = imports prop types

import React from "react"; */

export default class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
  
    render() {
      return (
        <button
          className="btn btn-primary"
          onclick={() => this.setState((state) => ({ count: state.count + 1 }))}
        >
          Counter {this.state.count}
        </button>
      );
    }
  }
  
  ///index.js would look something like below:
  
  import React from "react";
  import ReactDOM from "react-dom";
  
  import App from "./App";
  
  ReactDOM.render(<App />, document.getElementById("root"));
  
  //React Inline styles with stypeling property
  // https://scrimba.com/learn/learnreact/react-inline-styles-with-the-style-property-cbyv9hb
  import React from "react";
  import ReactDOM from "react-dom";
  
  function App() {
    //var d = new Date(year, month, day, hours, minutes(notUsed), seconds, milliseconds);
    const date = new Date(2018, 6, 31, 15); //creates a new Date object with the label - date.
    const hours = date.getHours(); //uses the method getHours to return the hours in the date
    let timeOfDay; //creates the lable(variable) time of day but no definition
    const styles = {
      fontSize: 30,
    };
  
    if (hours < 12) {
      timeOfDay = "morning";
      styles.color = "#04756F";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon";
      styles.color = "#8914A3";
    } else {
      timeOfDay = "night";
      styles.color = "#D90000";
    }
  
    return <h1 style={styles}>Good {timeOfDay}!</h1>;
  }
  
  import React, { Component } from "react";
  
  export default class counter extends Component {
    render() {
      return <div></div>;
    }
  