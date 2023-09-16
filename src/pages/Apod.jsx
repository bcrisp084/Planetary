import { useEffect, useState } from "react";
import { Form, useNavigate, useLocation } from "react-router-dom";
import { appLoader } from "../actions/appLoader";
import dayjs from "dayjs";

const Apod = () => {
  const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));
  const navigate = useNavigate();
  const { state } = useLocation();
  const data = state?.data || {};

  useEffect(() => {
    async function fetchDailyImage() {
      const defaultImage = await appLoader({ date });
      navigate(`/apod/${date}`, { state: { data: defaultImage } });
    }
    fetchDailyImage();
  }, [date, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const selectedDate = formData.get("date");

    // Fetch the data and wait for the result
    const newData = await appLoader({ date: selectedDate });
    setDate(selectedDate);

    // Now you can navigate and set the new data
    navigate(`/apod/${selectedDate}`, { state: { data: newData } });
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
      {data.error && <p className="error">{data.error}</p>}
      {data.title && (
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
