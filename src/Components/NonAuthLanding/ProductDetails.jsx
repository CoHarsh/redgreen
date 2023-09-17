import * as react from "react";
import ProductCards from "./ProductCards";
import { render } from "react-dom";

const ProductDetails = () => {
  const productDetails = [
    {
      detail: "Customized College Challenges",
      description:
        "Tailor coding contests to your college's unique needs. Create, manage, and host coding competitions exclusively for your institution. From problem sets to scoring systems, it's your platform, your rules!",
    },
    {
      detail: "Seamless Registration & Participation",
      description:
        "Simplify the process for students to join the coding contests. Our intuitive registration system makes it effortless for participants to sign up, ensuring maximum engagement. No coding hurdles before the coding challenges!",
    },
    {
      detail: "Real-time Leaderboards & Analytics",
      description:
        "Keep the excitement alive with live leaderboards that display real-time progress. Dive into detailed analytics to track individual and team performance. Encourage healthy competition and foster a thriving coding community.",
    },
  ];

  return (
    <div className="">
      <div className="text-center-align title-font">Most Popular Feature</div>
      <p className="font-secondary flex-center-center ">
        <p
          className="text-center-align subtitle-font tracking-tight keeping-it-center-normal paddingleftright"
          style={{ width: "65%", paddingTop: "2rem" }}
        >
          Empower Your College with Cutting-Edge{" "}
          <span className="text-blue-600 font-bold">Coding Contests!</span> Your
          Ultimate Hub for Tailored Challenges, Streamlined Registration, and
          Real-time Analytics -{" "}
          <span className="text-blue-600 font-bold">
            Elevate Your Coding Community Today!
          </span>
        </p>
      </p>
      <div className="flex-center-center-row" style={{marginTop:"5rem"}}>
        {productDetails.map( item => {
            return(
            <ProductCards title={item.detail} description={item.description}/>
            )
        })}
      </div>
    </div>
  );
};

export default ProductDetails;
