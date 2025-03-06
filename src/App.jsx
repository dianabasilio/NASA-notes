import { React, useState } from "react";
import PostList from "./components/PostList/PostList";
import Header from "./components/Header/Header";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const showModalHandler = () => {
    setModalIsVisible(true);
  };

  const hideModalHandler = () => {
    setModalIsVisible(false);
  };
  return (
    <>
      <Header onCreatePost={showModalHandler} />
      <main>
        <PostList isPosting={modalIsVisible} stopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
