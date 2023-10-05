import * as React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const MainContent = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div id="title-text">
        <p
          className="tracking-tight font-bold flex-center-center keep-it-center"
          style={{ paddingTop: "5rem" }}
        >
          <span>
            <span className="font-primary">College </span>{" "}
            <span className="text-blue-600">Contests</span>
          </span>
          <span>
            <span className="font-primary">for College</span>{" "}
            <span className="text-blue-600">Geek</span>
          </span>
        </p>
        <p
          className="flex-center-center font-secondary text-center-align marginleftright"
          style={{ paddingTop: "1.2rem" }}
        >
          <span className="keeping-it-center-normal">
            One portal for all your college's contests and coding questions with
            total control over the portal.
          </span>
        </p>
        <p style={{ paddingTop: "3rem" }} className="flex-center-center">
          <Button
            variant="contained"
            style={{ textTransform: "none", padding: "0.8rem 2rem" }}
            className="button-font"
            onClick={(e)=>navigate('/register')}
          >
            Start your jounrey
          </Button>
        </p>
      </div>
    </div>
  );
};

export default MainContent;
