import { Link } from "react-router-dom"
import "./chatList.css"

const ChatList = () => {
  return (
    <div className="chatList">
        <span className="title">DASHBOARD</span>
        <Link to="/dashboard">Create a new Chat</Link>
        <Link to="/">Explore Patrick Chat</Link>
        <Link to="/">Contact</Link>
        <hr />
        <span className="title">RECENT CHATS</span>
        <div className="list">
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
        </div>
        <hr />
        <div className="upgrade">
            <img src="/avatar.png" alt=""/>
            <div className="texts">
                <span>Update to Pratrick AI pro <br></br></span>
                <span>Get Unlimited Access to all Features</span>
            </div>
        </div>
        
    </div>
  )
}

export default ChatList
