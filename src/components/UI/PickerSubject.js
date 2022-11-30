import { useEffect, useState } from "react";
import classes from "./PickerSubjects.module.css";

const PickerSubject = (props) => {
  const [cStyle, setCStyle] = useState(
    `${classes.subject} ${classes.notChosen}`
  );

  useEffect(() => {
    if (props.chosen) {
      setCStyle(`${classes.subject} ${classes.chosen}`);
    } else {
      setCStyle(`${classes.subject} ${classes.notChosen}`);
    }
  }, [props.chosen]);

  const chooseSubject = () => {
    setCStyle(`${classes.subject} ${classes.chosen}`);
    props.chooseAnother(props.index);
  };

  return (
    <div onClick={chooseSubject} className={cStyle}>
      <p>{props.title}</p>
    </div>
  );
};

export default PickerSubject;
