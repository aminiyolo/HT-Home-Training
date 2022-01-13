import Drawer from "@material-ui/core/Drawer";
import { useCallback, useState } from "react";
import { Dialog, Input } from "@material-ui/core";
import { FormWrapper, Form, AddBox, Card, Button } from "./style";
import Detail from "./Detail/Detail.jsx";
import { EXERCISE, TYPE } from "../exercise";

const Routine = () => {
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

  const handleDrawer = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
    isOpen
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "visible");
  };

  const handleOkClick = useCallback(() => {
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

  return (
    <>
      <div onClick={handleDrawer}>루틴 만들기</div>
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
          </Form>
        </FormWrapper>
      </Drawer>
    </>
  );
};

export default Routine;
