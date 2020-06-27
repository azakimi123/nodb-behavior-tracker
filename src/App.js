import React, { Component } from 'react';
import Header from './Components/Header';
import Tracked from './Components/Tracked';
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

  //display the previously logged behavior
  componentDidMount() {
    axios.get('/api/behaviors')
    .then(res => {
      this.setState({behaviorLog: res.data})
    })
    .catch(err => console.log(err));
  }

  //going to pass this function as a prop to Form.js and update App.js state
  postBehavior = (inDate, inPlace, inBehavior) => {
    // let date = {date:inDate};
    // let place = {place:inPlace};
    // let behavior = {behavior:inBehavior};

    axios.post('/api/behavior', {
      date: inDate,
      place: inPlace,
      behavior: inBehavior
    })
    .then(res => {
      this.setState({behaviorLog: res.data})
    })
    .catch(err => console.log(err));
  }

  //going to pass this as prop to Edit.js and update App.js state
  editBehavior = (id, newDate, newPlace, newBehavior) => {
    // let date = {date: newDate};
    // let place = {place: newPlace};
    // let behavior = {behavior: newBehavior};

    axios.put(`/api/behavior/${id}`, {
      date: newDate,
      place: newPlace,
      behavior: newBehavior
    })
    .then(res => {
      this.setState({behaviorLog: res.data})
    })
    .catch(err => console.log(err));
  }

  //going to pass this as prop to Edit.js and update App.js state
  deleteBehavior = (id) => {
    axios.delete(`/api/behavior/${id}`)
    .then(res => {
      this.setState({behaviorLog: res.data})
    })
    .catch(err => console.log(err))
  }





render() {
  // console.log(this.state.behaviorLog[0])
  return (
    <div className='App'>
      <Header />
      <Form 
        postBehaviorFn={this.postBehavior}/>
      <Tracked
        behaviorLog={this.state.behaviorLog}
        deleteFn={this.deleteBehavior}
        editFn={this.editBehavior}/>
    </div>
  )
}
}

export default App;
