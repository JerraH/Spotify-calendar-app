import React, { Component } from 'react';

export default class Day extends Component {
  render() {
    return (
      <div className="day">
          <span className="date">
          {this.props.day}
          </span>
          {this.props.events.map((event) => {
            return (
              <div>
                <span className="eventName">{event.name}</span>
                <span className="eventTime">{event.startTime} - {event.endTime}</span>
              </div>

            )
          })}

      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => ({

})

