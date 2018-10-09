import React from 'react';

class Daytime extends React.Component {
    render() {
      var details = this.props.details;
      var liKey = this.props.liKey;
      return (
          <li key={ liKey } className="daytime-card">
            <div className="daytime">{ details.daytime }</div>
            <ul className="guests">Invités : 
            {details.guests.map((guest, i)=> {
              return (
                
                  <li key={ i } className="guest"><span>{ guest }</span></li>
              )
            })}
            </ul>
            <div>Plats :</div>
            {details.meals.map((meal, i)=> {
              return (
                <div key={ i }>
                  <div>{meal.type} : {meal.name}</div>
                </div>
              )
            })}
          </li>
        )
    };
}

export default Daytime;