import "./chatPage.css"
import NewPrompt from "../../components/newPrompt/NewPrompt";

const ChatPage = () => {

  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">Text message from Patrick</div>
          <div className="message user">The iMac used as a display must have macOS High Sierra or earlier installed. The other Mac that you are connecting it to must have been introduced in 2019 or earlier and have macOS Catalina or earlier installed. </div>
          <div className="message">The University of Waterloo (UWaterloo, UW, or Waterloo) is a public research university with a main campus in Waterloo, Ontario, Canada. The main campus is on 404 hectares (998 acres) of land adjacent to uptown Waterloo and Waterloo Park. The university also operates three satellite campuses and four affiliated university colleges.[10][11] The university offers academic programs administered by six faculties and thirteen faculty-based schools. Waterloo operates the largest post-secondary co-operative education program in the world, with over 20,000 undergraduate students enrolled in the universitys co-op program.[12] Waterloo is a member of the U15, a group of research-intensive universities in Canada</div>
          <div className="message user">Text message from user</div>
          <div className="message">Text message from Patrick</div>
          <div className="message user">Text message from user</div>
          <div className="message">Text message from Patrick</div>
          <div className="message user">Text message from user</div>
          <div className="message">Text message from Patrick</div>
          <div className="message user">Text message from user</div>
          <div className="message">Text message from Patrick</div>
          <div className="message user">Text message from user</div>
          <div className="message">Text message from Patrick</div>
          <div className="message user">Text message from user</div>
          <div className="message">Text message from Patrick</div>
          <div className="message user">Text message from user</div>
          <div className="message">Text message from Patrick</div>
          <div className="message user">Text message from user</div>
          <NewPrompt />
        </div>
      </div>
    </div>
  )
}

export default ChatPage
