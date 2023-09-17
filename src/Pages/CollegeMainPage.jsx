import * as React from "react"
import ContestListing from "../Components/AuthLanding/ContestListing"
import ProfileSection from "../Components/AuthLanding/ProfileSection"
import Footer from "../Components/Footer";
const CollegeMainPage = () => {
    const [client,setClient] = React.useState('desktop');
    React.useEffect(() => {
        if(typeof window!== 'undefined'){
            console.log("here");
            if(window.innerWidth < 768){
                setClient('mobile');
            }
        }
    },[]);
    return (
        <div>
            {client === 'mobile' ? <p>Access Denied! Open in Desktop</p> : <>
                    <div id="color-strip"></div>
                    <div className="college-page">
                        <span id="left-panel-college">
                            <ContestListing/>
                        </span>
                        <span id="right-panel-college">
                            <ProfileSection/>
                        </span>
                    </div>
                    <div className="margin-top-2rem">
                        <Footer/>
                    </div>
                </>
            }
        </div>
    )
}

export default CollegeMainPage