import Drawer from "@material-ui/core/Drawer";
import { useCallback, useState } from "react";
import { Dialog, Input, Paper, Typography } from "@material-ui/core";
import { FormWrapper, Form, AddBox, Card } from "./style";
import Detail from "./Detail/Detail.jsx";
import { EXERCISE, TYPE } from "../exercise";
import { BtnWrapper } from "./Detail/style";
import { useDispatch, useSelector } from "react-redux";
import {
  addRecord,
  addRoutine,
  removeRoutine,
  updateRoutine,
} from "../../redux/apiCalls";
import { ToastContainer, toast } from "react-toastify";

const Routine = () => {
  const { routines } = useSelector((state) => state.routine);
  const { user } = useSelector((state) => state.user);
  const { date } = useSelector((state) => state.record);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [routineCard, setRoutineCard] = useState([]);
  const [exercise, setExercise] = useState(0);
  const [type, setType] = useState(0);
  const [isModify, setIsModify] = useState(false);
  const [dbId, setDbId] = useState(null);
  const [routine, setRoutine] = useState({
    kind: "유산소",
    time: "시간",
    count: 0,
    done: false,
  });

  // 사이드바 열기 및 스크롤바 제거
  const handleDrawer = useCallback(() => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
    if (isModify) {
      // 사이드바 닫히는 도중에 즉각적으로 UI 바뀌므로 딜레이 주어서 안보이게
      setTimeout(() => {
        setTitle("");
        setRoutineCard([]);
        setIsModify(false);
      }, 300);
    }
    // isOpen
    //   ? (document.body.style.overflowY = "hidden")
    //   : (document.body.style.overflowY = "visible");
  }, [isOpen, isModify, setTitle, setRoutineCard, setIsModify]);

  // 운동 작성 폼
  const handleFormChange = useCallback(
    (e, type = "") => {
      switch (type) {
        case "kind":
          setExercise(e.target.dataset.value);
          setRoutine({
            ...routine,
            kind: EXERCISE[e.target.dataset.value],
          });
          break;

        case "time":
          setType(e.target.dataset.value);
          setRoutine({ ...routine, time: TYPE[e.target.dataset.value] });
          break;

        default:
          setRoutine({ ...routine, count: e.target.value });
      }
    },
    [routine],
  );

  // 운동 작성 폼 제출
  const handleOkClick = useCallback(() => {
    if (routine.count <= 0) {
      return alert("시간 및 횟수를 입력해주세요.");
    }
    setIsModal(false);
    setRoutineCard([...routineCard, routine]);
  }, [routine, routineCard, setIsModal]);

  // 루틴 운동 목록 삭제
  const handleRemoveExercise = useCallback(
    (index) => {
      const NEW = [...routineCard];
      NEW.splice(index, 1);
      setRoutineCard(NEW);
    },
    [routineCard],
  );

  // 작성한 루틴 저장하기
  const handleSubmit = useCallback(() => {
    if (!title.trim()) {
      return alert("루틴의 이름을 작성 해주세요");
    }

    if (!routineCard.length) {
      return alert("운동을 1개 이상 작성 해주세요.");
    }

    addRoutine(dispatch, { id: user.googleId, title, routine: routineCard });

    setTitle("");
    setRoutineCard([]);
    setIsOpen(false);
  }, [title, routineCard]);

  // 기존 작성된 루틴 삭제하기
  const handleRemoveRoutine = useCallback((e, id) => {
    e.stopPropagation();
    const res = window.confirm("정말로 삭제하시겠습니까?");
    res && removeRoutine(dispatch, { id });
  }, []);

  // 기존 작성된 루틴 확인하기
  const handleViewRoutine = useCallback(
    (routine) => {
      setIsOpen(true);
      setIsModify(true);
      setDbId(routine._id);
      setTitle(routine.name);
      setRoutineCard([...routine.routines]);
    },
    [routine, setIsOpen, setTitle, setRoutineCard],
  );

  // 기존 작성된 루틴 수정하기
  const handleUpdateRoutine = useCallback(() => {
    updateRoutine(dispatch, { id: dbId, title, routine: routineCard });
    setIsOpen(false);
    toast("수정 완료!", {
      autoClose: 2000,
    });
  }, [title, routineCard, dbId, setIsOpen]);

  // 운동 기록 추가하기
  const handleAddRecord = useCallback(
    (e, routine) => {
      e.stopPropagation();
      // console.log(routine);
      addRecord(dispatch, { id: user.googleId, routine });
    },
    [routine],
  );

  return (
    <div style={{ border: "1px solid lightgray" }}>
      <div>
        <h2>나의 루틴</h2>
      </div>
      {/* 제출된 루틴 리스트 */}
      <div style={{ marginBottom: "0.5rem" }}>
        <AddBox routine={true} onClick={handleDrawer}>
          <button className="btn">+</button>
          <div className="title">ADD ROUTINE</div>
        </AddBox>
      </div>
      <div
        style={{
          height: "30vh",
          overflow: "auto",
          border: "1px solid lightgray",
        }}
      >
        {routines.length ? (
          routines.map((routine, index) => (
            <div
              style={{
                margin: "1rem",
                cursor: "pointer",
                display: "flex",
              }}
              onClick={() => handleViewRoutine(routine)}
              key={index}
            >
              <button
                onClick={(e) => handleAddRecord(e, routine)}
                style={{ cursor: "pointer" }}
              >
                기록
              </button>
              <div>
                <Paper
                  style={{
                    padding: "0.5rem",
                    width: "30vw",
                  }}
                  elevation={3}
                  variant={"outlined"}
                >
                  <Typography variant="h6" gutterBottom>
                    {routine.name}
                    <button
                      onClick={(e) => handleRemoveRoutine(e, routine._id)}
                      className="btn"
                    >
                      X
                    </button>
                  </Typography>
                </Paper>
              </div>
            </div>
          ))
        ) : (
          <h1 style={{ fontSize: "3rem", marginTop: "5rem" }}>텅~</h1>
        )}
      </div>
      {/* Side bar */}
      <Drawer anchor="right" open={isOpen} onClose={handleDrawer}>
        <FormWrapper>
          <div className="title">
            {!isModify ? "나만의 루틴 만들기" : "나만의 루틴 수정하기"}
          </div>
          <Form>
            <div>
              <Input
                placeholder="루틴의 이름을 작성하세요"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <AddBox onClick={() => setIsModal(true)}>
              <button className="btn">+</button>
              <div className="title">ADD EXERCISE</div>
            </AddBox>
            <Dialog open={isModal} onClick={() => setIsModal(false)}>
              <Detail
                exercise={exercise}
                type={type}
                handleFormChange={handleFormChange}
                setIsModal={setIsModal}
                handleOkClick={handleOkClick}
              />
            </Dialog>
            <div>
              {routineCard.map((card, index) => (
                <Card key={index}>
                  <button
                    onClick={() => handleRemoveExercise(index)}
                    className="btn"
                  >
                    X
                  </button>
                  <div className="kind">{card.kind}</div>
                  <div>
                    {card.time}
                    {" :  "}
                    {card.time === "시간"
                      ? `${card.count}분`
                      : `${card.count}개`}
                  </div>
                </Card>
              ))}
            </div>
            <BtnWrapper>
              <button onClick={handleDrawer}>Cancle</button>
              {!isModify ? (
                <button onClick={handleSubmit} className="ok">
                  Ok
                </button>
              ) : (
                <button onClick={handleUpdateRoutine} className="ok">
                  수정하기
                </button>
              )}
            </BtnWrapper>
          </Form>
        </FormWrapper>
      </Drawer>
      <ToastContainer />
    </div>
  );
};

export default Routine;
