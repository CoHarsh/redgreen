import * as React from "react";
import {
    useParams
} from 'react-router-dom';
import CodeEditor from "../Components/Contests/Question/CodeEditor";
import Footer from "../Components/Footer"

const QuestionPage = () => {
    const { questionId } = useParams();
    if(questionId === undefined || questionId >= 4) {
        return(
            <div>
                <h1>404</h1>
            </div>
        );
    }

    return (
        <div>
            <div className="color-strip"></div>
            <div className="strip-color-up">
                <span>
                    <CodeEditor/>
                </span>
            </div>
            <Footer/>
        </div>
    );
};

export default QuestionPage;