import React from "react";

const Context = React.createContext({
  page: 0,
  updatePage: () => {},
});

export default Context;
