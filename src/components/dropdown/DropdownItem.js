import { useEffect, useState, useContext } from "react";
import classes from "./DropdownItem.module.css";

import Context from "../../store/context";

const DropdownItem = (props) => {
  const [stClass, setStClass] = useState(`${classes.item}`);
  const ctx = useContext(Context);

  useEffect(() => {
    if (props.chosen) {
      setStClass(`${classes.item} ${classes.chosen}`);
    }
  }, [props.chosen]);

  const goToPage = () => {
    // 1- דגשים
    // 2- בדיקות חובה
    // 3- תיאום אווירי
    // 4- בטיחות
    // 5- מבנה הרחפן
    // 6- נוה"ק
    ctx.updatePage(`${props.page}`);
  };

  return (
    <div className={stClass} onClick={goToPage}>
      <p>{props.name}</p>
    </div>
  );
};

export default DropdownItem;
