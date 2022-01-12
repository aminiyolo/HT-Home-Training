import Drawer from "@material-ui/core/Drawer";
import { useCallback, useState } from "react";
import { Dialog, Input, MenuItem, Select } from "@material-ui/core";
import {
  FormWrapper,
  Form,
  DialogTitle,
  AddBox,
  ModalTitle,
  ModalForm,
  Empty,
  Info,
  Count,
  BtnWrapper,
} from "./style";

const EXERCISE = ["유산소", "푸쉬업", "스쿼트"];
const TYPE = ["시간", "횟수"];

const Routine = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [routine, setRoutine] = useState({
    kind: "유산소",
    time: "시간",
    count: "",
  });

  const [exercise, setExercise] = useState(0);
  const [type, setType] = useState(0);

  const handleOkClick = useCallback(() => {
    setIsModal(false);
    console.log(routine);
  }, []);

  const handleFormChange = useCallback((e, type = "") => {
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
  }, []);
  console.log(routine);
  return (
    <>
      <div onClick={() => setIsOpen(true)}>루틴 만들기</div>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <FormWrapper>
          <div className="title">나만의 루틴 만들기</div>
          <Form>
            <div>
              <Input
                placeholder="루틴의 이름을 작성하세요"
                onChange={(e) => setTitle(e.target.value)}
              />
              <AddBox onClick={() => setIsModal(true)}>
                <button className="btn">+</button>
                <div className="title">ADD EXERCISE</div>
              </AddBox>
            </div>
            <Dialog open={isModal} onClick={() => setIsModal(false)}>
              <DialogTitle onClick={(e) => e.stopPropagation()}>
                <ModalTitle>운동 추가하기</ModalTitle>
                <ModalForm>
                  <label>운동종류</label>
                  <Select
                    id="select"
                    MenuProps={{
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left",
                      },
                      getContentAnchorEl: null,
                    }}
                    value={exercise}
                  >
                    {EXERCISE.map((exer, index) => (
                      <MenuItem
                        key={index}
                        name="kind"
                        onClick={(e) => handleFormChange(e, "kind")}
                        value={index}
                      >
                        {exer}
                      </MenuItem>
                    ))}
                  </Select>
                  <Empty />
                  <label>
                    시간/횟수
                    <Info>(시간은 초단위 입니다.)</Info>
                  </label>
                  <Select
                    id="select"
                    MenuProps={{
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left",
                      },
                      getContentAnchorEl: null,
                    }}
                    value={type}
                  >
                    {TYPE.map((type, index) => (
                      <MenuItem
                        key={index}
                        name="time"
                        onClick={(e) => handleFormChange(e, "time")}
                        value={index}
                      >
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                  <Count>
                    <Input
                      name="count"
                      type="number"
                      onChange={(e) => handleFormChange(e)}
                    />
                  </Count>
                </ModalForm>
                <BtnWrapper>
                  <button onClick={() => setIsModal(false)}>Cancel</button>
                  <button className="ok" onClick={handleOkClick}>
                    Ok
                  </button>
                </BtnWrapper>
              </DialogTitle>
            </Dialog>
          </Form>
        </FormWrapper>
      </Drawer>
    </>
  );
};

export default Routine;
