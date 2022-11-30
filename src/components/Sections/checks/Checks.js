import classes from "./Checks.module.css";
import CheckCard from "./CheckCard";
import { AiOutlineCheck } from "react-icons/ai";
import { useState } from "react";

const Checks = (props) => {
  const [checkedArr, setCheckedArr] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const setActive = (i) => {
    let newArr = checkedArr;
    newArr[i] = true;
    setCheckedArr(newArr);
  };

  return (
    <div className={classes.container}>
      <h1>בדיקות חובה</h1>
      <h2>לחצו על מה שביצעתם!</h2>
      <CheckCard handleCheck={setActive} i={0} check={checkedArr[0]}>
        <p>רוח</p>
        <h3>15 קשר/ 27 קמ"ש</h3>
      </CheckCard>
      <CheckCard handleCheck={setActive} i={1} check={checkedArr[1]}>
        <p>פתח זרועות</p>
        <h3>קדמיות ואז אחוריות</h3>
      </CheckCard>
      <CheckCard handleCheck={setActive} i={2} check={checkedArr[2]}>
        <p>פרופלורים</p>
        <h3>שחור לשחור, לבן ללבן, בלי סדקים</h3>
      </CheckCard>
      <CheckCard handleCheck={setActive} i={3} check={checkedArr[3]}>
        <p>מצלמה וגימבל</p>
        <h3>הסרת כיסוי מצלמה ותפס גימבל</h3>
      </CheckCard>
      <CheckCard handleCheck={setActive} i={4} check={checkedArr[4]}>
        <p>סוללה</p>
        <h3>מלאה, לא שבורה/ נפוחה/חמה/קרה מדי, מוכנסת עד הסוף</h3>
      </CheckCard>
      <CheckCard handleCheck={setActive} i={5} check={checkedArr[5]}>
        <p>שלט</p>
        <h3>סוללה מלאה</h3>
      </CheckCard>
      <CheckCard handleCheck={setActive} i={6} check={checkedArr[6]}>
        <p>אנטנות</p>
        <h3>90 מעלות</h3>
      </CheckCard>
      <CheckCard handleCheck={setActive} i={7} check={checkedArr[7]}>
        <p>כרטיס זיכרון</p>
        <h3>ריק, מצב RC</h3>
      </CheckCard>
      <CheckCard handleCheck={setActive} i={8} check={checkedArr[8]}>
        <p>דיווח</p>
        <h3>תיאום אווירי</h3>
      </CheckCard>
      <CheckCard handleCheck={setActive} i={9} check={checkedArr[9]}>
        <p>חמשת הדגשים</p>
        <div className={classes.five}>
          <AiOutlineCheck className={classes.v} />
          <h3 className={classes.align}>
            נקי ממכשולים, מתכות, מגנטים ואנשים ברדיוס של 10 מטר.
          </h3>
        </div>
        <div className={classes.five}>
          <AiOutlineCheck className={classes.v} />
          <h3 className={classes.align}>משטח מישורי</h3>
        </div>
        <div className={classes.five}>
          <AiOutlineCheck className={classes.v} />
          <h3 className={classes.align}>כולם נמצאים מאחורי המטיס</h3>
        </div>
        <div className={classes.five}>
          <AiOutlineCheck className={classes.v} />
          <h3 className={classes.align}>גב הרחפן כלפי המטיס</h3>
        </div>
        <div className={classes.five}>
          <AiOutlineCheck className={classes.v} />
          <h3 className={classes.align}>מצלמה למעלה</h3>
        </div>
      </CheckCard>
    </div>
  );
};

export default Checks;
