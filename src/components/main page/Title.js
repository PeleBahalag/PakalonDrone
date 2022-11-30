import Gif from "./Gif";
import classes from "./Title.module.css";

import pic1 from "../../assets/pic1.gif";
import pic2 from "../../assets/pic2.gif";
import Subjects from "./Subjects";
import Paragraph from "./Paragraph";
import { useContext, useEffect } from "react";
import Context from "../../store/context";

const Title = (props) => {
  const ctx = useContext(Context);

  useEffect(() => {
    props.changePage(ctx.page);
    // eslint-disable-next-line
  }, [ctx.page]);

  return (
    <div className={classes.title}>
      <h1>פק"ל כיס רחפן</h1>
      <h2>Mavic Pro</h2>
      <Gif gif={pic1} />
      <Subjects group={"group1"} />
      <Gif gif={pic2} />
      <Subjects group={"group2"} />
      <Paragraph />
    </div>
  );
};

export default Title;
