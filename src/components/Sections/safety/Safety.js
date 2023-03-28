import classes from "./Safety.module.css";
import {
  MdVerified,
  MdNightlightRound,
  MdWater,
  MdSensors,
  MdSettingsInputAntenna,
} from "react-icons/md";
import { FaTelegramPlane, FaPhoneAlt } from "react-icons/fa";
import {
  BsFillCloudHazeFill,
  BsSpeedometer2,
  BsBatteryFull,
  BsBatteryCharging,
} from "react-icons/bs";
import { CiTempHigh } from "react-icons/ci";
import { BsWifiOff } from "react-icons/bs";
import { GiDeliveryDrone, GiPathDistance } from "react-icons/gi";

const Safety = (props) => {
  return (
    <div className={classes.section}>
      <h1 className={classes.ttl}>בטיחות</h1>
      <div className={classes.grid}>
        <div className={classes.item}>
          <MdVerified size="50" className={classes.logo} />
          <p className={classes.text}>
            המראת הכלי ותפעולו תבוצע אך וררק על ידי מי שהוסמך ואושר לכך שמית ע"י
            ביסל"ק
          </p>
        </div>
        <div className={classes.item}>
          <FaTelegramPlane size="50" className={classes.logo} />
          <p className={classes.text}>
            מי שהוכשר להטיס רחפן מאביק פרו יכול להטיס רק את הרחפן מאביק פרו
          </p>
        </div>
        <div className={classes.item}>
          <FaPhoneAlt size="50" className={classes.logo} />
          <p className={classes.text}>
            חל איסור להטיס את הרחפן ללא תיאום אווירי!
          </p>
        </div>
        <div className={classes.item}>
          <BsFillCloudHazeFill size="50" className={classes.logo} />
          <p className={classes.text}>
            סגירה אווירית עד גובה של לפחות 1000 רגל מעל פני השטח וברדיוס של
            לפחות 1 ק"מ מעבר לאזור הטיסה המיועד.
          </p>
        </div>
        <div className={classes.item}>
          <BsSpeedometer2 size="50" className={classes.logo} />
          <p className={classes.text}>
            אין להטיס את הכלי המהירות רוח של עד 15 קשר (27.78 קמ"ש) בגשר, בשלג,
            תנאי ראות קשים או ממקומות סבוכים.
          </p>
        </div>
        <div className={classes.card}>
          <p>
            יש לשים לב שמהירות הרוח שנמדוד בקרקע נמוכה מהמהירות שתהיה למעלה
            באוויר- כך שיש להפעיל שיקול דעת!
          </p>
        </div>
        <div className={classes.item}>
          <MdNightlightRound size="50" className={classes.logo} />
          <p className={classes.text}>
            אין להטיס את הרחפן בלילה- אלא באישור אל"מ לצורך מבצעי בלבד.
          </p>
        </div>
        <div className={classes.item}>
          <CiTempHigh size="50" className={classes.logo} />
          <p className={classes.text}>
            אין להפעיל את הרחפן בטמפרטורה של מעל 40 מעלות ומתחת ל-15
          </p>
        </div>
        <div className={classes.item}>
          <BsBatteryFull size="50" className={classes.logo} />
          <p className={classes.text}>
            במידה ונדרש להטיס את הרחפן בטמפרטורה הקרובה ל-15 מעלות נדרש להביא את
            הסוללה לטמפרטורת החדר טרם הכנסתה לרחפן- בכדי למנוע קריאה שגויה של
            אחוז הסוללה.
          </p>
        </div>
        <div className={classes.item}>
          <BsBatteryCharging size="50" className={classes.logo} />
          <p className={classes.text}>
            אין להשתמש בסוללה הטעונה מתחת ל- 90% עקב תוחלת חיי הסוללה. יש להתחיל
            להשתמש בסוללות במלואן ולהפסיק עד 30% (על מנת לא להגיע לשלב הסוללה
            הקריטית).
          </p>
        </div>
        <div className={classes.item}>
          <MdWater size="50" className={classes.logo} />
          <p className={classes.text}>
            אין להטיס את הרחפן מעל טקסטורה אחידה (לדוג' מים/דשא) לזמן ממושך,
            מכיוון שהרחפן עלול לאבד את ה-GPS
          </p>
        </div>
        <div className={classes.item}>
          <BsWifiOff size="50" className={classes.logo} />
          <p className={classes.text}>
            יש לוודא שהרחפן מכוונן למצב RC ולא למצב Wi-Fi .
          </p>
        </div>
        <div className={classes.item}>
          <GiDeliveryDrone size="50" className={classes.logo} />
          <p className={classes.text}>
            טרם ההטסה יש להסיר את כיסוי המצלמה ולהסיר את תפס הגימבל.
          </p>
        </div>
        <div className={classes.item}>
          <MdSensors size="50" className={classes.logo} />
          <p className={classes.text}>
            יש לוודא שכל החיישנים מופעלים באפליקציה.
          </p>
        </div>
        <div className={classes.item}>
          <GiPathDistance size="50" className={classes.logo} />
          <p className={classes.text}>
            טרם ההטסה יש לנתח את מסלול הטיסה בדגש על היעדר אנשים ומכשולים או
            לחילופין, הטיסה תבוצע תוך הקפדה על קיום קשר עין רציף בין המפעיל
            (המטיס או תצפיתך) לרחפן.
          </p>
        </div>
        <div className={classes.item}>
          <MdSettingsInputAntenna size="50" className={classes.logo} />
          <p className={classes.text}>
            לא פותחים נק' גישה לטאבלט!- אם אין תצ"א יש לשלוח את הרחפן למש"א.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Safety;
