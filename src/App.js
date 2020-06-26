import React, { Component } from 'react';
// import Form from './Components/Form';
import Header from './Components/Header';
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
  postBehavior = (info) => {
    axios.post('/api/behaviors', {info: info})
    .then(res => {
      this.setState({behaviorLog: res.data})
    })
    .catch(err => console.log(err));
  }

  //going to pass this as prop to Edit.js and update App.js state
  editBehavior = (id, newDate, newPlace, newBehavior) => {
    let date = {date: newDate};
    let place = {place: newPlace};
    let behavior = {behavior: newBehavior};

    axios.put(`/api/behaviors/${id}`, date, place, behavior)
    .then(res => {
      this.setState({behaviorLog: res.data})
    })
    .catch(err => console.log(err));
  }

  //going to pass this as prop to Edit.js and update App.js state
  deleteBehavior = (id) => {
    axios.delete(`/api/behaviors/${id}`)
    .then(res => {
      this.setState({behaviorLog: res.data})
    })
    .catch(err => console.log(err))
  }




render() {
  // console.log(this.state.behaviorLog[0])
  return (
    <div>
      <Header />
    </div>
  )
}
}

export default App;
