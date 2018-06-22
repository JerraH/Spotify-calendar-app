import React, { Component } from 'react';

class Calendar extends Component {
  render() {
    return (
      <div className="card calendar">
        <div className="card-title">MONTH</div>
        {
          // for (let i = 0; i < this.props.month.length; i++) {
          //   <Day date={{this.props.month} + '/' +  i} />
          // }
        }
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)


