import * as React from "react";
import ContestTimePanel from "../ContestTimePanel"
import Examples from "./Examples";
import * as Latex from "react-latex"
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
const QuestionTextRender = (props) => {
  const navigate = useNavigate();
  const constrains = " n \<\= 10^{5}"
  const handleBackgoing = () => {
    navigate(-1)
  }
  return (
    <div className="question-text">
      <div className="question-header">
      <div className="flex-center-center">
        <Button className="backbtn" variant="contained"
              style={{
                maxWidth: "auto",
                maxHeight: "40px",
                minWidth: "30px",
                minHeight: "30px",
                textTransform: "none",
              }} onClick={handleBackgoing}>
                Back</Button>
        </div>
        <h1 className="question-name-header font-family-apply">Question-1</h1>
        {/* Question submission description */}
        
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
        <p className="constrains-class">
          <Latex displayMode={true} >$1 \leq n \leq 10^5$ $-10^9 \leq a_i \leq 10^9$ for all $1 \leq i \leq n$</Latex>   </p>  
        </div>
      {/* examples testcases */}
      <div>
        <h3 className="font-bold">Examples : </h3>
        <Examples examples={props.examples}/>
      </div>
    </div>
  );
};

export default QuestionTextRender;
