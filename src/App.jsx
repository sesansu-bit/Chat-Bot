import "./App.css";
import Inbox from "./inbox.jsx";
import Aichat from "./aichat.jsx";
import Customerchat from "./customerchat.jsx";
import { useState } from "react";

function App() {
  const inboxData = [
    {
      id: 1,
      name: "Luis",
      company: "Github",
      message: "Hey! I have a question...",
      time: "45m",
      active: true,
      avatarColor: "#4CAF50",
    },
    {
      id: 2,
      name: "Ivan",
      company: "Nike",
      message: "Hi there, I have a question...",
      time: "30m",
      tag: "3min",
      tagColor: "yellow",
      avatarColor: "#E91E63",
    },
    {
      id: 3,
      name: "Lead from New York",
      company: "",
      message: "Good morning, let me...",
      time: "40m",
      avatarColor: "#2196F3",
    },
    {
      id: 4,
      name: "Booking API problems",
      company: "Luis - Small Crafts",
      message: "Bug report",
      time: "45m",
      avatarColor: "#9C27B0",
    },
    {
      id: 5,
      name: "Miracle - Exemplary Bank",
      message: "Hey there, I'm here to...",
      time: "45m",
      dim: true,
      avatarColor: "#FF9800",
    },
  ];

  const [activeUser, setActiveUser] = useState(inboxData[0]);
  const [composerText, setComposerText] = useState("");
  const [isShifted, setIsShifted] = useState(false);
  const [isSidebar2Visible, setIsSidebar2Visible] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleAddToComposer = (text) => {
    const cleaned = text.replace(/\s*\d+\s*$/, "");
    setComposerText(cleaned);
  };

  return (
    <div className="cover">
      <Inbox
        inboxData={inboxData}
        setActiveUser={setActiveUser}
        isShifted={isShifted}
        isSidebarVisible={isSidebarVisible}
        setIsSidebarVisible={setIsSidebarVisible}
      />

      {activeUser && (
        <Customerchat
          activeUser={activeUser}
          composerText={composerText}
          setComposerText={setComposerText}
          isShifted={isShifted}
          setIsShifted={setIsShifted}
          setIsSidebarVisible={setIsSidebarVisible}
          setIsSidebar2Visible={setIsSidebar2Visible}
        />
      )}

      <Aichat
        onAddToComposer={handleAddToComposer}
        isShifted={isShifted}
        setIsSidebarVisible={setIsSidebarVisible}
        isSidebar2Visible={isSidebar2Visible}
        setIsSidebar2Visible={setIsSidebar2Visible}
      />
    </div>
  );
}

export default App;