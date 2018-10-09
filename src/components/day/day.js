import React from 'react';
import Daytime from './../daytime';

class Day extends React.Component {
    render() {
      var results = this.props.results;
      var date = this.props.date;
      return (
          <ul className="day-container">
          <div className="date">{ date }</div>
            {
              results.map((result, i) => {
                return <Daytime details={ result } key={ i } liKey={ i } />
              })
            }
          </ul>
        )
    };
}

export default Day;