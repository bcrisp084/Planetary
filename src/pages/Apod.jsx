import { Form, useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import { appLoader } from "../actions/appLoader";

const Apod = () => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  console.log("date", date);
  const data = useLoaderData();
  console.log("data-here", data);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const selectedDate = formData.get("date");
    appLoader({ date: selectedDate });

    console.log("selectedDate", selectedDate);
    setDate(selectedDate);
    navigate(`/apod/?date=${selectedDate}`);
  };
  return (
    <div className="main-apod">
      <Form method="post" action="/apod" onSubmit={handleSubmit}>
        <label htmlFor="date">Select a date</label>
        <input type="date" id="date" name="date" />
        <button className="form-btn" type="submit">
          Submit
        </button>
      </Form>
      {data && data.error && <p className="error">{data.error}</p>}
      {data && data.title && (
        <div className="apod">
          <h1>Astronomy Picture of the Day</h1>
          <p className="apod-title">{data.title}</p>
          <img className="apod-image" src={data.url} alt={data.title} />
          <p className="apod-info">{data.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default Apod;
