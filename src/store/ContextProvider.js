import React, { useState } from "react";
// import { useContext } from "react";
import Context from "./context";

const ContextProvider = (props) => {
  const [pageState, setPageState] = useState(0);
  // const pageCtx = useContext(Context);

  const updatePage = (updated) => {
    setPageState(updated);
  };

  const ctx = {
    page: pageState,
    updatePage: updatePage,
  };

  return <Context.Provider value={ctx}>{props.children}</Context.Provider>;
};

export default ContextProvider;
