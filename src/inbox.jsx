import styles from "./inbox.module.css";
import { RiSidebarUnfoldFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Inbox = ({ 
  inboxData, 
  setActiveUser, 
  isShifted, 
  isSidebarVisible, 
  setIsSidebarVisible 
}) => {
  
  const handleUserClick = (user) => {  
    setActiveUser(user);
    setIsSidebarVisible(false);
  };

  return (
    <div
      className={`${styles["inbox-container"]} ${isShifted ? styles["shifted"] : ""} ${isSidebarVisible ? styles["visible"] : ""}`}
    >
      <div className={styles["inbox-title-row"]}>
        <div className={styles["inbox-title"]}>Your inbox</div>
        <div 
          className={styles["close-icon"]}
          onClick={() => setIsSidebarVisible(false)}
          role="button"
          tabIndex={0}
          aria-label="Close Inbox"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') setIsSidebarVisible(false);
          }}
        >
          <RxCross2 size={20} />
        </div>
      </div>

      <div className={styles["inbox-filters"]}>
        <span>
          {inboxData.length} Open <IoIosArrowDown />
        </span>
        <span className={styles["filter-dropdown"]}>
          Waiting longest <IoIosArrowDown />
        </span>
      </div>

      <div className={styles["inbox-list"]}>
        {inboxData.map((user) => (
          <div
            key={user.id}
            className={`${styles["inbox-user"]} ${user.active ? styles["active"] : ""} ${user.dim ? styles["dim"] : ""}`}
            onClick={() => handleUserClick(user)}
          >
            <div
              className={styles["avatar"]}
              style={{ backgroundColor: user.avatarColor }}
            >
              {user.name.charAt(0).toUpperCase()}
            </div>

            <div className={styles["chat-details"]}>
              <div className={styles["user-header"]}>
                <span className={styles["name"]}>{user.name}</span>
                {user.company && (
                  <span className={styles["company"]}> · {user.company}</span>
                )}
              </div>

              <div className={styles["message-preview"]}>{user.message}</div>
            </div>

            <div className={styles["time"]}>
              {user.tag ? (
                <span className={`${styles["tag"]} ${styles[user.tagColor]}`}>
                  {user.tag}
                </span>
              ) : (
                <span className={styles["time-position"]}>{user.time}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={styles["sidebar-collapse"]}>
        <RiSidebarUnfoldFill />
      </div>
    </div>
  );
};

export default Inbox;
