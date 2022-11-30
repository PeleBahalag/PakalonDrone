import classes from "./Gif.module.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState } from "react";

const Gif = (props) => {
  const [loading, setLoading] = useState(true);
  const [style, setStyle] = useState({ display: "none" });
  const handleImageLoaded = () => {
    setLoading(false);
    setStyle({ display: "block" });
  };

  return (
    <div className={classes.screen}>
      {loading && <Skeleton height={200} baseColor="rgb(184, 184, 184)" />}
      <img
        onLoad={handleImageLoaded}
        className={classes.src}
        src={props.gif}
        alt=""
        style={style}
      />
    </div>
  );
};

export default Gif;
