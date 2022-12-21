import classes from "./CheckCard.module.css";
import { BsSquare, BsCheckSquare } from "react-icons/bs";
import { useState } from "react";

const Checks = (props) => {
  const [cStyle, setCStyle] = useState(`${classes.card}`);
  const [active, setActive] = useState(false);

  const checkCard = () => {
    if (!active) {
      setCStyle(`${classes.card} ${classes.checked}`);
      setActive(true);
    } else {
      setCStyle(`${classes.card}`);
      setActive(false);
    }
  };

  return (
    <span onClick={checkCard}>
      {!active && <BsSquare className={classes.v} />}
      {active && <BsCheckSquare className={classes.v} />}
      <div className={cStyle}>{props.children}</div>
    </span>
  );
};

export default Checks;
