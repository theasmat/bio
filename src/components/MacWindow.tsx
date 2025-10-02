import { useEffect, useState } from "react";

const MacWindow = () => {
  const [typingText, setTypingText] = useState("");
  const fullText = "function openProfile(Asmat)";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypingText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mac-window">
      <div className="header">
        <div className="buttons">
          <div className="close"></div>
          <div className="minimize"></div>
          <div className="zoom"></div>
        </div>
        <div className="title">Bio</div>
        <div className="additional"></div>
      </div>

      <div className="content">
        <div className="left">
          <div className="top">
            <i className="bi bi-files"></i>
            <i className="bi bi-search"></i>
            <i className="bi bi-git"></i>
            <i id="debug" className="customi debug-icon"></i>
            <i className="customi widget-icon"></i>
            <i className="bi bi-filetype-json"></i>
          </div>
          <div className="bottom">
            <i className="bi bi-person-circle"></i>
            <i className="bi bi-gear"></i>
          </div>
        </div>

        <div className="right">
          <div className="top">
            <div className="files active">
              <i className="bi bi-filetype-sh"></i>Bio.sh{" "}
              <i className="bi bi-x-lg"></i>
            </div>
            <div className="files"></div>
          </div>
          <div className="bottom">
            <div className="line-no-div">1</div>
            <div className="main-content">
              <div className="code-typing">
                {typingText}
                <span className="cursor">|</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="left">
          <i className="git-branch-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M7 8l0 8" />
              <path d="M9 18h6a2 2 0 0 0 2 -2v-5" />
              <path d="M14 14l3 -3l3 3" />
            </svg>
            Master
          </i>
          <i className="bi bi-arrow-repeat"></i>
          <i className="bi bi-rocket-takeoff"></i>
          <i className="bi bi-bootstrap-fill"></i>
          <div className="error-stat-icons">
            <i className="bi bi-x-circle"></i> 0
            <i className="bi bi-exclamation-triangle"></i> 0
            <i className="bi bi-info-circle"></i> 1
          </div>
        </div>
        <div className="middle">
          <i className="bi bi-clock-history"></i> 13hrs 22mins
        </div>
        <div className="right">5.3.2</div>
      </div>
    </div>
  );
};

export default MacWindow;
