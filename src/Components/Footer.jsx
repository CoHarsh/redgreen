import * as React from "react";
import MailIcon from "@mui/icons-material/Mail";
const Footer = () => {
  return (
    <footer className="card-shadow ">
      <div className="flex-center-center-row footer" style={{justifyContent:"space-evenly"}}>
        <span className=" text-white-bold flex-center-center-row ">
          <p className=" text-white-bold card-font-subtitle" id="yooo">RedGreen</p>
          <span style={{ width: "20px" }}></span>
          <p className="text-white-bold card-font-subtitle">
            © 2023 HARSH DEVS. All rights reserved. Built in India
          </p>
        </span>
        <p className=" text-white-bold flex-center-center-row  keeping-it-center-normal card-font-subtitle">
          <MailIcon />
          <span style={{ width: "10px" }} ></span>
          harshmp492@gmail.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
