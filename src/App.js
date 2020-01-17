import React, { Component } from "react";
import Person from "./Person/Person";
import "./styles.css";
import "./App.css";

class App extends Component {
  // return (
  //   <div className="App">
  //     <Person name="Jane" age="38"/>
  //     <Person name="Tom" age="17"/>
  //     <Person name="Michael" age="25">Hobbies: Racing and Dacing</Person>
  //   </div>
  // );
 
  state = {
    person : [
      { name: "Jane", age: 38 },
      { name: "Michael", age: 17 },
      { name: "Bob", age: 25 }
    ]
  };

  eventHandler1 = () => {
    this.setState({
      person : [
        { name: "Henry", age: 45 },
        { name: "Jack", age: 30 },
        { name: "Kelly", age: 22 }
        ]
      }
    )
  };

  eventHandler2 = () => {
    this.setState({
      person : [
        { name: "Jane", age: 38 },
        { name: "Michael", age: 19 },
        { name: "Bob", age: 25 }
      ]
     }
    )
  };
  
    render() {
      return (
        <div className="App">
          <button onClick={this.eventHandler1}>Click</button>
          <Person name={ this.state.person[0].name } age={ this.state.person[0].age }/>
          <Person name={ this.state.person[1].name } age={ this.state.person[1].age }/>
          <Person name={ this.state.person[2].name } age={ this.state.person[2].age }>Hobbies: Racing and Dacing</Person>
          <button onClick={this.eventHandler2}>Reset</button>
        </div>
      );
    } 
  };


export default App;
