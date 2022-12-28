import { useState, useReducer, useEffect, useRef, useContext } from "react";
import { ImSearch } from "react-icons/im";
import { RiCloseFill } from "react-icons/ri";
import { FaRegLightbulb } from "react-icons/fa";
import { MdOutlineSubject } from "react-icons/md";
import Context from "../../store/context";

import Card from "../UI/Card";
import classes from "./Search.module.css";

const Search = (props) => {
  const subjects = {
    0: ["בית", "פתיחה"],
    1: ["דגש"],
    2: ["בדיקות", "בדיקה", "חובה"],
    3: ["תיאום", "אויר", "אוויר", "סגירה"],
    4: ["בטיחות"],
    5: ["מבנה", "לומדה", "לומדת", "חלקי"],
    6: ["נוהל", "קרב", 'נוה"ק', "נוהק", "נוה'ק"],
  };

  const ctx = useContext(Context);
  const [tabClass, setTabClass] = useState(
    `${classes.tab} ${classes.slideAnim}`
  );
  const close = (event) => {
    setTabClass(`${classes.tab} ${classes.slideAnimRev}`);
    setTimeout(() => {
      props.closeSearch();
    }, 300);
  };

  const openPage = (page) => {
    window.scrollTo(0, 0);
    ctx.updatePage(page);
  };

  const inputReducer = (state, action) => {
    if (action.searchMode === 1) {
      for (let i = 0; i < Object.keys(subjects).length; i++) {
        for (let j = 0; j < subjects[i].length; j++) {
          console.log(subjects[i][j]);
          if (action.value.includes(subjects[i][j])) {
            openPage(i);
            close();
          }
        }
      }
      // 0- none , 1- search subject 2- search part of subject
    }
    console.log(action);
  };

  const [inputFunc, dispatchInputFunc] = useReducer(inputReducer, {
    value: "",
    searchMode: 0,
  });

  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
    dispatchInputFunc({
      value: inputElement.current.value,
      searchMode: 1, // 0- none , 1- search subject 2- search part of subject
    });
  };

  return (
    <div className={tabClass}>
      <RiCloseFill size="40" onClick={close} className={classes.x} />
      <section className={classes.searchBar}>
        <h1>לא מוצאים משהו?</h1>
        <textarea className={classes.bar} ref={inputElement} />
        <div className={classes.iconSearch} onClick={focusInput}>
          <ImSearch size="22" />
        </div>
        <p>מה תוכלו לחפש בפק"לון</p>
        <Card>
          <h1 className={classes.header}>
            <FaRegLightbulb />
            עובדות יבשות
          </h1>
          <p className={classes.paragraph}>מהי המהירות המקסימאלית של הרחפן?</p>
        </Card>
        <Card>
          <h1 className={classes.header}>
            <MdOutlineSubject />
            נושאים
          </h1>
          <p className={classes.paragraph}>בטיחות ברחפן</p>
        </Card>
      </section>
    </div>
  );
};

export default Search;
