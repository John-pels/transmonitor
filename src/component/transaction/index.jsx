import React from "react";
import classes from "./transaction.module.scss";

const url =
  "https://res.cloudinary.com/john-pels/image/upload/v1576889989/team-rebel/About-01/small_chart.svg";

const TransactionBox = ({ transaction, figure }) => (
  <section className={classes.wrap}>
    <div className={classes.wrapItems}>
      <h4>{transaction}</h4>
      <p>{figure}</p>
    </div>
    <div className={classes.wrapItems}>
      <img src={`${url}`} alt="" />
    </div>
  </section>
);

export default TransactionBox;
