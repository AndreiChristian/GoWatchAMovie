import React, { useState } from "react";
import Home from "./components/Home";
import { Outlet, Link } from "react-router-dom";

const App = () => {
  const [jwtToken, setJwtToken] = useState("");
  const [allertMessage, setAllertMessage] = useState("");
  const [allertClassName, setAllertClassName] = useState(["d-none"]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="mt-3">Go Watch A Movie</h1>
        </div>
        <div className="col text-end">
          {jwtToken === "" ? (
            <Link to="/login">
              <span className="badge text-bg-success">Login</span>
            </Link>
          ) : (
            <Link to="/login">
              <span className="badge text-bg-danger">Logout</span>
            </Link>
          )}
        </div>
        <hr className="mb-3" />
      </div>
      <div className="row">
        <div className="col-md-2">
          <nav>
            <div className="list-group">
              <Link to="/" className="list-group-item list-group-item-action">
                Home
              </Link>
              <Link
                to="/movies"
                className="list-group-item list-group-item-action"
              >
                Movies
              </Link>
              <Link
                to="/genres"
                className="list-group-item list-group-item-action"
              >
                Genres
              </Link>
              {jwtToken !== "" && (
                <>
                  <Link
                    to="/admin/movies/0"
                    className="list-group-item list-group-item-action"
                  >
                    Add Movie
                  </Link>
                  <Link
                    to="/admin"
                    className="list-group-item list-group-item-action"
                  >
                    Manage Catalog
                  </Link>
                  <Link
                    to="/graphql"
                    className="list-group-item list-group-item-action"
                  >
                    GraphQL
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
        <div className="col-md-10">
          <Outlet context={{ jwtToken, setJwtToken }} />
        </div>
      </div>
    </div>
  );
};

export default App;
