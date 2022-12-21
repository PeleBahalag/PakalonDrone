import { useState } from "react";
import Picker from "../../UI/Picker";
import classes from "./HighlightsPage.module.css";

import imgApp from "../../../assets/application.jpg";
import Button from "../../UI/Button";
import Whitespace from "../../UI/Whitespace";

const HighlightsPage = () => {
  const TEXT_BEFORE1 = {
    0: "גובה טיסה מקסימלי. ",
    1: "טווח טיסה מקסימלי. ",
    2: 'גובה RTH ע"י גובה מנקה - (העצם הכי גבוה בשטח+20 מטר)',
    3: 'ברמ"ח באובדן קליטה-חזרה הביתה  (הגדרות רחפן RC signal lost-advanced settings-o) ',
    4: "לוודא שכל החיישנים מופעלים בהגדרות חיישן. ",
    5: "סוללה נמוכה 30%-50% ",
    6: "סוללה קריטית 10% ",
    7: "הפרשי תאים בין הסוללות, לא יותר מ0.03 ",
    8: "כיול מצפך- נבצע כל פעם שנמצאים בעמדה חדשה בשינוי נקודת ההמראה ביוונר מ 100 מ'. Calibrate- Compass- Sensor State נבצע סיבוב של 360 מעלות כאשר הרחפן מאוזן, עד שנורית החיווי של הרחפן תפסיק להבהב בצהוב ותתחלף לירוקה קבועה. לאחר מכן נבצע סיבוב נוסף כאשר הרחפן מאונך לרצפה(מצלמה כלפי מטה)עד שנורית החיווי תהבהב  בצבע ירוק.  ייתכנו הפרעות בכיול אם באזור יש ברזל או מתכות, במצב כזה יש לשנות את מיקום הרחפן בכמה מטרים.",
  };

  const TEXT_BEFORE2 = {
    0: 'וידוא כלל רכיבי הפק"ל תקינים וטעונים.',
    1: "וידוא שכרטיס הזיכרון מחוק ועבר פירמוט.",
    2: 'ביצוע מסדר פרוס בו ישמש את הרחפן ונטיס אותו בגובה נמוך ע"מ לוודא שהכל עובד כמו שצריך, כמו כן יש לדווח לגוף הרלוונטי בחיל האוויר על המראת הרחפן.',
    3: `יש לדווח לכוחות השת"פ הנמצאים בשטח (חמ"ל תצפית וכו') על המראה ונחיתה ולוודא כי ידוע לכולם מיקום הרחפן.`,
    4: "ניהול קרב",
    5: "דיווח על המראה ונחיתה לגורמים הנמצאים באזור",
  };

  const TEXT_DURING1 = {
    0: "לוודא שסוללת הרחפן מוכנסת עד הסוף (שנשמע קליק)- שלא תשתחרר במהלך ההטסה.",
    1: "קודם נדליק את השלט ואז את הרחפן על מנת שנוכל לשלוט ברחפן.",
    2: 'כאשר מעלים את הרחפן לאוויר יש בדיקות מערכת (בד"מ) על מנת לבדוק שהרחפן מתפקד כמו שצריך וזז/מסתובב לכל הכיוונים.',
    3: "בין עמדת מטיס אחת לשנייה חובה מרחק של לפחות 50 מ'.",
    4: "לפני ההמראה יש לוודא את הדברים הבאים: 4 גומיות תקינות ובמקום, סוללות טעונות בכל האמצעים, כרטיס זיכרון ריק מתוכן, פרופלורים תקינים. מצב RC ולא WIFI.",
    5: "בהכנות להטסה ובמהלך ההטסה השלט יימצא תמיד אצל המטיס, רק המטיס ידליק ויכבה את הרחפן.",
    6: "לפני ההמראה יש לוודא שאנו על מצב P-GPS ושיש לנו 7 לוויינים. במידה ונסטה ממצב זה במהלך ההטסה יש להתחיל להתקרב לכיווננו עד לחזרת הGPS.",
    7: `הרחפן יטוס לגובה של לא יותר מ120 מ' ו למרחק של לא יותר מ 1.8 ק"מ בהתחשב בתיאום האווירי.`,
    8: "בכל הטסה חייב להיות תצפיתן ותפקידו לשמור ככל האפשר על קשר עין עם הרחפן",
    9: "על אף השימוש במערכת המונעת ממכשולים אין להסתמך עליה לחלוטין שכן היא לא מזהה כבלים, וכמו כן עצמים שהיא לא קולטת במדויק מולם/עצמים שקופים/וכו.",
    10: "בזמן תנועה לא נמצא במצב זום על מנת שלא נאבד את הפרספקטיבה.",
  };

  const TEXT_DURING2 = {
    0: "אסור להוסיף מטען נוסף על גבי הרחפן.",
    1: 'קטן מפנה לגדול- כאשר נזהה במרחב האווירי שלנו, או לחילופין נקבל מידע על כלי טיס מסוג כלשהו, יש חובה שננמיך טוס (על מנת לפנות לו את המרחב האווירי) במידת הצורך ננחית את הרחפן, ונדווח ליב"א.',
    2: "חל איסור לבצע את פעולת הפעלת המנועים בזמן שהרחפן באוויר- המהלך עלול להוביל לכיבוי המנועים באוויר. הרחפן יכבה את המנועים כשיגיע לקרקע!",
    3: "חל איסור להטיס מעל אנשים ובסיסים.",
  };

  const TEXT_AFTER1 = {
    0: `הרחפן הינו אזרחי. אין לחבר אותו, את חלקיו ואת כרטיס הזיכרון למחשב צה''לי. דבר זה יגרום לעבירת ביימ, אין להשתמש בטלפון אזרחי עם הרחפן.`,
    1: "אין לעדכן גרסה באפליקציה, זו אחריות החברה בלבד, ע״י משייא 7000",
    2: "במידה והרחפן התרסק או נפל לא נטיס אותו עד שיעבור בדיקה מקיפה (ע״י טכנאי בבסיס שעבר הכשרה/ ע״י מש״א).",
    3: "בסיום כל פעילות נמלא דרייר טיסה.",
    4: "יש להימנע מאחסון סוללות במכולות, רכבים או כל אמצעי אחסון היכול להגיע לטמפרטורה הגבוהה מ40 מעלות, סוללה חמה לאחר פעילות לא תיטען- יש להניח לה להתקרר מעט,לאחר מספר הימים שהגדרנו הסוללה תפרוק עצמה, תתחמם ועלולה להתלקח. לכך, אם אין בה שימוש במשך זמן זה, נותיר אותה פרוקה או נניח אותה במקום בו היא לא תתחמם.",
    5: `אין להוציא סוללה או כרטיס זיכרון כשהרחפן דולק, גריסת הסוללות תיעשה באמצעות וועדת פסילה במש״א 7000 בלבד.  
    אין לחבר או להטעין סוללות מנוקבות או סוללות החשודות כתקולות.
    יש לטעון את כלל הסוללות והאמצעים השונים לקראת הפעילות הבאה.
    `,
  };

  const [chosenSubject, setChosenSubject] = useState([true, false, false]);

  const [activeBtnIndex, setActiveBtnIndex] = useState({
    before1: 0,
    before2: 0,
  });

  const changeSubject = (activatedArray) => {
    setChosenSubject(activatedArray);
    setActiveBtnIndex({ before1: 0, before2: 0 });
  };

  const buttonClickHandler1 = (index) => {
    setActiveBtnIndex({ before1: index, before2: activeBtnIndex.before2 });
  };

  const buttonClickHandler2 = (index) => {
    setActiveBtnIndex({ before1: activeBtnIndex.before1, before2: index });
  };

  // useState()

  const before = (
    <div>
      <h1>הגדרות באפליקציה</h1>
      <img src={imgApp} alt="loading..." />
      <p>{TEXT_BEFORE1[activeBtnIndex.before1]}</p>
      <div className={classes.btnGrid}>
        <Button
          activeIndex={activeBtnIndex}
          section={1}
          index={0}
          clickHandler={buttonClickHandler1}
        >
          גובה טיסה מקסימאלי
        </Button>
        <Button
          activeIndex={activeBtnIndex}
          section={1}
          index={1}
          clickHandler={buttonClickHandler1}
        >
          טווח טיסה מקסימאלי
        </Button>
        <Button
          activeIndex={activeBtnIndex}
          section={1}
          index={2}
          clickHandler={buttonClickHandler1}
        >
          גובה RTH
        </Button>
        <Button
          activeIndex={activeBtnIndex}
          section={1}
          index={3}
          clickHandler={buttonClickHandler1}
        >
          ברמ"ח באובדן קליטה
        </Button>
        <Button
          activeIndex={activeBtnIndex}
          section={1}
          index={4}
          clickHandler={buttonClickHandler1}
        >
          חיישנים
        </Button>
        <Button
          activeIndex={activeBtnIndex}
          section={1}
          index={5}
          clickHandler={buttonClickHandler1}
        >
          סוללה נמוכה
        </Button>
        <Button
          activeIndex={activeBtnIndex}
          section={1}
          index={6}
          clickHandler={buttonClickHandler1}
        >
          סוללה קריטית
        </Button>
        <Button
          activeIndex={activeBtnIndex}
          section={1}
          index={7}
          clickHandler={buttonClickHandler1}
        >
          הפרשי תאים בסוללות
        </Button>
        <Button
          activeIndex={activeBtnIndex}
          section={1}
          index={8}
          clickHandler={buttonClickHandler1}
        >
          כיול מצפן
        </Button>
      </div>
      <h1>דגשים מעשיים</h1>
      <p className={classes.paragraphNormal}>
        {TEXT_BEFORE2[activeBtnIndex.before2]}
      </p>
      <div className={classes.btnGrid}>
        <Button
          activeIndex={activeBtnIndex}
          section={2}
          index={0}
          clickHandler={buttonClickHandler2}
        >
          פק"ל
        </Button>
        <Button
          activeIndex={activeBtnIndex}
          section={2}
          index={1}
          clickHandler={buttonClickHandler2}
        >
          כרטיס זיכרון
        </Button>
        <Button
          activeIndex={activeBtnIndex}
          section={2}
          index={2}
          clickHandler={buttonClickHandler2}
        >
          מסדר פרוס
        </Button>
        <Button
          activeIndex={activeBtnIndex}
          section={2}
          index={3}
          clickHandler={buttonClickHandler2}
        >
          סגירה אווירית
        </Button>
        <Button
          activeIndex={activeBtnIndex}
          section={2}
          index={4}
          clickHandler={buttonClickHandler2}
        >
          ניהו"ק
        </Button>
        <Button
          activeIndex={activeBtnIndex}
          section={2}
          index={5}
          clickHandler={buttonClickHandler2}
        >
          דיווח
        </Button>
      </div>
    </div>
  );

  const during = (
    <div>
      <p className={classes.paragraphNormal}>
        {TEXT_DURING1[activeBtnIndex.before1]}
      </p>
      <div className={classes.btnGrid}>
        <Button
          activeIndex={activeBtnIndex}
          section={1}
          index={0}
          clickHandler={buttonClickHandler1}
        >
          סוללה
        </Button>
        <Button
          activeIndex={activeBtnIndex}
          section={1}
          index={1}
          clickHandler={buttonClickHandler1}
        >
          הדלקה
        </Button>
        <Button
          activeIndex={activeBtnIndex}
          section={1}
          index={2}
          clickHandler={buttonClickHandler1}
        >
          בדיקת מערכות
        </Button>
        <Button
          activeIndex={activeBtnIndex}
          section={1}
          index={3}
          clickHandler={buttonClickHandler1}
        >
          מרחק עמדת מטיס
        </Button>
        <Button
          activeIndex={activeBtnIndex}
          section={1}
          index={4}
          clickHandler={buttonClickHandler1}
        >
          וידוא תקינות
        </Button>
        <Button
          activeIndex={activeBtnIndex}
          section={1}
          index={5}
          clickHandler={buttonClickHandler1}
        >
          המטיס
        </Button>
        <Button
          activeIndex={activeBtnIndex}
          section={1}
          index={6}
          clickHandler={buttonClickHandler1}
        >
          P-GPS
        </Button>
        <Button
          activeIndex={activeBtnIndex}
          section={1}
          index={7}
          clickHandler={buttonClickHandler1}
        >
          גובה ומרחק
        </Button>
        <Button
          activeIndex={activeBtnIndex}
          section={1}
          index={8}
          clickHandler={buttonClickHandler1}
        >
          תצפיתן
        </Button>
        <Button
          activeIndex={activeBtnIndex}
          section={1}
          index={9}
          clickHandler={buttonClickHandler1}
        >
          המנעות ממכשולים
        </Button>
        <Button
          activeIndex={activeBtnIndex}
          section={1}
          index={10}
          clickHandler={buttonClickHandler1}
        >
          מצב זום
        </Button>
        <h1>איסורים וחובות בהטסה</h1>
        <p className={classes.paragraphNormal}>
          {TEXT_DURING2[activeBtnIndex.before2]}
        </p>
        <div className={classes.btnGrid}>
          <Button
            activeIndex={activeBtnIndex}
            section={2}
            index={0}
            clickHandler={buttonClickHandler2}
          >
            מטען על הרחפן
          </Button>
          <Button
            activeIndex={activeBtnIndex}
            section={2}
            index={1}
            clickHandler={buttonClickHandler2}
          >
            הנמכת טוס
          </Button>
          <Button
            activeIndex={activeBtnIndex}
            section={2}
            index={2}
            clickHandler={buttonClickHandler2}
          >
            הפעלת מנועים
          </Button>
          <Button
            activeIndex={activeBtnIndex}
            section={2}
            index={3}
            clickHandler={buttonClickHandler2}
          >
            איסורי הטסה
          </Button>
        </div>
      </div>
    </div>
  );

  const after = (
    <div>
      <p className={classes.paragraphNormal}>
        {TEXT_AFTER1[activeBtnIndex.before1]}
      </p>
      <div className={classes.btnGrid}>
        <Button
          activeIndex={activeBtnIndex}
          section={1}
          index={0}
          clickHandler={buttonClickHandler1}
        >
          ב"מ
        </Button>
        <Button
          activeIndex={activeBtnIndex}
          section={1}
          index={1}
          clickHandler={buttonClickHandler1}
        >
          אפליקציה
        </Button>
        <Button
          activeIndex={activeBtnIndex}
          section={1}
          index={2}
          clickHandler={buttonClickHandler1}
        >
          התרסקות רחפן
        </Button>
        <Button
          activeIndex={activeBtnIndex}
          section={1}
          index={3}
          clickHandler={buttonClickHandler1}
        >
          דרייר טיסה
        </Button>
        <Button
          activeIndex={activeBtnIndex}
          section={1}
          index={4}
          clickHandler={buttonClickHandler1}
        >
          סוללה חמה
        </Button>
        <Button
          activeIndex={activeBtnIndex}
          section={1}
          index={5}
          clickHandler={buttonClickHandler1}
        >
          סוללה
        </Button>
      </div>
    </div>
  );

  return (
    <section className={classes.page}>
      <h1>דגשים</h1>
      <Picker changeSubject={changeSubject} />
      <div className={classes.section}>
        {chosenSubject[0] && before}
        {chosenSubject[1] && during}
        {chosenSubject[2] && after}
        <Whitespace height={"6rem"} />
      </div>
    </section>
  );
};

export default HighlightsPage;
