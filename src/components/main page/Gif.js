import classes from "./Gif.module.css";

const Gif = (props) => {
  return (
    <div className={classes.screen}>
      <img className={classes.src} src={props.gif} alt="loading..." />
    </div>
  );
};

export default Gif;
