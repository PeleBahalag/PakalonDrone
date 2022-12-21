import { useState } from "react";
import { ImSearch } from "react-icons/im";
import { RiCloseFill } from "react-icons/ri";
import { FaRegLightbulb } from "react-icons/fa";
import { MdOutlineSubject } from "react-icons/md";

import Card from "../UI/Card";
import classes from "./Search.module.css";

const Search = (props) => {
  const [tabClass, setTabClass] = useState(
    `${classes.tab} ${classes.slideAnim}`
  );

  const close = (event) => {
    setTabClass(`${classes.tab} ${classes.slideAnimRev}`);
    setTimeout(() => {
      props.closeSearch();
    }, 300);
  };

  return (
    <div className={tabClass}>
      <RiCloseFill size="40" onClick={close} className={classes.x} />
      <section className={classes.searchBar}>
        <h1>לא מוצאים משהו?</h1>
        <textarea className={classes.bar} />
        <div className={classes.iconSearch}>
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
