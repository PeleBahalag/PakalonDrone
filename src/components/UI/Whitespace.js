import classes from "./Whitespace.module.css";

const Whitespace = (props) => {
  const height = props.height;
  return (
    <div style={{ height: `${height}` }} className={classes.whitespace}></div>
  );
};

export default Whitespace;
