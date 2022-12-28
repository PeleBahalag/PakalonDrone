import { useContext, useState, useEffect } from "react";
import Context from "../../store/context";
import AirCoord from "./air coordination/AirCoord";
import BattleProcedure from "./battle procedure/BattleProcedure";
import Checks from "./checks/Checks";
import HighlightsPage from "./highlights/HighlightsPage";
import Safety from "./safety/Safety";

const SectionHandler = (props) => {
  const ctx = useContext(Context);

  useEffect(() => {
    window.scrollTo(0, 0);
    setPage(Number(ctx.page));

    // eslint-disable-next-line
  }, [ctx.page]);

  const changePage = () => {
    window.location.href =
      "https://pelebahalag.github.io/droneParts/index.html";
  };

  const [page, setPage] = useState(ctx.page);
  return (
    <>
      {page === 0 && props.changePage(0)}
      {page === 1 && <HighlightsPage />}
      {page === 2 && <Checks />}
      {page === 3 && <AirCoord />}
      {page === 4 && <Safety />}
      {page === 5 && <h1>Loading...</h1> && changePage()}
      {page === 6 && <BattleProcedure />}
    </>
  );
};

export default SectionHandler;
