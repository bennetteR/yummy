import React from 'react';
import Daytime from './../daytime';

class Day extends React.Component {
    render() {
      var results = this.props.results;
      return (
          <ul className="day-container">
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