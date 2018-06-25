import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getEventsOnDay} from '../store'

export default class Day extends Component {
  render() {
    return (
      <div className="day" onClick={this.props.onClick}>
        <span className="date">{this.props.date}</span>
        {console.log('props', this.props)}
        {this.props.events
          ? this.props.events.map(event => {
              return (
                <div key={this.props.date + event.id}>
                  <span className="eventName">{event.name}</span>
                  <span className="eventTime">
                    {event.startTime} - {event.endTime}
                  </span>
                </div>
              )
            })
          : null}
      </div>
    )
  }
}

// const mapStateToProps = (state, ownProps) => ({
//   events: state.events,
//   user: state.user
// })

// const mapDispatchToProps = dispatch => {
//   return {
//     getAllEventsOnDay(month, day, user) {
//       dispatch(getEventsOnDay(month, day, user))
//     }
//   }
//   //getmonth
//   //getactivities
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Day)
