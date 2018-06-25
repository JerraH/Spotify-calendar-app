import React, {Component} from 'react'
import Day from './Day.jsx'
import {connect} from 'react-redux'
import 'datejs'
import {Link} from 'react-router-dom'
import EventForm from './Event-Form.jsx'
import {getEventsOnDay} from '../store'

class Calendar extends Component {
  constructor(props) {
    super(props)
    this.daysArr = []

    this.state = {
      showForm: false
    }
    this.formAppear = this.formAppear.bind(this)
    this.nextMonth = this.nextMonth.bind(this)
  }

  nextMonth = () => {
    this.state.month.increment()
  }

  formAppear = event => {
    if (!this.state.showForm) {
      this.setState({showForm: true})
    }
    event.target.setSelected()
  }

  componentDidMount() {
    this.props.getMonthBound()
    .then(
      this.props.getAllEventsOnDay(this.props.month)
    )
  }

  render() {
    return (
      <div className="card calendar">
        {this.state.showForm ? <EventForm /> : null}
        <div className="card-title">
          <button type="button">left</button>
          <h1>{this.props.monthName}</h1>
          <button type="button" onClick={this.nextMonth}>
            r
          </button>
        </div>

        {Array(this.props.monthLength)
          .fill()
          .map((x, i) => {
            return (
              <Day
                date={i + 1}
                key={this.props.month + i}
                month={this.props.month}
                onClick={this.formAppear}
                events={this.props.events.filter(event => {
                  return event.startDate === i + 1
                })}
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
    month: state.month,
    monthName: state.monthName,
    monthLength: state.monthLength,
    firstDay: state.firstDay
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllEventsOnDay(month, user) {
      dispatch(getEventsOnDay(month, user))
    },
    getMonthBound() {
      dispatch(getMonth())
    }
  }
  //getmonth
  //getactivities
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
