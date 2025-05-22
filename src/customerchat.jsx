import React, { useRef, useState } from "react";
import styles from "./customerchat.module.css";
import { BsThreeDots, BsLightningChargeFill, BsEmojiLaughingFill } from "react-icons/bs";
import { FaRegMoon, FaBars } from "react-icons/fa";
import { MdMessage, MdBookmarks } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const Customerchat = ({
  activeUser,
  composerText,
  setComposerText,
  isShifted,
  setIsShifted,
  setIsSidebarVisible,
  setIsSidebar2Visible,
}) => {
  const textareaRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      type: "customer",
      text:
        "I bought a product from your store in November as a Christmas gift for a member of my family. However, it turns out they have something very similar already. I was hoping you’d be able to refund me, as it is un-opened.",
      time: "1min",
    },
    {
      type: "agent",
      text: `Let me just look into this for you, ${activeUser.name}.`,
      time: "1min",
    },
  ]);

  const handleSend = () => {
    if (!composerText.trim()) return;
    setMessages((prev) => [
      ...prev,
      {
        type: "agent",
        text: composerText.trim(),
        time: "Now",
      },
    ]);
    setComposerText("");
  };

  const handleSidebarToggle = () => {
    if (window.innerWidth <= 1000) {
      setIsSidebarVisible(true);
    }
  };

  const handleSidebar2Toggle = () => {
    if (window.innerWidth <= 735) {
      setIsSidebar2Visible(true);
    }
  };

  return (
    <div className={styles["customer-container"]}>
      {/* Header */}
      <div className={styles["chat-header"]}>
        <button className={styles["icon-btn"]} onClick={handleSidebarToggle}>
          <FaBars />
        </button>

        <div className={styles["chat-user-name"]}>
          {activeUser.name}
          {activeUser.company && (
            <span className={styles["company"]}> · {activeUser.company}</span>
          )}
        </div>

        <div className={styles["chat-header-actions"]}>
          <button className={styles["icon-btn"]}>
            <BsThreeDots />
          </button>
          <button className={styles["icon-btn"]}>
            <FaRegMoon />
          </button>

          {/* Desktop Close Button */}
          <button
            className={styles["close-btn"]}
            onClick={() => setIsShifted((prev) => !prev)}
          >
            {isShifted ? "Open" : "Close"}
          </button>

          {/* Mobile Sidebar2 Toggle */}
          <button className={styles["sidebar2-btn"]} onClick={handleSidebar2Toggle}>
            <FaBars />
          </button>
        </div>
      </div>

      {/* Chat Body */}
      <div className={styles["chat-body"]}>
        {messages.map((msg, idx) =>
          msg.type === "customer" ? (
            <div className={styles["customer-msg"]} key={idx}>
              <div
                className={styles["client-avatar"]}
                style={{ backgroundColor: activeUser.avatarColor }}
              >
                {activeUser.name.charAt(0).toUpperCase()}
              </div>
              <div className={styles["customer-message"]}>
                {msg.text}
                <div className={styles["msg-time"]}>
                  <MdMessage style={{ marginRight: "6px", verticalAlign: "middle" }} />
                  {msg.time}
                </div>
              </div>
            </div>
          ) : (
            <div className={styles["agent-msg"]} key={idx}>
              <div className={styles["agent-reply"]}>
                {msg.text}
                <div className={styles["seen"]}>Seen · {msg.time}</div>
              </div>
              <div className={styles["agent-avatar"]}>A</div>
            </div>
          )
        )}
      </div>

      {/* Footer */}
      <div className={styles["chat-footer"]}>
        <div className={styles["chat-controls-top"]}>
          <div className={styles["chat-label"]}>
            <MdMessage style={{ marginRight: "6px", verticalAlign: "middle" }} />
            Chat <IoIosArrowDown className={styles["send-caret"]} />
          </div>
        </div>

        <textarea
          ref={textareaRef}
          className={styles["chat-textarea"]}
          placeholder="Use ⌘K for shortcuts"
          value={composerText}
          onChange={(e) => setComposerText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
        />

        <div className={styles["chat-input-row"]}>
          <div className={styles["chat-icons"]}>
            <span className={styles["chat-icon"]}>
              <BsLightningChargeFill />
            </span>
            <span className={styles["chat-icon-btn"]}>
              <MdBookmarks />
            </span>
            <span className={styles["chat-icon-btn"]}>
              <BsEmojiLaughingFill />
            </span>
          </div>

          <button
            className={`${styles["send-btn"]} ${composerText.trim() ? styles["send-btn-active"] : ""}`}
            onClick={handleSend}
          >
            <span>Send</span>
            <IoIosArrowDown className={styles["send-caret"]} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customerchat;
