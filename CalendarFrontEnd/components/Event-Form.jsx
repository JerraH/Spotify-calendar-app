import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createEvent} from '../store'
import moment from 'moment'
moment().format()

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
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.myDate = moment()
      .year(this.props.year)
      .month(this.props.month)
      .date(this.props.date)
      .format('YYYY-MM-DD')
      .toString()
    this.myDate2 = moment()
      .year(this.props.year)
      .month(this.props.month)
      .date(this.props.date)
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    let myEvent = {}
    if (this.state.startDate === '') {
      myEvent.startDate = this.myDate2.date()
      myEvent.month = this.myDate2.month()
      myEvent.year = this.myDate2.year()
      console.log('first myevent', myEvent)
    }
    else {
      myEvent.startDate = this.state.startDate.date()
      myEvent.month = this.state.startDate.month()
      myEvent.year = this.state.startDate.year()
    }
    if (this.state.endDate === '') {
      myEvent.endDate = myEvent.startDate
    }
    else {
      myEvent.endDate = this.state.endDate.date()
    }
    myEvent.name = this.state.name;
    myEvent.description = this.state.description;

    //dispatching the new event into the store and from there into the database
    this.props.createEventBound(myEvent, this.props.user)
    this.props.formDisappear()
  }

  render() {
    return (
      <div className="modal">
        <div className="modal-dialog">
          <div className="modal-title">
            <h3>Create New Event</h3>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Event Name</label>
              <input
                name="name"
                onChange={this.handleChange}
                type="text"
                className="form-control"
                id="name"
                aria-describedby="eventName"
                placeholder="Enter Event Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="startDate">Start Date</label>
              <input
                name="startDate"
                onChange={this.handleChange}
                type="date"
                className="form-control"
                id="startDate"
                aria-describedby="startDate"
                value={this.myDate}
              />
            </div>
            <div className="form-group">
              <label htmlFor="startTime">Start Time</label>
              <input
                name="startTime"
                onChange={this.handleChange}
                type="time"
                className="form-control"
                id="startTime"
                aria-describedby="startTime"
                placeholder={this.props.time}
              />
            </div>

            <div className="form-group">
              <label htmlFor="endDate">End Date</label>
              <input
                name="endDate"
                onChange={this.handleChange}
                type="date"
                className="form-control"
                id="endDate"
                aria-describedby="endDate"
                value={this.myDate}
              />
            </div>
            <div className="form-group">
              <label htmlFor="endTime">End Time</label>
              <input
                name="endTime"
                onChange={this.handleChange}
                type="time"
                className="form-control"
                id="endTime"
                aria-describedby="endTime"
                placeholder={
                  this.state.startTime
                    ? Date.add(this.state.startTime, 1)
                    : null
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                name="description"
                onChange={this.handleChange}
                type="text"
                className="form-control"
                id="eventDescription"
                aria-describedby="description"
              />
            </div>
            <div className="buttonholder">
              <button type="submit" className="btn btn-submit">
                Submit
              </button>
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

const mapDispatchToProps = dispatch => {
  return {
    createEventBound(newEvent, user) {
      dispatch(createEvent(newEvent, user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventForm)
