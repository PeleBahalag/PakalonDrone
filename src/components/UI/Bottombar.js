import classes from "./Bottombar.module.css";
import pele from "../../assets/פלא.png";

const Bottombar = () => {
  return (
    <footer className={classes.footer}>
      <hr></hr>
      <div className={classes.middleLogo}>
        <p>פותח על ידי</p>
        <img src={pele} alt="loading..." />
      </div>
    </footer>
  );
};

export default Bottombar;
