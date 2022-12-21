import classes from "./DropdownBox.module.css";
import DropdownItem from "./DropdownItem";
import Context from "../../store/context";
import { useContext, useEffect } from "react";

const DropdownBox = (props) => {
  const ctx = useContext(Context);

  const isChosen = (p) => {
    if(p === Number(ctx.page)){
      return true;
    }
    return false;
  }

  useEffect(() => {
    props.changePage(ctx.page);
    
    // eslint-disable-next-line
  }, [ctx.page]);

  return (
    <div className={classes.container}>
      <DropdownItem close={props.closeDD} page={0} name={"בית"} chosen={isChosen(0)} />
      <DropdownItem close={props.closeDD} page={1} name={"דגשים"} chosen={isChosen(1)} />
      <DropdownItem
        close={props.closeDD}
        page={2}
        name={"בדיקות חובה"}
        chosen={isChosen(2)}
      />
      <DropdownItem
        close={props.closeDD}
        page={3}
        name={"תיאום אווירי"}
        chosen={isChosen(3)}
      />
      <DropdownItem
        close={props.closeDD}
        page={4}
        name={"בטיחות"}
        chosen={isChosen(4)}
      />
      <DropdownItem
        close={props.closeDD}
        page={5}
        name={"מבנה הרחפן"}
        chosen={isChosen(5)}
      />
      <DropdownItem
        close={props.closeDD}
        page={6}
        name={'נוה"ק'}
        chosen={isChosen(6)}
      />
    </div>
  );
};

export default DropdownBox;
