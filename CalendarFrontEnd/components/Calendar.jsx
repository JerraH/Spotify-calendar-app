import React, {Component} from 'react'
import Day from './Day.jsx'
import {connect} from 'react-redux'
import 'datejs'
import {Link} from 'react-router-dom'
import EventForm from './Event-Form.jsx'
import {getAllEventsForMonth, nextMonth, lastMonth} from '../store'
import moment from 'moment'

class Calendar extends Component {
  constructor(props) {
    super(props)
    this.daysArr = []

    this.state = {
      showForm: false,
    }
    this.formAppear = this.formAppear.bind(this)
    this.nextMonthBound = this.props.nextMonthBound.bind(this)
    this.incrementMonth = this.incrementMonth.bind(this)
    this.decrementMonth = this.decrementMonth.bind(this)
    this.formDisappear = this.formDisappear.bind(this)
    this.daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ]
  }

  formAppear = date => {
    this.setState({
      defaultFormDate: date,
      defaultFormMonth: this.props.month,
      defaultFormYear: this.props.year
    })

    if (!this.state.showForm) {
      console.log(this.state.defaultFormDate)
      this.setState({showForm: true})
    }
  }

  formDisappear() {
    this.setState({showForm: false})
  }

  componentDidMount() {
    this.props.getAllEventsForMonthBound(this.props.month, this.props.user)
  }
  incrementMonth() {
    this.props.nextMonthBound(this.props.month + 1, this.props.user)

  }
  decrementMonth() {
    this.props.lastMonthBound(this.props.month - 1, this.props.user)
  }

  render() {
    return (
      <div className="card calendar">
        {this.state.showForm ? (
          <EventForm
            date={this.state.defaultFormDate}
            year={this.state.defaultFormYear}
            month={this.state.defaultFormMonth}
            formDisappear={this.formDisappear}
          />
        ) : null}
        <div className="card-title">
          <button type="button" onClick={this.decrementMonth}>
            left
          </button>
          <h1>{this.props.monthName}</h1>
          <button type="button" onClick={this.incrementMonth}>
            r
          </button>
        </div>
        <div className="weekdayNames">
          {this.daysOfWeek.map(name => {
            return (
              <div className="dayofweek" key={name}>
                {name}
              </div>
            )
          })}
        </div>

        {Array(this.props.firstDay.weekday())
          .fill()
          .map((x, i) => {
            return <Day key={'dayofweek' + i} />
          })}
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
    firstDay: state.dates.firstDay,
    year: state.dates.year
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllEventsForMonthBound(month, user) {
      dispatch(getAllEventsForMonth(month, user))
    },
    lastMonthBound(month, user) {
      dispatch(lastMonth())
      dispatch(getAllEventsForMonth(month, user))
    },
    nextMonthBound(month, user) {
      dispatch(nextMonth())
      dispatch(getAllEventsForMonth(month, user))
    }
  }
  //getmonth
  //getactivities
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
