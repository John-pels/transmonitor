import React from "react";
import classes from "./formInput.module.scss";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const FormInput = () => (
  <form className={classes.Form}>
    <div className={classes.search}>
      <SearchIcon className={classes.Icon} />
      <InputBase
        className={classes.Input}
        placeholder="Search"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  </form>
);

export default FormInput;
