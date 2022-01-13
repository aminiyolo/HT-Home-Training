import { Input, MenuItem, Select, TextField } from "@material-ui/core";
import {
  DialogTitle,
  ModalTitle,
  ModalForm,
  Empty,
  Info,
  Count,
  BtnWrapper,
} from "./style";
import { EXERCISE, TYPE } from "../../exercise";

const Detail = ({
  exercise,
  type,
  handleFormChange,
  setIsModal,
  handleOkClick,
}) => {
  return (
    <div>
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
            <Info>(시간은 분단위 입니다.)</Info>
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
            <TextField
              name="count"
              type="number"
              inputProps={{ min: 0 }}
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
    </div>
  );
};

export default Detail;
