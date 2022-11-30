import classes from "./Gif.module.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState } from "react";

const Gif = (props) => {
  const [loading, setLoading] = useState(true);
  const handleImageLoaded = () => {
    setLoading(false);
  };

  return (
    <div className={classes.screen}>
      {loading && <Skeleton height={200} baseColor="lightgray" />}
      <img
        onLoad={handleImageLoaded.bind(this)}
        className={classes.src}
        src={props.gif}
        alt=""
      />
    </div>
  );
};

export default Gif;
