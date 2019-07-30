import React from 'react';

import './QuestionPage.css';
import QuestionAnswers from '../QuestionAnswers/QuestionAnswers.react';

const QuestionPage = () => {

    return (
        <div className='questionpage_wrapper'>
            <QuestionAnswers></QuestionAnswers>
        </div>
    );

}

export default QuestionPage;