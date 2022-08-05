import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="heading">
        <h2>Welcome To The Home Page</h2>
      </div>
      <div className="link">
        <ul>
          <li>
            <Link to="/Post"> Click Here For Post </Link>
          </li>
          <br />
          <li>
            <Link to="/api"> Click Here For Api</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
