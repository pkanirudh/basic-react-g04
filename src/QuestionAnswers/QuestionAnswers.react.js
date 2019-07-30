import React from 'react';
import face from '../face.jpg'
import './QuestionAnswers.css';

class QuestionAnswers extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='questionanswers_wrapper'>
                <a href="/">BACK TO SEARCH</a>
                <h5>Question Title</h5>
                <div className="container">
                    <div className="card bg-light row">
                        <div className="card-body">
                            <span className="float-left">
                                Votes
                            </span>
                            <span className="float-left">
                                <img className="rounded" src = {face} alt="AuthorDP" width="100"/>
                                <p className="text-muted"><small>Author Name</small></p>
                            </span>
                            <p>Question Details...</p>
                        </div>
                    </div>
                </div>
                <h6>Answers</h6>
                <div className="container">
                    <div className="card bg-light row">
                        <div className="card-body">
                            <span className="float-left">
                                Votes
                            </span>
                            <span className="float-right">
                                <img className="rounded" src = {face} alt="AuthorDP" width="100"/>
                            </span>
                            <p className='font-weight-bold'>Answer Title goes here...</p>
                            <p className="text-muted">by Author Name</p>
                            
                            <p>Answer Text</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuestionAnswers;