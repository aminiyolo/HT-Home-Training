import { Form, Input } from "./style";

const TimeForm = ({ setHour, setMin, setSec }) => {
  return (
    <>
      <Form>
        <div>
          <Input
            id="hour"
            type="number"
            onChange={(e) => setHour(e.target.value)}
            min={0}
          />
          <label htmlFor="hour">시</label>
        </div>
        <div>
          <Input
            type="number"
            onChange={(e) => setMin(e.target.value)}
            min={0}
          />
          <label htmlFor="minute">분</label>
        </div>
        <div>
          <Input
            type="number"
            onChange={(e) => setSec(e.target.value)}
            min={0}
          />
          <label htmlFor="seconds">초</label>
        </div>
      </Form>
    </>
  );
};

export default TimeForm;
