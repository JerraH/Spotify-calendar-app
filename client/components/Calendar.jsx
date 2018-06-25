import React, {Component} from 'react'
import Day from './Day.jsx'
import {connect} from 'react-redux'
import 'datejs'
import {Link} from 'react-router-dom'
import EventForm from './Event-Form.jsx'
import {getEventsOnDay, nextMonth, lastMonth} from '../store'

class Calendar extends Component {
  constructor(props) {
    super(props)
    this.daysArr = []

    this.state = {
      showForm: false
    }
    this.formAppear = this.formAppear.bind(this)
    this.nextMonthBound = this.props.nextMonthBound.bind(this)
    this.incrementMonth = this.incrementMonth.bind(this)
    this.decrementMonth = this.decrementMonth.bind(this)
  }

  formAppear = event => {
    if (!this.state.showForm) {
      this.setState({showForm: true})
    }
    event.target.setSelected()
  }

  componentDidMount() {
    this.props.getAllEventsOnDay(this.props.month)
  }
  incrementMonth() {
    this.props.nextMonthBound(this.props.month + 1)
  }
  decrementMonth() {
    this.props.lastMonthBound(this.props.month - 1)
  }

  render() {
    return (
      <div className="card calendar">
        {this.state.showForm ? <EventForm /> : null}
        <div className="card-title">
          <button type="button" onClick={this.decrementMonth}>left</button>
          <h1>{this.props.monthName}</h1>
          <button type="button" onClick={this.incrementMonth}>
            r
          </button>
        </div>

        {Array(this.props.monthLength)
          .fill()
          .map((x, i) => {
            return (
              <Day
                date={i + 1}
                key={this.props.month + '&' + i}
                onClick={this.formAppear}
                events={
                  this.props.events
                    ? this.props.events.filter(event => {
                        return event.startDate === i + 1
                      })
                    : null
                }
              />
            )
          })}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    events: state.events,
    user: state.user,
    month: state.dates.month,
    monthName: state.dates.monthName,
    monthLength: state.dates.monthLength,
    firstDay: state.dates.firstDay
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllEventsOnDay(month, user) {
      dispatch(getEventsOnDay(month, user))
    },
    lastMonthBound(month) {
      dispatch(lastMonth())
      dispatch(getEventsOnDay(month))
    },
    nextMonthBound(month) {
      dispatch(nextMonth())
      dispatch(getEventsOnDay(month))
    }
  }
  //getmonth
  //getactivities
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
