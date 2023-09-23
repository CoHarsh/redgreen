import * as React from "react";
import ContestQuestions from "../Components/Contests/ContestQuestions";
import ContestTimePanel from "../Components/Contests/ContestTimePanel";
import Footer from "../Components/Footer";

const ContestPage = () => {
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
                    <div className="color-strip"></div>
                    <div className="college-page">
                        <span className="left-panel-college">
                            <ContestQuestions/>
                        </span>
                        <span className="right-panel-college">
                            <ContestTimePanel/>
                        </span>
                    </div>
                    <div className="margin-top-2rem">
                        <Footer/>
                    </div>
                </>
            }
        </div>
    );
};

export default ContestPage;
