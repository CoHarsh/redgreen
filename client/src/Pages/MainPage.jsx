import React from "react";

//import components
import Navbar from "../Components/NonAuthLanding/Navbar";
import MainContent from "../Components/NonAuthLanding/MainContent";
import ProductDetails from "../Components/NonAuthLanding/ProductDetails";
import TeamIntro from "../Components/NonAuthLanding/TeamIntro";
import Footer from "../Components/Footer";

const MainPage = () => {
    return (
        <div className="full-height-width bg-radial-inblue ">
            <Navbar />
            <MainContent/>
            <ProductDetails/>
            <TeamIntro/>
            <Footer/>
        </div>
    );
}

export default MainPage;