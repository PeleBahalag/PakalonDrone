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

    if (page === 5) {
      window.location = "https://pelebahalag.github.io/droneParts/index.html";
    }
  }, [ctx.page]);

  const [page, setPage] = useState(ctx.page);
  return (
    <>
      {page === 1 && <HighlightsPage />}
      {page === 2 && <Checks />}
      {page === 3 && <AirCoord />}
      {page === 4 && <Safety />}
      {page === 4 && <Safety />}
      {page === 4 && <h2>Loading...</h2>}
      {page === 6 && <BattleProcedure />}
    </>
  );
};

export default SectionHandler;
