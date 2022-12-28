import { useState, useContext } from "react";
import Context from "./store/context";

import DropdownBox from "./components/dropdown/DropdownBox";
import Title from "./components/main page/Title";
import Search from "./components/search/Search";
import SectionHandler from "./components/Sections/SectionHandler";
import Bottombar from "./components/UI/Bottombar";
import Topbar from "./components/UI/Topbar";
import Whitespace from "./components/UI/Whitespace";
import ContextProvider from "./store/ContextProvider";

function App() {
  const ctx = useContext(Context);
  const [searchBarOpened, setSearchBarOpened] = useState(false);
  const [subjectsOpened, setSubjectsBarOpened] = useState(false);
  const [page, setPage] = useState(ctx.page);

  const openSearch = () => {
    setSearchBarOpened(true);
    setSubjectsBarOpened(false);
  };
  const closeSearch = () => {
    setSearchBarOpened(false);
  };

  const changePage = (p) => {
    setPage(Number(p));
  };

  const toggleSubjects = () => {
    setSubjectsBarOpened(!subjectsOpened);
  };

  return (
    <ContextProvider>
      <Whitespace height={"6rem"} />
      <Topbar
        openSearch={openSearch}
        toggleSubs={toggleSubjects}
        isSubjectsOpened={subjectsOpened}
        changePage={changePage}
      />
      {subjectsOpened && (
        <DropdownBox closeDD={toggleSubjects} changePage={changePage} />
      )}
      {page === 0 && <Title changePage={changePage} />}
      {searchBarOpened && <Search closeSearch={closeSearch} />}
      {page !== 0 && <SectionHandler changePage={changePage} />}
      <Bottombar />
    </ContextProvider>
  );
}

export default App;
