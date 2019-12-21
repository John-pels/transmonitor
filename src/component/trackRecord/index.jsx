import React from "react";
import classes from "./trackRecord.module.scss";

const TrackRecord = ({ heading, textOne, textTwo, textThree }) => (
  <section className={classes.trackWrap}>
    <h4>{heading}</h4>

    <span className={classes.progressBar}></span>
    <p>
      {textOne} <span className={classes.first}>20</span>
    </p>
    <p>
      {textTwo} <span className={classes.second}>80</span>
    </p>
    <p>
      {textThree} <span className={classes.third}>100</span>
    </p>
  </section>
);

export default TrackRecord;
