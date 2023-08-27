import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="page-not-found">
      <h1 className="status">404</h1>
      <h1>The requested page could not be found</h1>
      <div className="return">
        <h2>
          You can return to the home page here:{" "}
          <Link to={"/"}>Return Home</Link>
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
