import classes from "./Gif.module.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Gif = (props) => {
  return (
    <div className={classes.screen}>
      <img
        className={classes.src}
        src={props.gif}
        alt={<Skeleton height={200} baseColor="lightgray" />}
      />
    </div>
  );
};

export default Gif;
