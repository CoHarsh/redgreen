import * as react from "react";
import TeamIntroCard from "./TeamIntroCard";

const TeamIntro = () => {
  return (
    <div id="team-section">
        <div className="title-font" style={{marginBottom:"3rem"}}>Meet our team</div>
      <TeamIntroCard
        name="Harsh Prajapati"
        subheading="Get set do it!"
        responsibilty="Software Developer | Product | Problem Solver | Engineering"
      />
    </div>
  );
};

export default TeamIntro;
