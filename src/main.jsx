import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Appv1 from "./Appv1.jsx";
import "./index.css";
// import StarRating from "./StarRating";
//
function Test() {
  const [movierating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="green" onSetRating={setMovieRating} />
      <p>This movie was rated {movierating} stars</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Appv1 />
    {/* <StarRating maxRating={5} />
    <StarRating maxRating={5} color="purple" />
    <StarRating maxRating={5} color="blue" size="30" />
    <StarRating maxRating={5} className="test" defaultRating={1} />
    <StarRating
      maxRating={5}
      message={["Terrible", "Bad", "OK", "Good", "Amazing"]}
    />
    <Test /> */}
  </React.StrictMode>
);
