import React from "react";
import banner from "./Assets/banner.jpg"
import camera from "./Assets/camera.png"
import './Home.css'
import Card from "./Card";

const Home = () => {
    //sitebanner should be its own component
    return (
        <>
            <h1 className="welcomemessage"> This site is currently under construction. </h1>
            <div className="sitebanner">
                <img src={banner} alt="react logo" />
            </div>

            <div className="card_wrapper">
                <Card image={camera} title="card1" description="this is the placeholder text for the card body just to make sure everything works. this is temporary and will be replaced soon." link="card url 1" />
                <Card image={camera} title="card2" description="this is the placeholder text for the card body just to make sure everything works. this is temporary and will be replaced soon." link="card url 2" /> 
                <Card image={camera} title="card3" description="this is the placeholder text for the card body just to make sure everything works. this is temporary and will be replaced soon." link="card url 3" />
            </div>
        </>

    );
}

export default Home; 