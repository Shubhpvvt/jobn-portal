import MessagesTopbar from "../components/messagestopbar";
import ChatSidebar from "../components/chatsidebar";
import ChatWindow from "../components/chatwindow";
import ChatInput from "../components/chatinput";
import Footer from "../components/footer";

const Messages = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-100">

    
      <MessagesTopbar />

      
      <div className="flex flex-1 overflow-hidden">

        
        <ChatSidebar />

      
        <div className="flex flex-col flex-1 bg-white">

     
          <div className="flex-1 overflow-y-auto">
            <ChatWindow />
          </div>

      
          <ChatInput />

          <Footer />

        </div>
      </div>
    </div>
  );
};

export default Messages;
