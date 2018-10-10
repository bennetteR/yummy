import React from 'react';

class SearchInput extends React.Component {

    onSubmitSearch(e) {
        e.preventDefault();
        this.props.searchBy(this.search.value);
    }

    render(){
        return (
            <form  onSubmit={ this.onSubmitSearch.bind(this) }>
                <input 
                type="text" 
                placeholder="Essayer « Elise » ou « gratin »"
                ref={input => this.search = input}
                />    
            </form>
        );
    };
}

export default SearchInput;