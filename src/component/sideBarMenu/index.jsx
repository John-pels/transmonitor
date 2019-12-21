import React from "react";
import classes from "./sideBarMenu.module.scss";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import EventNoteIcon from "@material-ui/icons/EventNote";
import SettingsInputSvideoIcon from "@material-ui/icons/SettingsInputSvideo";

const SideBarMenu = () => (
  <aside className={classes.sideBarContainer}>
    <h4>Main</h4>
    <p className={classes.active}>
      <span className={classes.icons}>
        <SettingsInputSvideoIcon />
      </span>
      Overview
    </p>
    <h4>Payments</h4>
    <ul>
      <li>
        <span className={classes.icons}>
          <EventNoteIcon />
        </span>
        All Payments
      </li>
      <li>
        <span className={classes.icons}>
          <EventNoteIcon />
        </span>
        Reconcilled Payments
      </li>
      <li>
        <span className={classes.icons}>
          <EventNoteIcon />
        </span>
        Un-reconcilled Payments
      </li>
      <li>
        <span className={classes.icons}>
          <RadioButtonCheckedIcon />
        </span>
        Manual Settlement
      </li>
    </ul>
    <h4>Orders</h4>
    <ul>
      <li>
        <span className={classes.icons}>
          <EventNoteIcon />
        </span>
        All Orders
      </li>
      <li>
        <span className={classes.icons}>
          <EventNoteIcon />
        </span>
        Pending Orders
      </li>
      <li>
        <span className={classes.icons}>
          <EventNoteIcon />
        </span>
        Reconcilled orders
      </li>
    </ul>
    <p className={classes.lastParagraph}>
      <span className={classes.icons}>
        <PersonOutlineIcon />
      </span>
      Merchant Profile
    </p>
  </aside>
);

export default SideBarMenu;
