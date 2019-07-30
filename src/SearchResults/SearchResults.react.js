import React from 'react';
import face from '../face.jpg';
import './SearchResults.css';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='searchresults_wrapper'>
                <div className="container">
                    <div className="card bg-light row">
                        <div className="card-body">
                            <span className="float-left">
                                Votes
                            </span>
                            <span className="float-right">
                                <img className="rounded" src = {face} alt="AuthorDP" width="100"/>
                            </span>
                            <p className='font-weight-bold'>Question goes here...</p>
                            <p className="text-muted">by Author Name</p>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default SearchResults;