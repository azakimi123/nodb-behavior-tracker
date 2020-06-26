import React, {Component} from 'react';



class Edit extends Component {
    constructor(props) {
        super(props);
        this.state ={
            date: this.props.behavior.date,
            place: this.props.behavior.place,
            behavior: this.props.behavior.behavior
        }
    }

    render() {
        return(
            <div>
                <section className='tracked-behavior-display'>
                    <h4>Date: {this.state.date}</h4>
                    <h3>Place: {this.state.place}</h3>
                    <h4>Behavior: {this.state.behavior}</h4>
                </section>
            </div>
        )
    }
}

export default Edit;