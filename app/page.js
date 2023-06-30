"use client";

import Countdown from "react-countdown";

let timer = "July 15, 2023 04:55:00";

export default function Home() {
  const CountdownRender = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <div>
          <h1>Completed</h1>
        </div>
      );
    } else {
      return (
        <div>
          <ul className="flex gap-3 items-center">
            <span className="text-white bg-green-400 p-4 rounded-lg">
              {days}
            </span>
            :
            <span className="text-white bg-green-400 p-4 rounded-lg">
              {hours}
            </span>
            :
            <span className="text-white bg-green-400 p-4 rounded-lg">
              {minutes}
            </span>
            :
            <span className="text-white bg-green-400 p-4 rounded-lg">
              {seconds}
            </span>
          </ul>
        </div>
      );
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Countdown date={timer} renderer={CountdownRender} />
    </main>
  );
}
