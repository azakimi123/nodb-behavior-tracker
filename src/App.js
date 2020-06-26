import React, { Component } from 'react';
import Form from './Components/Form';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      behaviorLog: []
    }
  }


  componentDidMount() {
    axios.get('/api/behaviors')
    .then(res => {
      this.setState({behaviorLog: res.data})
    })
    .catch(err => console.log(err));
  }




render() {
  // console.log(this.state.behaviorLog[0])
  let mappedBehaviors = this.state.behaviorLog.map((behavior, index) => (
    <Form key={index} behavior={behavior}/>
  ))
  return (
    <div>
      {mappedBehaviors}
    </div>
  )
}
}

export default App;
