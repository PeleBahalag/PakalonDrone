import { useContext, useState, useEffect } from "react";
import Context from "../../store/context";
import Checks from "./checks/Checks";
import HighlightsPage from "./highlights/HighlightsPage";

const SectionHandler = (props) => {
  const ctx = useContext(Context);

  useEffect(() => {
    window.scrollTo(0, 0);
    setPage(Number(ctx.page));
  }, [ctx.page]);

  const [page, setPage] = useState(ctx.page);
  return (
    <>
      {page === 1 && <HighlightsPage />}
      {page === 2 && <Checks />}
    </>
  );
};

export default SectionHandler;
