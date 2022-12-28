import { useState, useReducer, useRef, useContext } from "react";
import { ImSearch } from "react-icons/im";
import { RiCloseFill } from "react-icons/ri";
import { FaRegLightbulb } from "react-icons/fa";
import { MdOutlineSubject } from "react-icons/md";
import Context from "../../store/context";

import Card from "../UI/Card";
import classes from "./Search.module.css";

const Search = (props) => {
  const [answerShown, setAnswerShown] = useState(false);
  const [text, setText] = useState("");
  const inputElement = useRef();

  const subjects = {
    0: ["בית", "פתיחה", "ch,"],
    1: ["דגש", "sda", "אפליקציה", "הגדרות"],
    2: ["בדיקות", "בדיקה", "חובה", "csheu,", "ucv", "צקליסט", "צ'ק", "todo"],
    3: ["תיאום", "אויר", "אוויר", "סגירה", "tuuhr", "tuuhr", ",htuo"],
    4: ["בטיחות", "cyhju,"],
    5: ["מבנה", "לומדה", "לומדת", "חלקי", "ncbv", "kunsv", "jkeh"],
    6: ["נוהל", "קרב", 'נוה"ק', "נוהק", "נוה'ק", "buve", "buvk", "erc"],
  };

  const answers = {
    0: {
      question: ["חמשת הדגשים", "חמש", "חמשת"],
      answerText: (
        <>
          <h1 className={classes.header}>מה הם חמשת הדגשים?</h1>
          <p className={classes.paragraph}>
            נקי ממכשולים, מתכות, מגנטים ואנשים ברדיוס של 10 מטר.
            <br />
            משטח מישורי
            <br />
            כולם נמצאים מאחורי המטיס
            <br />
            גב הרחפן כלפי המטיס
            <br />
            מצלמה למעלה
          </p>
        </>
      ),
    },
    1: {
      question: ["רוח", "מהירות רוח"],
      answerText: (
        <>
          <h1 className={classes.header}>צריך לבדוק שמהירות הרוח לא עולה על</h1>
          <p className={classes.paragraph}>15 קשר/ 27 קמ"ש</p>
        </>
      ),
    },
    2: {
      question: [
        "מחברים פרופלורים",
        "מחברים פלופלורים",
        "חיבור פרופלורים",
        "חיבור פלופלורים",
        "פלופלורים",
        "פרופלורים",
      ],
      answerText: (
        <>
          <h1 className={classes.header}>כיצד נחבר פרופלורים?</h1>
          <p className={classes.paragraph}>
            שחור לשחור לבן ללבן, מחוברים היטב בלי שברים וסדקים.
          </p>
        </>
      ),
    },
    3: {
      question: ["סוללה"],
      answerText: (
        <>
          <h1 className={classes.header}>דגשים לסוללה</h1>
          <p className={classes.paragraph}>
            מלאה, לא שבורה/סדוקה/נפוחה/חמה או קרה מדיי, מוכנסת עד הסוף- נעולה
            ולא משוחררת.
          </p>
        </>
      ),
    },
    4: {
      question: ["כרטיס", "זיכרון"],
      answerText: (
        <>
          <h1 className={classes.header}>מה צריך לבדוק בכרטיס הזיכרון</h1>
          <p className={classes.paragraph}>
            לוודא המצאות כרטיס זיכרון ריק, לוודא שאנו על RC ולא על WI-Fi
          </p>
        </>
      ),
    },
    5: {
      question: ['פק"ל', "פקל"],
      answerText: (
        <>
          <p className={classes.paragraph}>
            יש לוודא שכלל רכיבי הפק"ל תקינים וטעונים.
          </p>
        </>
      ),
    },
    6: {
      question: ["מסדר פרוס", "פרוס"],
      answerText: (
        <>
          <h1 className={classes.header}>מסדר פרוס</h1>
          <p className={classes.paragraph}>
            נבצע מסדר פרוס בו ישמש את הרחפן ונטיס אותו בגובה נמוך ע"מ לוודא שהכל
            עובד כמו שצריך, כמו כן יש לדווח לגוף הרלוונטי בחיל האוויר על המראת
            הרחפן.
          </p>
        </>
      ),
    },
    7: {
      question: ["הדלקה"],
      answerText: (
        <p className={classes.paragraph}>
          קודם נדליק את השלט ואז את הרחפן על מנת שנוכל לשלוט ברחפן.
        </p>
      ),
    },
    8: { question: [], answerText: "" },
    9: { question: [], answerText: "" },
    10: { question: [], answerText: "" },
    11: { question: [], answerText: "" },
    12: { question: [], answerText: "" },
  };

  const ctx = useContext(Context);
  const [tabClass, setTabClass] = useState(
    `${classes.tab} ${classes.slideAnim}`
  );
  const close = (event) => {
    setTabClass(`${classes.tab} ${classes.slideAnimRev}`);
    setTimeout(() => {
      props.closeSearch();
      setAnswerShown(false);
      setText("");
    }, 300);
  };

  const openPage = (page) => {
    window.scrollTo(0, 0);
    ctx.updatePage(page);
  };

  const inputReducer = (state, action) => {
    for (let i = 0; i < Object.keys(subjects).length; i++) {
      for (let j = 0; j < subjects[i].length; j++) {
        if (action.value.includes(subjects[i][j])) {
          openPage(i);
          close();
          return;
        }
      }
    }
    for (let i = 0; i < Object.keys(answers).length; i++) {
      for (let j = 0; j < answers[i].question.length; j++) {
        if (action.value.includes(answers[i].question[j])) {
          setText(answers[i].answerText);
          setAnswerShown(true);
          inputElement.current.value = "";
        }
      }
    }

    console.log(action);
  };

  const [inputFunc, dispatchInputFunc] = useReducer(inputReducer, {
    value: "",
  });

  const focusInput = () => {
    inputElement.current.focus();
    dispatchInputFunc({
      value: inputElement.current.value,
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      focusInput();
    }
  };

  return (
    <div className={tabClass}>
      <RiCloseFill size="40" onClick={close} className={classes.x} />
      <section className={classes.searchBar}>
        <h1>לא מוצאים משהו?</h1>
        <textarea
          className={classes.bar}
          ref={inputElement}
          onKeyDown={handleKeyDown}
        />
        <div className={classes.iconSearch} onClick={focusInput}>
          <ImSearch size="22" />
        </div>
        {!answerShown && <p>מה תוכלו לחפש בפק"לון</p>}
        {answerShown && <Card>{text}</Card>}
        {!answerShown && (
          <>
            <Card>
              <h1 className={classes.header}>
                <FaRegLightbulb />
                עובדות יבשות
              </h1>
              <p className={classes.paragraph}>
                מהי המהירות המקסימאלית של הרחפן?
              </p>
            </Card>
            <Card>
              <h1 className={classes.header}>
                <MdOutlineSubject />
                נושאים
              </h1>
              <p className={classes.paragraph}>בטיחות ברחפן</p>
            </Card>
          </>
        )}
      </section>
    </div>
  );
};

export default Search;
