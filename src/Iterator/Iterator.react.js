import React from 'react';

import './Iterator.css';

const Iterator = (props) => {

    return (
        
        
            props.list.map((eachQuestion) => {
            return (
                <div className='searchresults_wrapper'>
                    <div className="container">
                        <div className="card bg-light row">
                            <div className="card-body">
                                <span className="float-left">
                                    {eachQuestion.score} {eachQuestion.tags}
                                </span>
                                <span className="float-right">
                                    <img className="rounded" src = {eachQuestion.owner.profile_image} alt="AuthorDP" width="100"/>
                                </span>
                                <p className='font-weight-bold'>{eachQuestion.title}</p>
                                <p className="text-muted">by {eachQuestion.owner.display_name}</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
    );

}

export default Iterator;