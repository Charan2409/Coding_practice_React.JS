import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      {isVisible ? (
        <button
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          FcCollapse
        </button>
      ) : (
        <button
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      )}

      {isVisible && <p>Start editing to see some magic happen :)</p>}
      {isVisible && <p>Start editing to see no magic :)</p>}
    </div>
  );
}
