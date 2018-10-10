import React from 'react';
import { Errors, Control, Form } from 'react-redux-form';
import * as validators from '../../helpers/form-validators';
import { SingleDatePicker } from 'react-dates';

class AddMealModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: null,
            focused: null
          };
    }

    onSubmitSearch(e) {
        e.preventDefault();
        this.props.searchBy(this.search.value);
    }

    onDateChange(date) {
        this.setState({ date, renderResults: false });
    }

    render(){
        console.log(this.props.registeredGuests)
        return (
            <Form
                className='meal-form'
                model='meal'
                validators={{ title: { required: validators.required, maxLength: validators.maxLength(80) } }}
                onSubmit={values => this.handleSubmit(values)}
            >
                <h3>Ajouter un repas</h3>
                <h4 className='form-title left'>Sélectionner une date</h4>
                <Control.custom 
                    model='.date'
                    component={ SingleDatePicker }
                    showClearDate={true}
                    focused={this.state.focused} // PropTypes.bool
                    onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                    id="datePickerAddMeal"
                    isOutsideRange={() => false}
                    displayFormat="DD/MM/YYYY"
                    mapProps={{
                        date: (props) => props.modelValue,
                        onDateChange: (props) => props.onChange,
                      }}
                />
               
                <h4 className='form-title left'>Sélectionner un repas</h4>
                <div className='fieldset no-margin-top small-margin-bottom'>
                    <Control.radio 
                        model='.daytime'
                        value='Petit déjeuner'
                    />
                    <label className='mealTypeRadio'>Petit déjeuner</label>
                    <Control.radio 
                        model='.daytime'
                        value='Brunch'
                    /> 
                    <label className='mealTypeRadio'>Brunch</label>
                    <Control.radio 
                        model='.daytime'
                        value='Midi'
                    />
                    <label className='mealTypeRadio'>Midi</label>
                    <Control.radio 
                        model='.daytime'
                        value='Goûter'
                    />
                    <label className='mealTypeRadio'>Goûter</label>
                    <Control.radio 
                        model='.daytime'
                        value='Soir'
                    />
                    <label className='mealTypeRadio'>Soir</label>
                </div>

                <h4 className='form-title left'>Invités</h4>
                <div className='fieldset no-margin-top small-margin-bottom'>
                    <Control.textarea mapProps={{ className: validators.getValidityClass }}
                        type='text' model='.description' placeholder='' validateOn='blur' rows='10' />
                </div>

                <h4 className='form-title left'>Program Title</h4>
                <div className='fieldset no-margin-top small-margin-bottom'>
                    <Control.text mapProps={{ className: validators.getValidityClass }}
                        type='text' model='.custom.programTitle' component={ this.validatableInput } placeholder=''
                        validators={{ maxLength: validators.maxLength(80) }}
                        validateOn='blur' />
                    <Errors model='.custom.programTitle' wrapper={ this.errorWrapper } show={{ touched: true, focus: false }}
                        messages={{ maxLength: 'Should not be more than 80 characters!' }} />
                </div>

                <div className='fieldset row'>
                    <button type='submit' className='button--submit primary bold'>Create</button>
                    <button type='submit' className='button--submit secondary' onClick={() => this.props.resetCloseAddRoomForm()}>Cancel</button>
                </div>
            </Form>
        );
    };
}

export default AddMealModal;