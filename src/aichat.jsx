import { useEffect, useState } from "react";
import styles from "./aichat.module.css";
import { PiRobotFill } from "react-icons/pi";
import { RiSidebarUnfoldFill } from "react-icons/ri";
import { FaArrowUp, FaMoneyBill, FaBars } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Aichat = ({ onAddToComposer, isShifted,isSidebar2Visible,setIsSidebar2Visible,setIsSidebarVisible }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [showPopupOne, setShowPopupOne] = useState(false);
  const [showPopupTwo, setShowPopupTwo] = useState(false);
  const [showSuggested, setShowSuggested] = useState(true);
  const [showLines, setShowLines] = useState([false, false, false, false]);
 
  const para =
    "We understand that sometimes a purchase may not meet your expectations, and you may need to request a refund.  To assist you with your refund request, could you please provide your order ID and proof of purchase.  Please note:  We can only refund orders placed within the last 60 days, and your item must meet our requirements for condition to be returned.Once I’ve checked these details, I’ll send a returns QR code to post the item back to us.";

  const handleSuggestedClick = () => {
    setIsStarted(true);
    setShowSuggested(false);
  };

  useEffect(() => {
    if (isStarted) {
      const delays = [400, 1000, 1600, 2200];
      delays.forEach((delay, index) => {
        setTimeout(() => {
          setShowLines((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        }, delay);
      });
    } else {
      setShowLines([false, false, false, false]);
    }
  }, [isStarted]);

  const handleAdd = (text) => {
    if (onAddToComposer) {
      onAddToComposer(text);
    }
  };

  return (
    <div
      className={`${styles["ai-container"]} ${ isShifted ? styles["shifted"] : ""}  ${ isSidebar2Visible ? styles["visible"] : ""}`}
    >
      {/* Tabs */}
      <div className={styles["ai-tabs"]}>
        <div className={styles["tab-group"]}>
          <div className={`${styles["tab"]} ${styles["active-tab"]}`}>
            <PiRobotFill className={styles["tab-robot-icon"]} /> AI Copilot
          </div>
          <div className={styles["tab-highlight"]}></div>
        </div>
        <div className={styles["tab"]}>Details</div>
        <div className={styles["details-icon"]}>
          <RiSidebarUnfoldFill />
        </div>
        <div 
                  className={styles["close-icon"]} 
                  onClick={() => setIsSidebar2Visible(false)} 
                  role="button" 
                  tabIndex={0} 
                  aria-label="Close Inbox"
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsSidebarVisible(false) }}
                >
                  <RxCross2 size={20} />
                </div>
      </div>

      {/* Main Content */}
      <div className={styles["ai-center"]}>
        {isStarted ? (
          <div className={styles["response-block"]}>
            <div className={styles["user-msgcover"]}>
              <div className={styles["user-msg"]}>A</div>
              <div className={styles["you"]}>
                You
                <br />
                <div className={styles["message-text"]}>
                  How do I get a refund?
                </div>
              </div>
            </div>

            <div className={styles["ai-msg"]}>
              <div className={styles["fin-cover"]}>
                <div className={styles["fin-icon"]}>
                  <FaBars className={styles["real-icon"]} />
                </div>
                <div className={styles["fin"]}>Fin</div>
              </div>

              {/* Popup 2 */}
              {showPopupTwo && (
                <div className={styles.popupBox}>
                  <h3 className={styles.title}>Refund for an unwanted gift</h3>
                  <div className={styles.meta}>
                    <span className={styles.icon} />
                    <span className={styles.metaText}>
                      <MdMessage className={styles["mess-icon"]} /> Conversation
                      · Theresa Eds · 3d ago
                    </span>
                  </div>
                  <div className={styles.summary}>
                    <span className={styles.aiLabel}>AI Summary</span>
                    <p className={styles.message}>
                      Unfortunately, we're only able to process refunds for
                      orders that were placed within the last 60 days. Your
                      order was placed well past the cut off date.
                    </p>
                    <div className={styles["composer-cover"]}>
                      <div className={styles["composer-iconcover"]}>
                        <BsPencilSquare className={styles["composer-icon"]} />
                      </div>
                      <div className={styles["composer-text"]}>
                        Add to composer
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className={styles["ai-box"]}>
                {showLines[0] && (
                  <p>
                    We understand that sometimes a purchase may not meet your
                    expectations, and you may need to request a refund.
                    <span
                      onMouseOver={() => setShowPopupOne(true)}
                      onMouseOut={() => setShowPopupOne(false)}
                      className={styles.circleNumber}
                    >
                      1
                    </span>
                  </p>
                )}

                {showPopupOne && (
                  <div className={styles.popupBox}>
                    <h3 className={styles.title}>Getting a refund</h3>
                    <div className={styles.meta}>
                      <span className={styles.articleType}>Public article</span>
                      <span className={styles.dot}>•</span>
                      <span className={styles.author}>Amy Adams</span>
                      <span className={styles.dot}>•</span>
                      <span className={styles.time}>1d ago</span>
                    </div>
                    <p className={styles.description}>
                     We understand that sometimes a purchase may not meet your expectations, and you may need to request a refund. This guide outlines the simple steps to help you navigate the refund process and ensure a smooth resolution to your concern.
                    </p>
                    <div className={styles["composer-cover"]}>
                      <div className={styles["composer-iconcover"]}>
                        <BsPencilSquare className={styles["composer-icon"]} />
                      </div>
                      <div className={styles["composer-text"]}>
                        Add to composer
                      </div>
                    </div>
                  </div>
                )}

                {showLines[1] && (
                  <p>
                    To assist you with your refund request, could you please
                    provide your order ID and proof of purchase.
                  </p>
                )}
                {showLines[2] && (
                  <p>
                    Please note:
                    <br />
                    We can only refund orders placed within the last 60 days,
                    and your item must meet our requirements for condition to be
                    returned.
                  </p>
                )}
                {showLines[3] && (
                  <p>
                    Once I’ve checked these details, I’ll send a returns QR code
                    to post the item back to us.
                    <span
                      onMouseOver={() => setShowPopupTwo(true)}
                      onMouseOut={() => setShowPopupTwo(false)}
                      className={styles.circleNumber}
                    >
                      2
                    </span>
                  </p>
                )}

                <div
                  className={styles["composer-cover"]}
                  onClick={() => handleAdd(para)}
                >
                  <div className={styles["composer-iconcover"]}>
                    <BsPencilSquare className={styles["composer-icon"]} />
                  </div>
                  <div className={styles["composer-text"]}>Add to composer</div>
                  <div className={styles["composer-arrow"]}>
                    <IoIosArrowDown
                      className={styles["composer-arrowicon"]}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles["sources-text"]}>
              15 relevant sources found
            </div>
            <ul className={styles["sources-list"]}>
              <li>
                <span className={styles["source-icon"]}>◼</span> Getting a refund
              </li>
              <li>
                <span className={styles["source-icon"]}>
                  <MdMessage className={styles["mess-icon"]} />
                </span>{" "}
                Refund for an order placed by mistake
              </li>
              <li>
                <span className={styles["source-icon"]}>
                  <MdMessage className={styles["mess-icon"]} />
                </span>
                Refund for an unwanted gift
              </li>
            </ul>
            <div className={styles["see-all"]}>See all →</div>
          </div>
        ) : (
          <>
            <div className={styles["robot"]}>
              <PiRobotFill className={styles["ai-icon"]} />
            </div>
            <h3>Hi, I’m Fin AI Copilot</h3>
            <p className={styles["para"]}>
              Ask me anything about this conversation.
            </p>
          </>
        )}
      </div>

      {/* Footer */}
      <div className={styles["ai-footer"]}>
        {showSuggested && (
          <div className={styles["suggested"]} onClick={handleSuggestedClick}>
            <span>
              <b>Suggested</b>{" "}
              <FaMoneyBill className={styles["money-icon"]} /> How do I get a
              refund?
            </span>
          </div>
        )}
        <div className={styles["input-row"]}>
          <input
            className={styles["input"]}
            type="text"
            placeholder="Ask a question..."
          />
          <FaArrowUp className={styles["send-icon"]} />
        </div>
      </div>
    </div>
  );
};

export default Aichat;
