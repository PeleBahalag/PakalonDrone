import classes from "./BattleProcedure.module.css";

import { GoPin } from "react-icons/go";
import { GiStopSign } from "react-icons/gi";

const BattleProcedure = (props) => {
  return (
    <div className={classes.section}>
      <h1>נוה"ק</h1>
      <p>
        מהווה אסטרטגיה צבאית לפיה מתכננים ומבצעים מלחמה או משימה צבאית אחרת.
        ניתוח ומיפוי שטח הוא השלב הראשון בנוה"ק הנעשה באמצעות לימוד השטח דרך 8
        שלבים:
      </p>
      <section className={classes.flex}>
        <div className={classes.item}>
          <GoPin className={classes.logo} size={55} />
        </div>
        <div className={classes.item}>
          <GiStopSign className={classes.logo} size={55} />
        </div>
      </section>
    </div>
  );
};

export default BattleProcedure;
