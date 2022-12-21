import classes from "./Subjects.module.css";
import { FaBinoculars, FaMarker, FaPlaneArrival } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { BsShieldShaded } from "react-icons/bs";
import { IoIosConstruct } from "react-icons/io";
import { useContext } from "react";
import Context from "../../store/context";

const Subjects = (props) => {
  const group = props.group;

  const ctx = useContext(Context);

  const goToPage = (pageNum) => {
    // 1- דגשים
    // 2- בדיקות חובה
    // 3- תיאום אווירי
    // 4- בטיחות
    // 5- מבנה הרחפן
    // 6- נוה"ק

    ctx.updatePage(pageNum);
  };

  if (group === "group1") {
    return (
      <section className={classes.menu}>
        <div className={classes.icon} onClick={() => goToPage(1)}>
          <FaMarker size="30" />
          <p>דגשים</p>
        </div>
        <div className={classes.icon} onClick={() => goToPage(2)}>
          <GiNotebook size="30" />
          <p>בדיקות חובה</p>
        </div>
        <div className={classes.icon} onClick={() => goToPage(3)}>
          <FaPlaneArrival size="30" />
          <p>תיאום אווירי</p>
        </div>
      </section>
    );
  } else if (group === "group2") {
    return (
      <section className={classes.menu}>
        <div className={classes.icon} onClick={() => goToPage(4)}>
          <BsShieldShaded size="30" />
          <p>בטיחות</p>
        </div>
        <div className={classes.icon} onClick={() => goToPage(5)}>
          <IoIosConstruct size="30" />
          <p>מבנה הרחפן</p>
        </div>
        <div className={classes.icon} onClick={() => goToPage(6)}>
          <FaBinoculars size="30" />
          <p>נוה"ק</p>
        </div>
      </section>
    );
  }
};

export default Subjects;
