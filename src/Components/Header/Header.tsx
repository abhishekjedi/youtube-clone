import React from "react";
import SearchBar from "./SearchBar";
import logo from "../../assets/youtube-logo.jpg";
import classes from "./Header.module.css";
import { useNavigate } from "react-router";

type Props = {};

const Header = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className={classes.main}>
      <img
        src={logo}
        alt="logo"
        className={classes.image}
        onClick={() => {
          navigate("/");
        }}
      />
      <h1
        onClick={() => {
          navigate("/");
        }}
      >
        YouTube
      </h1>
      <SearchBar />
    </div>
  );
};

export default Header;
