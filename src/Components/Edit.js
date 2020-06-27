import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
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
    this.setState({ editing: !this.state.editing });
  };

  render() {
    const date = this.state.date;
    const place = this.state.place;
    const behavior = this.state.behavior;

    // const {behavior} = this.props.behavior;
    console.log(this.props.behavior.id);


    return (
      <div className="tracked-container">
        <section className="tracked-behavior">
          <div className="top-row">
            <h4 className="date">Date: {this.props.behavior.date} </h4>
            <h4 className="place">Place: {this.props.behavior.place}</h4>
            {this.state.editing 
            ? 
            (
              <div>
                <div className="tracked-container">
                  <form className="tracked-behavior">
                    <section className="top-row">
                      <DatePicker
                        className="date"
                        selected={this.state.date}
                        onChange={this.handleDate}
                        showTimeSelect
                        dateFormat="Pp"
                      />
                      <input
                        className="place"
                        placeholder="Place"
                        value={this.state.place}
                        onChange={(e) => this.handlePlace(e.target.value)}
                      />
                    </section>
                    <div className="bottom-row">
                      <textarea
                        className="behavior"
                        placeholder="Enter Behavior"
                        value={this.state.behavior}
                        onChange={(e) => this.handleBehavior(e.target.value)}
                      />
                      <button
                        className="submit-button"
                        onClick={() =>
                          this.props.editFn(this.props.behavior.id, date, place, behavior)
                        }
                      >
                        Submit
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
          <div className="bottom-row">
            <h4 className="behavior">
              Behavior: {this.props.behavior.behavior}
            </h4>
            <button
              className="delete-button"
              onClick={() => this.props.deleteFn(this.props.behavior.id)}
            >
              Delete
            </button>
          </div>
          <section></section>
        </section>
      </div>
    );
  }
}

export default Edit;
