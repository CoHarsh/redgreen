import * as React from "react";
import ContestTimePanel from "../ContestTimePanel"
import Examples from "./Examples";
import * as Latex from "react-latex"
const QuestionTextRender = () => {
    const exampes = [
        {
            "input":"harshprajapati",
            "output":"harshprajapati"
        },
        {
            "input":"harshprajapati1",
            "output":"harshprajapati1"
        }
    ];
    const constrains = " n \<\= 10^{5}"
  return (
    <div className="question-text">
      <div className="question-header">
        <h1 className="question-name-header font-family-apply">Question-1</h1>
        {/* Question submission description */}
        <div className="flex-center-center">
        </div>
        <div className="timepanel-question">
          <ContestTimePanel />
        </div>
      </div>
      {/* Question explaination */}
      <div className="question-body">
        <p className="questionptag">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
          laudantium voluptatibus maiores sequi reprehenderit corrupti laborum
          at sint delectus dolores expedita recusandae minus praesentium
          exercitationem, iusto culpa, dolore voluptatem ipsum explicabo
          pariatur magni. Molestias blanditiis et laboriosam, eum eveniet cum!
        </p>
      </div>
      {/* Input */}
      <div>
        <h3>Input</h3>
        <p className="questionptag">A lowercase string of prescribed length in constrains.</p>
      </div>
      {/* output */}
      <div>
        <h3 className="font-bold">Output</h3>
        <p className="questionptag">Print the longest palindromic substring.</p>
      </div>
      {/* constrains */}
      <div>
        <h3 className="font-bold">Constrains</h3>
        {/* <ul>
          <li>
            <p className="questionptag">The string length should be in the range of 1 to 100.</p>
          </li>
          <li>
            <p className="questionptag">The string should consist of lowercase characters.</p>
          </li>
        </ul> */}
        <p className="constrains-class">
          <Latex displayMode={true} >$1 \leq n \leq 10^5$ $-10^9 \leq a_i \leq 10^9$ for all $1 \leq i \leq n$</Latex>   </p>  
        </div>
      {/* examples testcases */}
      <div>
        <h3 className="font-bold">Examples : </h3>
        <Examples examples={exampes}/>
      </div>
    </div>
  );
};

export default QuestionTextRender;
