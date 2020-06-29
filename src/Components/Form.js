import React, {Component} from 'react';
import Edit from './Edit';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getMonth } from 'date-fns';
// import {format} from 'date-fns';



class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            place: '',
            behavior: ''
        }
    }

    handleDate = val => {
        let month = this.state.val.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;

        this.setState({date: month});
    }

    handlePlace = input => {
        this.setState({place: input});
    }

    handleBehavior = input => {
        this.setState({behavior: input})
    }

    render() {
        
        const date = this.state.date;
        const place = this.state.place;
        const behavior = this.state.behavior;
        let month = date.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
        console.log(month)

        return(
            <div>
                <h2 className='form-title'>BEHAVIOR OBSERVATION FORM</h2>
                <div className='form-container'>
                    <form className='form-behavior-card'>
                        <section className='form-top-row'>
                            {/* <input
                            value={this.state.date}
                            className='form-date'
                            onChange={ e => this.handlePlace(e.target.value)}/> */}
                            <DatePicker
                                className='form-date' 
                                selected={this.state.date} 
                                onChange={this.handleDate} 
                                showTimeSelect
                                dateFormat="PPp"/>
                            <input
                                className='form-place'
                                placeholder='Place'
                                value={this.state.place}
                                onChange={ e => this.handlePlace(e.target.value)}/>
                        </section>
                        <div className='form-bottom-row'>
                            <textarea
                                className='form-behavior'
                                placeholder='Enter Behavior'
                                value={this.state.behavior}
                                onChange={e => this.handleBehavior(e.target.value)}/>
                            <button className='submit-button' onClick={ () => this.props.postBehaviorFn(date, place, behavior)}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form;