import React from 'react';
import moment from 'moment';

class Daytime extends React.Component {
    render() {
      var details = this.props.details;
      var liKey = this.props.liKey;
      var date = moment(details.date).format('dddd DD MMMM YYYY')
      return (
          <li key={ liKey } className="daytime-card">
            <div className="daytime">{date} ({ details.daytime })</div>
            <ul className="guests">Invités : 
            {details.guests.map((guest, i)=> {
              return (
                
                  <li key={ i } className="guest"><span>{ guest }</span></li>
              )
            })}
            </ul>
            <hr/>
            {details.dishes.map((dish, i)=> {
              return (
                <div key={ i } className="dish">
                  <div>{dish.type} : {dish.name}</div>
                </div>
              )
            })}
          </li>
        )
    };
}

export default Daytime;