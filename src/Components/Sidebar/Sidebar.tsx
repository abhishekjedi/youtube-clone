import React, { useContext } from "react";
import { categories } from "../../utils/Constants";
import classes from "./Sidebar.module.css";
import { DataContext } from "../../store/context";
import { useNavigate } from "react-router";

const Sidebar = () => {
  const { termChangeHandler, term } = useContext(DataContext);
  const navigate = useNavigate();

  return (
    <div className={classes.main}>
      {" "}
      {categories.map((items) => (
        <button
          style={{
            background: term === items.name ? "rgba(30, 30, 30, 0.969)" : "",
          }}
          className={classes.button}
          key={items.name}
          onClick={() => {
            navigate("/");
            termChangeHandler(items.name);
          }}
        >
          <span className={classes.icon}>{items.icon}</span>
          <span className={classes.name}>{items.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
