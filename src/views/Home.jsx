import { useEffect } from "react";
import { useStateContext } from "../context/StateContext";
const Home = () => {
  const { fetchBooks, books } = useStateContext();

  useEffect(() => {
    console.log(books);
    if (!books) {
      fetchBooks();
    }
  }, []);

  return (
    <div>
      <h1>Books are fetch when component is mounted</h1>
    </div>
  );
};

export default Home;
