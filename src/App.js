import { Routes, Route, Link } from "react-router-dom";
import { StateContextProvider } from "./context/StateContext";
import { StyledNav } from "./App.elements";
import Books from "./views/Books";
import Book from "./views/Book";
import Home from "./views/Home";
import About from "./views/About";
import GlobalStyles from "./globalStyles";

function App() {
  return (
    <StateContextProvider>
      <GlobalStyles />
      <StyledNav>
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/about">About</Link>
      </StyledNav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/about" element={<About />} />
        <Route path="/book/:id" element={<Book />} />
      </Routes>
    </StateContextProvider>
  );
}

export default App;
