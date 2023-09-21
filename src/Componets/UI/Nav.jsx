import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className=" sticky flex justify-between px-20 pt-5 pb-5 bg-sky-800 items-center mb-10">
        <div>
          <h3>Home </h3>
        </div>
        <div>
          <ul className="flex">
            <li className="px-5">
              <Link to="./countries"> Countries</Link>
            </li>
            <li className="px-5">
              {" "}
              <Link to="/home"> Weather</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
