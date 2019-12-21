import React from "react";
import classes from "./container.module.scss";

const MainContainer = () => {
  return (
    <section className={classes.container}>
      <div className={classes.containerBoxes}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum earum, laudantium ducimus hic modi atque fugit fuga id, maiores alias nobis eos? Similique natus, perferendis officiis nulla explicabo nesciunt harum!
      </div>
      <div className={classes.containerBoxes}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio quasi unde similique maiores consequuntur corporis quos molestiae voluptas suscipit facere omnis veniam, itaque alias veritatis, quam consectetur corrupti iusto eius.
      </div>
    </section>
  );
};

export default MainContainer;
