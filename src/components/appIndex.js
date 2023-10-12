import React, {useRef, useState, useEffect} from "react";
import Banner from "./banner";
import AppHeader from "./header"
import About from "./about";
import Project from "./projects";
import Reviews from "./reviews";
import Footer from "./footer";
// import Contact from "./contact";
import Lottie from 'react-lottie';
import animationData from './../developer3.json';

const AppIndex = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };

    return(
        <React.Fragment>

                {loading ? (
                        <div className="animation_widget Lottie_display">
                            <Lottie 
                                options={defaultOptions}
                                height={450}
                                width={450}
                            />
                        </div> )
                        
                        :

                        <React.Fragment>
                            <AppHeader />
                            <div className="breadcrumb-area">
                                <Banner />
                                {/* <Contact /> */}
                                <About />
                            </div>
                                <Project />
                            <div className="breadcrumb-area">
                                <Reviews />
                            </div>
                            
                            <Footer />
                        </React.Fragment>
            }
        </React.Fragment>
    )
} 

export default AppIndex;