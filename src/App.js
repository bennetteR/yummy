import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import './styles/App.css';
import Day from './components/day';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: null,
      focused: null,
      renderResults: []
    };

    moment.locale('fr', {
      months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
      weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
      weekdays : 'Dimanche_Lundi_Mardi_Mercredi_Jeudi_Vendredi_Samedi'.split('_')
   });

   //this.onDateChange = this.onDateChange.bind(this);
   //this.renderResults = this.renderResults.bind(this);
   
   this.data = [
    {
        "date": "06/10/2018",
        "guests": ["elise", "damien"],
        "daytime": "midi",
        "meals": [
            {
                "type": "Apéro",
                "name": "Toats chèvre pain épice",
                "url": ""
            },
            {
              "type": "Viande",
              "name": "Brochettes boeuf",
              "url": ""
            },
            {
              "type": "Légumes",
              "name": "Purée patates douces",
              "url": ""
            },
            {
              "type": "Dessert",
              "name": "Gâteau noix",
              "url": ""
            }
        ]
    },
    {
        "date": "10/10/2018",
        "guests": ["benoit", "murielle"],
        "daytime": "midi",
        "meals": [
          {
            "type": "Apéro",
            "name": "Toats chèvre pain épice",
            "url": ""
        },
        {
          "type": "Viande",
          "name": "Brochettes boeuf",
          "url": ""
        },
        {
          "type": "Légumes",
          "name": "Purée patates douces",
          "url": ""
        },
        {
          "type": "Dessert",
          "name": "Gâteau noix",
          "url": ""
        }
        ]
    },
    {
      "date": "10/10/2018",
      "guests": ["guillaume", "Noelie", "elise", "damien"],
      "daytime": "soir",
      "meals": [
        {
          "type": "Apéro",
          "name": "Toats chèvre pain épice",
          "url": ""
      },
      {
        "type": "Viande",
        "name": "Brochettes boeuf",
        "url": ""
      },
      {
        "type": "Légumes",
        "name": "Purée patates douces",
        "url": ""
      },
      {
        "type": "Dessert",
        "name": "Gâteau noix",
        "url": ""
      }
      ]
  }
]
  }

  onDateChange(date) {
    this.setState({ date, renderResults: false })
    const dateFormatted = moment(date).format('DD/MM/YYYY');
    var results = this.data.filter(value=>value.date === dateFormatted);
    this.setState({ renderResults: results });
  }

  renderResults() {
    if (this.state.renderResults.length > 0) {
      var results = this.state.renderResults;
      var date = moment(this.state.date).format('dddd DD MMMM YYYY');
      return <Day results={ results } date={ date }></Day>
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="main">
        <header className="header">
          <div><span className="title">YUMMY</span> The free meals recorder</div>
        </header>
        <div className="container">
          <div className="searchFormContainer">
            <div className="searchLabel">
              Chercher par invités, plat ou type
            </div>
            <div className="searchForm">
                <input type="text" placeholder="Essayer « Elise » ou « gratin »" />
            </div>  
          </div>
          <div className="datePickerContainer">
            <div className="searchLabel">
              Chercher par date
            </div>
            <SingleDatePicker
              showClearDate={true}
              date={this.state.date} // momentPropTypes.momentObj or null
              onDateChange={date => this.onDateChange(date)} // PropTypes.func.isRequired
              focused={this.state.focused} // PropTypes.bool
              onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
              id="your_unique_id" // PropTypes.string.isRequired
              isOutsideRange={() => false}
              displayFormat="DD/MM/YYYY"
            />
          </div>
          <div className="resultsContainer">
            { this.renderResults() }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
