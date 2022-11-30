import classes from "./DropdownBox.module.css";
import DropdownItem from "./DropdownItem";
import Context from "../../store/context";
import { useContext, useEffect } from "react";

const DropdownBox = (props) => {
  const ctx = useContext(Context);

  useEffect(() => {
    props.changePage(ctx.page);
    // eslint-disable-next-line
  }, [ctx.page]);

  return (
    <div className={classes.container}>
      <DropdownItem page={0} name={"בית"} chosen={true} />
      <DropdownItem page={1} name={"דגשים"} chosen={false} />
      <DropdownItem
        closeDD={props.closeDD}
        page={2}
        name={"בדיקות חובה"}
        chosen={false}
      />
      <DropdownItem
        closeDD={props.closeDD}
        page={3}
        name={"תיאום אווירי"}
        chosen={false}
      />
      <DropdownItem
        closeDD={props.closeDD}
        page={4}
        name={"בטיחות"}
        chosen={false}
      />
      <DropdownItem
        closeDD={props.closeDD}
        page={5}
        name={"מבנה הרחפן"}
        chosen={false}
      />
      <DropdownItem
        closeDD={props.closeDD}
        page={6}
        name={'נוה"ק'}
        chosen={false}
      />
    </div>
  );
};

export default DropdownBox;
