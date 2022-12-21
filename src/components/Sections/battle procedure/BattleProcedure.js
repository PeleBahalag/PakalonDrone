import classes from "./BattleProcedure.module.css";

import { GoPin, GoAlert } from "react-icons/go";
import { GiStopSign, GiCrossroad, GiBookCover } from "react-icons/gi";
import { FaMountain, FaCarCrash } from "react-icons/fa";
import { TbBarrierBlock } from "react-icons/tb";

const BattleProcedure = (props) => {
  return (
    <div className={classes.section}>
      <h1>נוה"ק</h1>
      <p>
        מהווה אסטרטגיה צבאית לפיה מתכננים ומבצעים מלחמה או משימה צבאית אחרת.
        ניתוח ומיפוי שטח הוא השלב הראשון בנוה"ק הנעשה באמצעות לימוד השטח דרך 8
        שלבים:
      </p>
      <section className={classes.flex}>
        <div className={classes.item}>
          <GoPin className={classes.logo} size={55} />
          <h1 className={classes.number}>1</h1>
          <p>
            הגדרת יעד -לכל פעולה או יציאה למשימה יש מטרה העומדת מאחוריה. היעד
            הוא המקום שאליו אגיע עם הרחפן למען השגת המטרה.
          </p>
        </div>
        <div className={classes.item}>
          <GiStopSign className={classes.logo} size={55} />
          <h1 className={classes.number}>2</h1>
          <p>
            נקודות מוגבלות- אזורים אסורים לכניסה: למען קביעת מסלול טיסה אידיאלי
            של הרחפן יש לזהות ולסמן נקודות המגבילות את הטיסה ועלולות להקשות על
            ביצוע המשימה כגון: שדות תעופה, שטח אדום. בתי סוהר וכו'.
          </p>
        </div>
        <div className={classes.item}>
          <GoAlert className={classes.logo} size={55} />
          <h1 className={classes.number}>3</h1>
          <p>
            מכשול: גורם מפר מצב/דבר המקשה להגיע למטרה. ישנם מספר סוגי מכשולים:
            טבעיים- מכשול שמקורו בטבע כמו הרים או גבעות. ישפיע על קביעת נקי
            ההמראה. מלאכותיים- מכשולים שהם מעשי ידי אדם כמו מבנים וחומות. טכניים
            -מכשול שמקורו מעשה ידי אדם ובעל השפעה ברמה פיזית וברמה טקטית. לדוגמה
            אנטנות: משפיע על קליטת הרחפן- עלול לשבש את השליטה בו. מכוונים-
            מכשילים/איומים מכוונים (כוח מפגע) יחיד או קבוצה של אנשים שמטרתם
            פגיעה בכוחותינו. משפיע על צורת השימוש ברחפן. בזיהוי מכשול אויב מכוון
            ותאים את מסלול ההטסה לצורך המשתנה בהתאם לאיום.
          </p>
        </div>
        <div className={classes.item}>
          <FaMountain className={classes.logo} size={55} />
          <h1 className={classes.number}>4</h1>
          <p>
            נקודות המראה ונחיתה: נקודה ברדיום הטיסה, נקבעת לפי מרחק הטיסה
            המאושר. נקבע אותה לפי הקריטריונים הבאים: *נקודה מישורית- המראה
            ונחיתה במקום יציב. * נקודה גבוהה- שיפור קליטת הלווינים. *נקודה
            חבויה- (בעלת ערך טקטי) לכוח. נקודה שחפה מעצמים בולטים-מניעת התנגשות
            והרס הרחפן. נקודה שחפה מעצמים מתכתיים-עצמים אלה עלולים לשבש את
            השליטה ברחפן.
          </p>
        </div>
        <div className={classes.item}>
          <GiCrossroad className={classes.logo} size={55} />
          <h1 className={classes.number}>5</h1>
          <p>בחירת מסלול טיסה</p>
        </div>
        <div className={classes.item}>
          <TbBarrierBlock className={classes.logo} size={55} />
          <h1 className={classes.number}>6</h1>
          <p>גבולות ברבור</p>
        </div>
        <div className={classes.item}>
          <GiBookCover className={classes.logo} size={55} />
          <h1 className={classes.number}>7</h1>
          <p>סיפור דרך</p>
        </div>
        <div className={classes.item}>
          <FaCarCrash className={classes.logo} size={55} />
          <h1 className={classes.number}>8</h1>
          <p>
            מקת"גים- מקרים ותגובות, הגדרת מקרים אופציונלים (כגון: התרסקות רחפן ,
            איבוד קליטה, השתלטות חיצונית וכו') ותגובת המטיס למקרה.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BattleProcedure;
