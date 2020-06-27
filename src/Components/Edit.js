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
                    <div className='top-row'>
                        <h4 className='date'>Date: {this.props.behavior.date} </h4> 
                        <h4 className='place'>Place: {this.props.behavior.place}</h4>
                        <button className='edit-button'>Edit</button>
                    </div>
                    <div className='bottom-row'>
                        <h4 className='behavior'>Behavior: {this.props.behavior.behavior}</h4>
                        <button className='delete-button' onClick={ () => this.props.deleteFn(this.props.behavior.id)}>Delete</button>
                    </div>
                    <section className='buttons'>
                    </section>
                </section>
            </div>
        )
    }
}

export default Edit;