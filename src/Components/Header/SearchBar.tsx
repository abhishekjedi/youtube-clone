import React, { useState } from "react";
import classes from "./SearchBar.module.css";
import { useNavigate } from "react-router";

type Props = {};

const SearchBar = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  return (
    <form className={classes.main} onSubmit={submitHandler}>
      <input
        className={classes.input}
        type="text"
        placeholder="Search...."
        value={searchTerm}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setSearchTerm(e.currentTarget.value);
        }}
      />
    </form>
  );
};

export default SearchBar;
