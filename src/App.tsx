import { useState, useEffect } from "react";
import "./App.css";
import MacWindow from "./components/MacWindow";
import BackgroundAnimation from "./components/BackgroundAnimation";
import Bio from "./components/Bio";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <BackgroundAnimation />

      {isLoading ? (
        <div className="loading-screen">
          <MacWindow />
        </div>
      ) : (
        <Bio />
      )}
    </div>
  );
}

export default App;
