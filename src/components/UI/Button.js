import { useEffect, useState } from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const [btnClass, setBtnClass] = useState({
    active: false,
    cl: `${classes.button} ${classes.notActivated}`,
  });

  useEffect(() => {
    if (props.section === 1) {
      if (props.activeIndex.before1 === props.index) {
        setBtnClass({
          active: true,
          cl: `${classes.button} ${classes.activated}`,
        });
      } else {
        setBtnClass({
          active: false,
          cl: `${classes.button} ${classes.notActivated}`,
        });
      }
    } else {
      if (props.activeIndex.before2 === props.index) {
        setBtnClass({
          active: true,
          cl: `${classes.button} ${classes.activated}`,
        });
      } else {
        setBtnClass({
          active: false,
          cl: `${classes.button} ${classes.notActivated}`,
        });
      }
    }
  }, [props.activeIndex, props.index, props.section]);

  const btnClickHandler = (event) => {
    if (!btnClass.active) {
      setBtnClass({
        active: true,
        cl: `${classes.button} ${classes.activated}`,
      });
      props.clickHandler(props.index);
    }
  };

  return (
    <button onClick={btnClickHandler} className={btnClass.cl}>
      {props.children}
    </button>
  );
};

export default Button;
