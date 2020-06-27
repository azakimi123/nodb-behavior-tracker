
//App code with mapping to display data on page
// import React, { Component } from 'react';
// import Form from './Components/Form';
// import axios from 'axios';
// import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       behaviorLog: []
//     }
//   }


//   componentDidMount() {
//     axios.get('/api/behaviors')
//     .then(res => {
//       this.setState({behaviorLog: res.data})
//     })
//     .catch(err => console.log(err));
//   }




// render() {
//   // console.log(this.state.behaviorLog[0])
//   let mappedBehaviors = this.state.behaviorLog.map((behavior, index) => (
//     <Form key={index} behavior={behavior}/>
//   ))
//   return (
//     <div>
//       {mappedBehaviors}
//     </div>
//   )
// }
// }

// export default App;


//Form.js >>>>>>>>>>>>>>>>>>>>>>>>>>
// getting props from App.js to display data on page
// import React, {Component} from 'react';


// class Form extends Component {
//     constructor(props) {
//         super(props);
//         this.state ={
//             date: this.props.behavior.date,
//             place: this.props.behavior.place,
//             behavior: this.props.behavior.behavior
//         }
//     }

//     render() {
//         return(
//             <div>
//                 <h4>Date: {this.state.date}</h4>
//                 <h3>Place: {this.state.place}</h3>
//                 <h4>Behavior: {this.state.behavior}</h4>
//             </div>
//         )
//     }
// }

// export default Form;


//Ternary for toggle edit
{this.state.editing
    ? (
        <div>
            <input
            value={this.state.date}/>
            <input
            value={this.state.place}
            onChange={e => this.handlePlaceInput(e.target.value)}/>
            <input
            value={this.state.behavior}/>
        </div>
    )
    : (
        <div>
            <button 
            className='edit-button'
            onClick={ () => this.handleToggle}>
            Edit</button>
        </div>
    )}