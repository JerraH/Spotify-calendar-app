import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createEvent} from '../store'

class EventForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      startDate: '',
      startTime: '',
      endTime: '',
      endDate: '',
      description: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()

    //dispatching the new event into the store and from there into the database
    this.props.createEventBound(this.state, this.props.user)

  }

  render() {
    return (
      <div className="modal">
        <div className="modal-dialog">
          <div className="modal-title">
            <h3>Create New Event</h3>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="eventName">Event Name</label>
              <input
                type="text"
                className="form-control"
                id="eventName"
                aria-describedby="eventName"
                placeholder="Enter Event Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                className="form-control"
                id="startDate"
                aria-describedby="startDate"
                placeholder={this.props.startDate}
              />
            </div>
            <div className="form-group">
              <label htmlFor="startTime">Start Date</label>
              <input
                type="time"
                className="form-control"
                id="startTime"
                aria-describedby="startTime"
                placeholder={this.props.startDate}
              />
            </div>

            <div className="form-group">
              <label htmlFor="endDate">End Date</label>
              <input
                type="date"
                className="form-control"
                id="endDate"
                aria-describedby="endDate"
                placeholder={this.props.startDate}
              />
            </div>
            <div className="form-group">
              <label htmlFor="endTime">Start Date</label>
              <input
                type="time"
                className="form-control"
                id="endTime"
                aria-describedby="endTime"
                placeholder={this.state.startTime ? Date.add(this.state.startTime, 1) : null}
              />
            </div>
            <div className="form-group">
              <label htmlFor="eventDescription">Description</label>
              <input
                type="text"
                className="form-control"
                id="eventDescription"
                aria-describedby="eventDescription"
              />
            </div>
            <div className="buttonholder">
              <button type="submit" className="btn btn-submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => {
  return {
    createEventBound(newEvent, user) {
      dispatch(createEvent(newEvent, user))
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(EventForm)
