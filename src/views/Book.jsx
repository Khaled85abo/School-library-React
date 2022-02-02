import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useStateContext } from "../context/StateContext";
const Book = () => {
  const { id } = useParams();
  const { books } = useStateContext();

  //   const book = useMemo(() => books[id], [books]);
  const book = books[id];
  return <div>{book.Title}</div>;
};

export default Book;
