
// import { useState, useRef } from "react";
// import "./App.css";

// function App() {
//   const [time, setTime] = useState({ minutes: 0, seconds: 0 });
//   const [isRunning, setIsRunning] = useState(false);
//   const intervalRef = useRef(null);

//   const handlerStart = () => {
//     setIsRunning(true);

//     if (!isRunning) {
//       intervalRef.current = setInterval(() => {
//         setTime((prevTime) => {
//           console.log(prevTime);
//           if (prevTime.seconds === 59) {
//             return { minutes: prevTime.minutes + 1, seconds: 0 };
//           } else {
//             return { ...prevTime, seconds: prevTime.seconds + 1 };
//           }
//         });
//       }, 1000);
//     }
//   };

//   const handleReset = () => {
//     clearInterval(intervalRef.current);
//     setIsRunning(false);
//     setTime({ minutes: 0, seconds: 0 });
//   };

//   const handleStop = () => {
//     clearInterval(intervalRef.current);
//     setIsRunning(false);
//   };

//   return (
//     <div className="container">
//       <div>
//         <button className="btn-donate start" onClick={handlerStart}>
//           Start 🚩
//         </button>
//         <button className="btn-donate reset" onClick={handleReset}>
//           Reset 0️⃣
//         </button>
//         <button className="btn-donate stop" onClick={handleStop}>
//           Stop 🛑
//         </button>
//       </div>
//       <h3>{`${String(time.minutes).padStart(2, "0")}:${String(
//         time.seconds
//       ).padStart(2, "0")}`}⌛</h3>
//     </div>
//   );
// }

// export default App;


import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime.seconds === 59) {
            return { minutes: prevTime.minutes + 1, seconds: 0 };
          } else {
            return { ...prevTime, seconds: prevTime.seconds + 1 };
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime({ minutes: 0, seconds: 0 });
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <div className="container">
      <div className="timer">
        <div className="timer_btn">
          <button className="btn-donate start" onClick={handleStart}>
            Start 🚩
          </button>
          <button className="btn-donate reset" onClick={handleReset}>
            Reset 0️⃣
          </button>
          <button className="btn-donate stop" onClick={handleStop}>
            Stop 🛑
          </button>
        </div>
        <div>
          <h3 className="time">
            {`${String(time.minutes).padStart(2, "0")}:${String(
              time.seconds
            ).padStart(2, "0")}`}
            ⌛
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
