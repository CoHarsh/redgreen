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
        <h1 className="question-name-header font-family-apply">{props.questionname}</h1>
        {/* Question submission description */}
        
        <div className="timepanel-question">
          <ContestTimePanel />
        </div>
      </div>
      {/* Question explaination */}
      <div className="question-body">
        <p className="questionptag" style={{ whiteSpace: "pre-line" }}>
          {props.questiontext}
        </p>
      </div>
      {/* Input */}
      <div>
        <h3>Input</h3>
        <div className="">
        <p className="questionptag blue-shad" style={{ whiteSpace: "pre-line" }}>{props.questioninputdetails}</p>
        </div>
      </div>
      {/* output */}
      <div>
        <h3 className="font-bold">Output</h3>
        <p className="questionptag blue-shad" style={{ whiteSpace: "pre-line" }}>{props.questionoutputdetails}</p>
      </div>
      {/* constrains */}
      <div>
        <h3 className="font-bold" >Constrains</h3>
        <p className="constrains-class blue-shad" style={{ whiteSpace: "pre-line" }}>
          {
            
          <Latex displayMode={true}>What is $(3\times 4) \div (5-3)$</Latex>  
          } 
        </p>  
        </div>
      {/* examples testcases */}
      <div>
        <h3 className="font-bold">Examples : </h3>
        {props.examples ? 
        <Examples examples={props.examples}/> : <></>}
      </div>
    </div>
  );
};

export default QuestionTextRender;
