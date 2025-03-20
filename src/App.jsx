import { React, useState } from "react";
import PostList from "./components/PostList/PostList";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";

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
        <Routes>
          <Route
            path="/"
            element={
              <PostList
                isPosting={modalIsVisible}
                onStopPosting={hideModalHandler}
              />
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
