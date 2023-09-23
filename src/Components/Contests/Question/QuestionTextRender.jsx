import * as React from "react";

const QuestionTextRender = () => {
    const exampes = [
        {
            "input":"harshprajapati",
            "output":"harshprajapati"
        },
        {
            "input":"harshprajapati",
            "output":"harshprajapati"
        }
    ]
  return (
    <div className="question-text">
      <div className="question-header">
        <h1 className="question-name-header">Question-1</h1>
        {/* Question submission description */}
        <div className="flex-center-center">
          <span>time limit per test1 second</span>
          <span>memory limit per test 256 megabytes</span>
          <span>input: standard input</span>
          <span>output: standard output</span>
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
        <ul>
          <li>
            <p className="questionptag">The string length should be in the range of 1 to 100.</p>
          </li>
          <li>
            <p className="questionptag">The string should consist of lowercase characters.</p>
          </li>
        </ul>
      </div>
      {/* examples testcases */}
      <div>
        <h3 className="font-bold">Examples : </h3>
        {exampes.map((exp) => {
            return (
              <div key={exp.input + exp.output} className="mergintop">
                <p className="questionptag">Input: <br/>{exp.input}</p>
                <p className="questionptag">Output: <br/>{exp.output}</p>
              </div>
            );
  
        })}
        
      </div>
    </div>
  );
};

export default QuestionTextRender;
