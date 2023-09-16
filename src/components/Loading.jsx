import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <>
      <Spinner animation="border" variant="primary" />
      <h2>Loading...</h2>
    </>
  );
};

export default Loading;
