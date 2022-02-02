import { useStateContext } from "../context/StateContext";
import { useNavigate } from "react-router-dom";
import { BooksWrapper, StyledArticle } from "./Books.elements";
const Books = () => {
  const { books } = useStateContext();
  const navigate = useNavigate();
  const handleBookClicked = (index) => {
    console.log(index);
    navigate(`/book/${index}`);
  };
  return (
    <BooksWrapper>
      {books.map((book, index) => (
        <StyledArticle
          key={index}
          onClick={() => handleBookClicked(index)}
          index={index}
        >
          <div class="left-line"></div>
          <div>
            <p>{book.Title}</p>
            <p>{book.Author}</p>
          </div>
        </StyledArticle>
      ))}
    </BooksWrapper>
  );
};

export default Books;
