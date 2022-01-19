import Drawer from "@material-ui/core/Drawer";
import { useCallback, useState } from "react";
import { Dialog, Input, Paper, Typography } from "@material-ui/core";
import { FormWrapper, Form, AddBox, Card } from "./style";
import Detail from "./Detail/Detail.jsx";
import { EXERCISE, TYPE } from "../exercise";
import { BtnWrapper } from "./Detail/style";

const Routine = () => {
  const [myRoutine, setMyRoutine] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [routine, setRoutine] = useState({
    kind: "유산소",
    time: "시간",
    count: 0,
  });

  const [routineCard, setRoutineCard] = useState([]);
  const [exercise, setExercise] = useState(0);
  const [type, setType] = useState(0);

  const handleDrawer = useCallback(() => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
    isOpen
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "visible");
  }, [isOpen]);

  const handleOkClick = useCallback(() => {
    if (routine.count <= 0) {
      return alert("시간 및 횟수를 입력해주세요.");
    }
    setIsModal(false);
    setRoutineCard([...routineCard, routine]);
  }, [routine, routineCard]);

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

  const handleRemove = useCallback(
    (index) => {
      const NEW = [...routineCard];
      NEW.splice(index, 1);
      setRoutineCard(NEW);
    },
    [routineCard],
  );

  const handleSubmit = useCallback(() => {
    setMyRoutine((prev) => [...prev, { title }]);
    setTitle("");
    setIsOpen(false);
  }, [title]);

  return (
    <>
      <div>
        <h2>나의 루틴</h2>
      </div>
      {/* 제출된 루틴 리스트 */}
      <div
        style={{
          height: "27.5vh",
          overflow: "auto",
          border: "1px solid lightgray",
        }}
      >
        {myRoutine !== [] &&
          myRoutine.map((routine, index) => (
            <div style={{ margin: "1rem" }} key={index}>
              <Paper
                style={{ padding: "0.5rem" }}
                elevation={3}
                variant={"outlined"}
              >
                <Typography variant="h6" gutterBottom>
                  {routine.title}
                  <button onClick={() => handleRemove(index)} className="btn">
                    X
                  </button>
                </Typography>
              </Paper>
            </div>
          ))}
      </div>
      <div>
        <AddBox routine={true} onClick={handleDrawer}>
          <button className="btn">+</button>
          <div className="title">ADD ROUTINE</div>
        </AddBox>
      </div>
      {/* Side bar */}
      <Drawer anchor="right" open={isOpen} onClose={handleDrawer}>
        <FormWrapper>
          <div className="title">나만의 루틴 만들기</div>
          <Form>
            <div>
              <Input
                placeholder="루틴의 이름을 작성하세요"
                onChange={(e) => setTitle(e.target.value)}
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
                  <button onClick={() => handleRemove(index)} className="btn">
                    X
                  </button>
                  <div className="kind">{card.kind}</div>
                  <div>
                    {card.time}
                    {" :  "}
                    {card.count}
                  </div>
                </Card>
              ))}
            </div>
            <BtnWrapper>
              <button onClick={handleDrawer}>Cancel</button>
              <button onClick={handleSubmit} className="ok">
                Ok
              </button>
            </BtnWrapper>
          </Form>
        </FormWrapper>
      </Drawer>
    </>
  );
};

export default Routine;
