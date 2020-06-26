import React, {Component} from 'react';



class Edit extends Component {
    constructor(props) {
        super(props);
        this.state ={
            date: '',
            place: '',
            behavior: ''
        }
    }



    render() {
        
        // const {behavior} = this.props.behavior;
        console.log(this.props.behavior.id)
        return(
            <div className='tracked-container'>
                <section className='tracked-behavior'>
                    <h4>Date: {this.props.behavior.date} </h4> 
                    <h4>Place: {this.props.behavior.place}</h4>
                    <h4>Behavior: {this.props.behavior.behavior}</h4>
                    <section className='buttons'>
                        <button>Edit</button>
                        <button onClick={ () => this.props.deleteFn(this.props.behavior.id)}>Delete</button>
                    </section>
                </section>
            </div>
        )
    }
}

export default Edit;