import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const history = useHistory();
  const hanldeLogout = () => {
    localStorage.removeItem("user");
    history.push("/login");
  };
  return (
    <div className="header-container">
      <div className="grid">
        <div className="header-left">
          <a href="#" className="header-left__brand header-text ">
            Home
          </a>
        </div>
        <div className="header__search">
          <AiOutlineSearch className="header__search-icon" />
          <input
            type="text"
            placeholder="Search ..."
            className="header__search-box"
          />
        </div>
        <div className="header-right" onClick={hanldeLogout}>
          <a href="#" className="header-left__logout header-text ">
            Log Out
          </a>
          <div className="header-right__down-arrow"></div>
        </div>
      </div>
    </div>
  );
}

// export default Header
