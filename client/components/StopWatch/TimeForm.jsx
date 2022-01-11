const TimeForm = ({ setHour, setMin, setSec }) => {
  return (
    <>
      <div className="time-form">
        <div>
          <input
            id="hour"
            type="number"
            onChange={(e) => setHour(e.target.value)}
            min={0}
          />
          <label htmlFor="hour">시</label>
        </div>
        <div>
          <input
            type="number"
            onChange={(e) => setMin(e.target.value)}
            min={0}
          />
          <label htmlFor="minute">분</label>
        </div>
        <div>
          <input
            type="number"
            onChange={(e) => setSec(e.target.value)}
            min={0}
          />
          <label htmlFor="seconds">초</label>
        </div>
      </div>
      <style jsx>{`
        .time-form {
          margin: 1.2rem 0;
        }
      `}</style>
    </>
  );
};

export default TimeForm;
