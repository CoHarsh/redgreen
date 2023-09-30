import * as React from "react";
import PresentContests from "./PresentContests";
import PastContests from "./PastContests";

const ContestListing = () => {
  return (
    <div>
      <div className="listing-container card-shadow">
       {/* present contest */}
       <PresentContests/>
       {/* past contest */}
       <PastContests/>
      </div>
    </div>
  );
};

export default ContestListing;
