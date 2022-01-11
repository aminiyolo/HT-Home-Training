import { useEffect, useRef, useState } from "react";
import TimeForm from "./timeForm";
import Countdown from "react-countdown";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [inprogress, setInprogress] = useState(false);
  const countRef = useRef();

  // 시작, 중지, 재시작 버튼 클릭 이벤트
  const handleStart = () => {
    setInprogress(true);
    countRef.current.start();
  };
  const handlePause = () => countRef.current.pause();
  const handleReset = () => countRef.current.stop();

  // 인풋을 변경할 때 마다 새롭게 값 세팅
  useEffect(() => {
    setTime(parseInt(hour * 60 * 60) + parseInt(min * 60) + parseInt(sec));
  }, [hour, min, sec]);

  // Countdown 컴포넌트에 필요한 필수 값들의 로직
  const renderer = ({ hours, minutes, seconds, completed }) => {
    return (
      <span>
        {hours >= 10 ? hours : `0${hours}`}:
        {minutes >= 10 ? minutes : `0${minutes}`}:
        {seconds >= 10 ? seconds : `0${seconds}`}
        {inprogress && completed && <Completionist />}
      </span>
    );
  };

  // 설정된 시간이 완료 되었을 때,
  const Completionist = () => (
    <div style={{ fontSize: "1rem" }}>설정한 시간이 종료되었습니다!</div>
  );

  return (
    <div className="wrapper">
      <div className="title">
        <h3 className="watch">스톱워치</h3>
      </div>
      <div className="countDown">
        <Countdown
          date={Date.now() + time * 1000}
          renderer={renderer}
          ref={countRef}
        />
      </div>
      <div className="btn-wrapper">
        <button onClick={handleStart}>START</button>
        <button onClick={handlePause}>PAUSE</button>
        <button onClick={handleReset}>RESET</button>
      </div>
      <TimeForm setHour={setHour} setMin={setMin} setSec={setSec} />

      <style jsx>{`
        .wrapper {
          border: 1px solid lightgrey;
        }

        .title {
          border-bottom: 1px solid lightgrey;
          width: 75%;
          margin: auto;
        }

        .watch {
          font-weight: 600;
        }

        .countDown {
          font-size: 3rem;
        }

        button {
          margin: 1rem 1rem 0;
        }
      `}</style>
    </div>
  );
};

export default StopWatch;
