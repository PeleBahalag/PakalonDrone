import { useState } from "react";
import classes from "./Picker.module.css";
import PickerSubject from "./PickerSubject";

const Picker = (props) => {
  const [chosen, setChosen] = useState([true, false, false]);

  const chooseAnother = (index) => {
    let updated = [false, false, false];
    updated[index] = true;
    props.changeSubject(updated);
    setChosen(updated);
  };

  return (
    <div className={classes.pickerContainer}>
      <PickerSubject
        index={0}
        chooseAnother={chooseAnother}
        chosen={chosen[0]}
        title={"לפני ההטסה"}
      />
      <PickerSubject
        index={1}
        chooseAnother={chooseAnother}
        chosen={chosen[1]}
        title={"בעת ההטסה"}
      />
      <PickerSubject
        index={2}
        chooseAnother={chooseAnother}
        chosen={chosen[2]}
        title={"אחרי ההטסה"}
      />
    </div>
  );
};

export default Picker;
