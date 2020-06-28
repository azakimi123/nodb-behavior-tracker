import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      show: true,
      date: new Date(),
      place: "",
      behavior: ""
    };
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

handleToggle = () => {
    this.handleShow()
    this.setState({ editing: !this.state.editing });
}

handleShow = () => {
    this.setState({show: false});
}

  render() {
    const date = this.state.date;
    const place = this.state.place;
    const behavior = this.state.behavior;

    // const {behavior} = this.props.behavior;
    console.log(this.props.behavior.id);


    return (
    <div>
      <div className="tracked-container">
          {
              this.state.show?
                <section className="tracked-behavior">
                <div className="top-row">
                    <h4 className="date">Date: {this.props.behavior.date} </h4>
                    <h4 className="place">Place: {this.props.behavior.place}</h4>
                </div>
                <div className="bottom-row">
                <h4 className="behavior">
                    Behavior: {this.props.behavior.behavior}
                </h4>
                <button
                    className="delete-button"
                    onClick={() => this.props.deleteFn(this.props.behavior.id)}>
                    Delete
                </button>
                </div>
                </section>
                : null
          }
              
            {this.state.editing 
            ? 
            (
              <div>
                <div className="edit-tracked-container">
                  <form className="edit-tracked-behavior">
                    <section className="edit-top-row">
                      <DatePicker
                        className="edit-date"
                        selected={this.state.date}
                        onChange={this.handleDate}
                        showTimeSelect
                        dateFormat="Pp"
                      />
                      <input
                        className="edit-place"
                        placeholder="Place"
                        value={this.state.place}
                        onChange={(e) => this.handlePlace(e.target.value)}
                      />
                    </section>
                    <div className="edit-bottom-row">
                      <textarea
                        className="edit-behavior"
                        placeholder="Enter Behavior"
                        value={this.state.behavior}
                        onChange={(e) => this.handleBehavior(e.target.value)}
                      />
                      <button
                        className="edit-submit-button"
                        onClick={() =>
                          this.props.editFn(this.props.behavior.id, date, place, behavior)
                        }
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            ) 
            : 
            (
              <div>
                <button
                  className="edit-button"
                  onClick={() => this.handleToggle()}
                >
                  Edit
                </button>
              </div>
            )}
            {/* <button onClick={ () => this.handleToggle()} className='edit-button'>Edit</button> */}
          </div>
    </div>
      
    );
  }
}

export default Edit;
