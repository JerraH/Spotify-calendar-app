import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteEvent} from '../store'

class Day extends Component {
  constructor(props) {
    super(props)
    this.clickAndSend = this.clickAndSend.bind(this)
  }

  clickAndSend(){
    this.props.onClick(this.props.date)
  }
  render() {
    return (
      <div className="day">
      {this.props.date ? <div className="topLevel">
        <span className="date">{this.props.date}</span>
        <span className="addEventButton" onClick={this.clickAndSend}>+</span>
      </div> : null }

        {this.props.events
          ? this.props.events.map(event => {
              return (
                <div key={this.props.date + event.id} className="eventPrint">
                  {event.name ? <span className="eventName">{event.name}</span> :
                  <span className="eventName">Event</span> }
                  { event.startTime ?
                    <span className="eventTime">
                    {event.startTime} - {event.endTime}
                  </span> : <span className="eventTime">1:00</span>
                  }
                  <div className="deleteButton" onClick={() => this.props.deleteEventBound(event)}>x</div>
                </div>
              )
            })
          : null}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user
})

const mapDispatchToProps = dispatch => {
  return {
    deleteEventBound(event) {
      dispatch(deleteEvent(event.id))
    }
  }
//   //getmonth
//   //getactivities
}
export default connect(mapStateToProps, mapDispatchToProps)(Day)


