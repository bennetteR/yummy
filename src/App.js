import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import './styles/App.css';
import Day from './components/day';
import SearchInput from './components/searchInput';
import Modal from 'react-modal';
import AddMealModal from './containers/addmealModalContainer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: null,
      focused: null,
      renderResults: [],
      modalIsOpen: false
    };

    moment.updateLocale('fr', {
      months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
      weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
      weekdays : 'Dimanche_Lundi_Mardi_Mercredi_Jeudi_Vendredi_Samedi'.split('_')
   });

  this.customStyles = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '600px',
      height: '600px',
      border: '1px solid #EBEBEB',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }
  };
  }

  //TODO remove when removing container
  componentWillMount(){
    this.props.fetchAllMeals();
    this.props.fetchAllGuests();
    this.guests = this.props.guests.guests;
  }

  searchBy(query){
    var meals = this.props.meals.meals;
    var guests = this.props.guests.guests;
    var guestFound = guests.filter(guest=>(guest.firstname === query || guest.lastname === query || guest.alias === query));
    if (guestFound.length > 0){
      var guestId = guestFound[0].id;
      var results = meals.filter(value=>value.guests.includes(guestId));
      this.setState({ renderResults: results });
    }
  }

  onDateChange(date) {
    var meals = this.props.meals.meals;
    this.setState({ date, renderResults: false });
    const dateFormatted = moment(date).format('DD/MM/YYYY');
    var results = meals.filter(value=>value.date === dateFormatted);
    this.setState({ renderResults: results });
  }

  renderResults() {
    if (this.state.renderResults.length > 0) {
      var results = this.state.renderResults;
      return <Day results={ results }></Day>
    } else {
      return null;
    }
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="main">
        <header className="header">
          <div><span className="title">YUMMY</span> The free meals recorder</div>
        </header>
        <div className="container">
          <div className="addMealContainer">
          <button className="addMealButton" onClick={ this.openModal.bind(this) }>
            <div className="addMealButtonIcon">+</div>
            <div className="addMealButtonLabel">Ajouter un repas</div>
          </button>
          </div>
          <div className="searchFormContainer">
            <div className="searchLabel">
              Chercher par invités, plat ou type
            </div>
            <div className="searchForm">
                <SearchInput searchBy={ this.searchBy.bind(this) }/>
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
              id="datePickerSearchMeal" // PropTypes.string.isRequired
              isOutsideRange={() => false}
              displayFormat="DD/MM/YYYY"
            />
          </div>
        </div>
        <div className="resultsContainer">
            { this.renderResults() }
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal.bind(this)}
          ariaHideApp={ false }
          style={ this.customStyles }
        >
        <AddMealModal/>
        </Modal>
      </div>
    );
  }
}

export default App;
