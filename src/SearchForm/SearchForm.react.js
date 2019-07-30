import React from 'react';

import './SearchForm.css';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='searchform_wrapper'>
                <form>
                    <input type="text" placeholder="Search Terms" name='searchTerms'/>
                    <input type="submit" value="Search"/>
                </form>
            </div>
        );
    }
}

export default SearchForm;