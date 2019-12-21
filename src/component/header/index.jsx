import React from "react";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Badge from "@material-ui/core/Badge";
import classes from "./header.module.scss";
import FormInput from "../formInput";

const Header = () => (
  <header className={classes.headerContainer}>
    <div className={classes.brand}>
      <h2>TransMonitor</h2>
    </div>
    <FormInput />
    <div className={classes.flexEndItems}>
      <span className={classes.Link}>Support</span>
      <span className={classes.Link}>FAQ</span>
      <Badge badgeContent={8} color={"primary"}>
        <NotificationsNoneIcon className={classes.Link} />
      </Badge>
      <span className={classes.name}>
        <ul>
          <li className={classes.first}> Hello</li>
          <li className={classes.second}>Oluwaleke Ojo</li>
        </ul>
      </span>
      <span className={classes.profilePicture}></span>
    </div>
  </header>
);

export default Header;
