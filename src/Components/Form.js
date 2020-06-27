import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


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
        this.setState({date: val});
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
        console.log(behavior)

        return(
            <div>
                <h2 className='form-title'>BEHAVIOR OBSERVATION FORM</h2>
                <div className='form-container'>
                    <form className='form-behavior-card'>
                        <section className='form-top-row'>
                            <DatePicker
                                className='form-date' 
                                selected={this.state.date} 
                                onChange={this.handleDate} 
                                showTimeSelect
                                dateFormat="Pp"/>
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