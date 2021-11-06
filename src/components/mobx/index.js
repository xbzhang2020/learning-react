import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";

// Model the application state.
class Timer {
  secondsPassed = 0;
  timer = null;

  constructor() {
    makeAutoObservable(this);
  }

  increase() {
    this.secondsPassed += 1;
  }

  reset() {
    this.secondsPassed = 0;
  }

  start() {
    this.timer = setInterval(() => {
      this.increase();
    }, 1000);
  }

  stop() {
    clearInterval(this.timer);
  }
}

const myTimer = new Timer();

const TimerView = observer(({ timer }) => (
  <div>
    <p>Seconds passed: {timer?.secondsPassed}</p>
    <button
      onClick={() => {
        timer?.start();
      }}
    >
      start
    </button>
    <button
      onClick={() => {
        timer?.stop();
      }}
    >
      stop
    </button>
    <button
      onClick={() => {
        timer?.reset();
      }}
    >
      reset
    </button>
  </div>
));

function App() {
  return (
    <div>
      <TimerView timer={myTimer} />
    </div>
  );
}

export default App;
