import React from "react";
import Home from "./components/Home";
import { Outlet, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="mt-3">Go Watch A Movie</h1>
        </div>
        <div className="col text-end">
          <a href="#">
            <span className="badge text-bg-success">Login</span>
          </a>
        </div>
        <hr className="mb-3" />
      </div>
      <div className="row">
        <div className="col-md-2">
          <nav>
            <div className="list-group">
              <Link
                to="/home"
                href="#"
                className="list-group-item list-group-item-action"
              >
                Home
              </Link>
              <Link
                to="/movies"
                href="#"
                className="list-group-item list-group-item-action"
              >
                Movies
              </Link>
              <a href="#" className="list-group-item list-group-item-action">
                Genres
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                Add Movie
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                Manage Catalog
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                GraphQL
              </a>
            </div>
          </nav>
        </div>
        <div className="col-md-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
