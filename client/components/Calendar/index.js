import "antd/dist/antd.css";
import { useState } from "react";
import { Calendar, Badge, Select, Row, Col, Radio } from "antd";
const { Group, Button } = Radio;
import styled from "styled-components";
import { setDate } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

const UpperDiv = styled.div`
  width: 90%;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  margin: 20px;
  /* & .ant-fullcalendar-selected-day .ant-fullcalendar-value,
  .ant-fullcalendar-month-panel-selected-cell .ant-fullcalendar-value {
    color: black;
    border-radius: none;
    border-bottom: 2px solid #8854d0;
    background: none;
    box-shadow: none;
  }
  & .ant-fullcalendar-today .ant-fullcalendar-value,
  .ant-fullcalendar-month-panel-current-cell .ant-fullcalendar-value {
    box-shadow: none;
    color: rgba(0, 0, 0, 0.65);
    background: #d980fa73;
  }

  & .ant-picker-cell {
    padding: 0;
  }

  & .ant-fullcalendar-value {
    & :hover,
    :focus {
      background: #d980fa20;
    }
    & :active {
      background: #d980fa;
    }
  }
  & .ant-fullcalendar-content {
    justify-content: center;
    & .ant-badge {
      width: 8px;
    }
  } */
`;

const Calender = () => {
  const dispatch = useDispatch();
  const [record, setRecord] = useState({
    "2022-01-18": [{ type: "success" }],
    "2022-01-22": [{ type: "success" }],
    "2022-01-23": [{ type: "success" }],
    "2022-01-29": [{ type: "success" }],
  });
  // const [date, setDate] = useState("");

  function onPanelChange(value) {
    // console.log(value.format("YYYY-MM-DD"), mode);
    setDate(dispatch, value.format("YYYY-MM-DD"));
  }

  function getListData(value) {
    // const dateValue = value.toString().slice(0, 15);
    // console.log(dateValue);
    // console.log(value.format("YYYY-MM-DD"));
    let listData = [];
    if (record[value.format("YYYY-MM-DD")]) {
      record[value.format("YYYY-MM-DD")].forEach((r) => {
        listData.push({
          date: value,
          type: r.type,
        });
      });
    }
    // console.log(listData);
    // switch (value.format("YYYY-MM-DD")) {
    //   case "2022-01-18":
    //     listData = [{ type: "success" }];
    //     break;
    //   case 10:
    //     listData = [{ type: "success" }];
    //     break;
    //   case 15:
    //     listData = [{ type: "success" }];
    //     break;
    //   default:
    // }
    return listData || [];
  }

  function dateCellRender(value) {
    const listData = getListData(value);
    return listData.map((item, index) => (
      <div
        key={index}
        style={{
          position: "absolute",
          textAlign: "center",
          top: "20px",
          left: "9px",
        }}
      >
        <Badge style={{ textAlign: "center" }} status={item.type} />
      </div>
    ));
  }

  // function getMonthData(value) {
  //   if (value.month() === 8) {
  //     return 1394;
  //   }
  // }

  // function monthCellRender(value) {
  //   const num = getMonthData(value);
  //   return num ? (
  //     <div className="notes-month">
  //       <section>{num}</section>
  //       <span>Backlog number</span>
  //     </div>
  //   ) : null;
  // }

  // const headerRender = ({ value, type, onChange, onTypeChange }) => {
  //   const date = value.date(); // 선택한 시간의 date
  //   const month = value.month(); // 선택한 시간의 month
  //   const year = value.year(); // 선택한 시간의 year
  //   const localeData = value.localeData(); // 선택한 시간의 Data
  //   const months = [...localeData.monthsShort()]; // 가지고 있는 month 데이터 복사
  //   // 선택한 시간 redux에 저장
  //   const dateTemp = new Date(year, month, date);
  //   const stringTemp = dateTemp.toString().slice(0, 15);
  //   console.log(stringTemp);
  //   // dispatch(setNowPointingDate(stringTemp));

  //   // Month의 Select Option 추가
  //   const monthOptions = Array(12)
  //     .fill(0)
  //     .map((v, index) => (
  //       <Select.Option className="Month-Item" key={`${index}`}>
  //         {months[index]}
  //       </Select.Option>
  //     ));

  //   // Year의 Select Option 추가
  //   const yearOptions = Array(11)
  //     .fill(0)
  //     .map((v, index) => (
  //       <Select.Option
  //         key={index}
  //         value={year - 5 + index}
  //         className="Year-Item"
  //       >
  //         {year - 5 + index}
  //       </Select.Option>
  //     ));

  //   return (
  //     <div>
  //       <div className="Title"> Calender </div>
  //       <Row type="flex" justify="space-between">
  //         <Col>
  //           <Group onChange={(e) => onTypeChange(e.target.value)} value={type}>
  //             <Button className="Calendar-Button" value="month">
  //               Month
  //             </Button>
  //             <Button className="Calendar-Button" value="year">
  //               Year
  //             </Button>
  //           </Group>
  //         </Col>
  //         <Col>
  //           <Select
  //             dropdownMatchSelectWidth={false}
  //             className="Year"
  //             onChange={(newYear) => {
  //               const now = value.clone().year(newYear);
  //               onChange(now);
  //             }}
  //             value={String(year)}
  //           >
  //             {yearOptions}
  //           </Select>
  //         </Col>
  //         <Col>
  //           <Select
  //             dropdownMatchSelectWidth={false}
  //             className="Month"
  //             value={String(month)}
  //             onChange={(selectedMonth) => {
  //               const newValue = value.clone();
  //               newValue.month(parseInt(selectedMonth, 10));
  //               onChange(newValue);
  //             }}
  //           >
  //             {monthOptions}
  //           </Select>
  //         </Col>
  //       </Row>
  //     </div>
  //   );
  // };

  return (
    <UpperDiv>
      <Calendar
        fullscreen={false}
        dateCellRender={dateCellRender}
        onChange={onPanelChange}
        // headerRender={headerRender}
        // monthCellRender={monthCellRender}
      />
    </UpperDiv>
  );
};

export default Calender;
