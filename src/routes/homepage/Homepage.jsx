import { Link } from "react-router-dom";
import "./homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <img src="./orbital.png" alt="" className="orbital"/>
      <div className="left">
        <h1>MYGPT</h1>
        <h2>Supercharge Your Creativity and Productivity</h2>
        <h3>It usually begins with: “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.” </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="./bot.png" alt="" className="bot"/>
        </div>
      </div>
    </div>
  )
}

export default Homepage
