import React from 'react';

import './SearchForm.css';
import SearchResultsCopy from '../SearchResultsCopy/SearchResultsCopy.react';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            tag: false
        }
        this.tagInput = React.createRef();
    }

    handleSubmit = event => {
        event.preventDefault();
        let newTag = this.tagInput.current.value;
        this.setState(prevState => ({tag: newTag}));
    }

    render() {
        return (
            <div className='searchform_wrapper'>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"  placeholder="Search Terms" ref={this.tagInput} />
                    <input type="submit"/>
                </form>
                <SearchResultsCopy tag={this.state.tag}/>
            </div>
        );
    }


}

export default SearchForm;