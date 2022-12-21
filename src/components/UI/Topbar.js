import { AiFillCaretDown } from "react-icons/ai";
import { ImSearch } from "react-icons/im";
import classes from "./Topbar.module.css";

import sayarim from "../../assets/sayarim.png";
import pele from "../../assets/פלא.png";
import { useState, useEffect } from "react";

const Topbar = (props) => {
  const openSearch = (event) => {
    props.openSearch();
  };
  const toggleSubjects = (event) => {
    props.toggleSubs();
  };

  const [subjectsArrowClass, setSubjectsArrowClass] = useState(
    `${classes.icon}`
  );

  useEffect(() => {
    if (props.isSubjectsOpened) {
      setSubjectsArrowClass(`${classes.icon} ${classes.iconActivated}`);
    } else {
      setSubjectsArrowClass(`${classes.iconActivated}`);
    }
  }, [props.isSubjectsOpened]);

  return (
    <header className={classes.header}>
      <div className={classes.subhead}>
        <ImSearch size="28" onClick={openSearch} className={classes.search} />
        <div className={classes.middleLogo}>
          <p>פותח על ידי</p>
          <img src={pele} alt="loading..." />
        </div>
        <img src={sayarim} className={classes.leftLogo} alt="loading..." />
      </div>
      <div className={classes.subhead2}>
        <p className={classes.subjects} onClick={toggleSubjects}>
          <AiFillCaretDown className={subjectsArrowClass} />
          נושאים
        </p>
      </div>
    </header>
  );
};

export default Topbar;
