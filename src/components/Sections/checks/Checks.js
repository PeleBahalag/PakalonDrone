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
        <h3>15 קשר/ 27 קמ"ש</h3>
        <p>רוח</p>
      </CheckCard>
      <CheckCard handleCheck={setActive} i={1} check={checkedArr[1]}>
        <h3>קדמיות ואז אחוריות</h3>
        <p>פתח זרועות</p>
      </CheckCard>
      <CheckCard handleCheck={setActive} i={2} check={checkedArr[2]}>
        <h3>שחור לשחור, לבן ללבן, בלי סדקים</h3>
        <p>פרופלורים</p>
      </CheckCard>
      <CheckCard handleCheck={setActive} i={3} check={checkedArr[3]}>
        <h3>הסרת כיסוי מצלמה ותפס גימבל</h3>
        <p>מצלמה וגימבל</p>
      </CheckCard>
      <CheckCard handleCheck={setActive} i={4} check={checkedArr[4]}>
        <h3>מלאה, לא שבורה/ נפוחה/חמה/קרה מדי, מוכנסת עד הסוף</h3>
        <p>סוללה</p>
      </CheckCard>
      <CheckCard handleCheck={setActive} i={5} check={checkedArr[5]}>
        <h3>סוללה מלאה</h3>
        <p>שלט</p>
      </CheckCard>
      <CheckCard handleCheck={setActive} i={6} check={checkedArr[6]}>
        <h3>90 מעלות</h3>
        <p>אנטנות</p>
      </CheckCard>
      <CheckCard handleCheck={setActive} i={7} check={checkedArr[7]}>
        <h3>ריק, מצב RC</h3>
        <p>כרטיס זיכרון</p>
      </CheckCard>
      <CheckCard handleCheck={setActive} i={8} check={checkedArr[8]}>
        <h3>תיאום אווירי</h3>
        <p>דיווח</p>
      </CheckCard>
      <CheckCard handleCheck={setActive} i={9} check={checkedArr[9]}>
        <h3>
          <AiOutlineCheck /> נקי ממכשולים, מתכות, מגנטים ואנשים ברדיוס של 10
          מטר.
        </h3>
        <h3>
          <AiOutlineCheck /> משטח מישורי
        </h3>
        <h3>
          <AiOutlineCheck /> כולם נמצאים מאחורי המטיס
        </h3>
        <h3>
          <AiOutlineCheck /> גב הרחפן כלפי המטיס
        </h3>
        <h3>
          <AiOutlineCheck /> מצלמה למעלה
        </h3>
        <p>חמשת הדגשים</p>
      </CheckCard>
    </div>
  );
};

export default Checks;
