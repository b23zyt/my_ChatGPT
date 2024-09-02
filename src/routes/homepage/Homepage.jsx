import { Link } from "react-router-dom";
import "./homepage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Homepage = () => {

  const [typingStatus, setTypingStatus] = useState("human1")

  return (
    <div className="homepage">
      <img src="./orbital.png" alt="background image" className="orbital"/>
      <div className="left">
        <h1>MYGPT</h1>
        <h2>Supercharge Your Creativity and Productivity</h2>
        <h3>Hi, My name is Patrick. I am super smart and able to answer all kinds of questinos. I can assist you with composing emails, codes, essays and much more. Feel free to ask me anything at any time! </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="./star.png" alt="" className="bot"/>
          <div className="chat">
            <img src={typingStatus === "human1" ? "/human1.jpeg" : typingStatus === "human2" ? "/human2.jpeg" : "/star.png"} alt="User and Bot Avatar"/>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Jack: What is today's menu?",
                3000, () => {
                  setTypingStatus("bot");
                },
                "Patrick: You can try the Warrior Burger and fountain drink in CMH!",
                3000, () => {
                  setTypingStatus("human2");
                },
                "Lisa: What is the best university in the World?",
                3000, () => {
                  setTypingStatus("bot");
                },
                "Patrick: No doubt, the answer is 'University of Waterloo'!",
                3000, () => {
                  setTypingStatus("human1");
                }
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/avatar.png" alt="our logo" />
        <div className="links">
          <Link to="./terms">Terms and Service</Link>
          <span>|</span>
          <Link to="/policy">Privity Policy</Link>
        </div>
      </div>
    </div>
  )
}

export default Homepage
