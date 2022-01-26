import { useEffect, useRef, useState, useCallback } from "react";
import TimeForm from "./timeForm/TimeForm.jsx";
import Countdown from "react-countdown";
import { Wrapper, Title, CountContainer, Button } from "./style";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [inprogress, setInprogress] = useState(false);
  const countRef = useRef();

  // 시작, 중지, 재시작 버튼 클릭 이벤트
  const handleStart = useCallback(() => {
    if (parseInt(hour * 60 * 60) + parseInt(min * 60) + parseInt(sec) <= 0) {
      return; // 시간이 0초 이하일 때, 시작 방지
    }
    setInprogress(true);
    countRef.current.start();
  }, [hour, min, sec, inprogress, countRef.current]);

  const handlePause = useCallback(
    () => countRef.current.pause(),
    [countRef.current],
  );

  const handleReset = useCallback(
    () => countRef.current.stop(),
    [countRef.current],
  );

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
    <Wrapper>
      <Title>
        <h3 className="watch">스톱워치</h3>
      </Title>
      <CountContainer>
        <Countdown
          date={Date.now() + time * 1000}
          renderer={renderer}
          ref={countRef}
        />
      </CountContainer>
      <div>
        <Button onClick={handleStart}>START</Button>
        <Button onClick={handlePause}>PAUSE</Button>
        <Button onClick={handleReset}>RESET</Button>
      </div>
      <TimeForm setHour={setHour} setMin={setMin} setSec={setSec} />
    </Wrapper>
  );
};

export default StopWatch;
