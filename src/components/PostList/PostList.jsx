import { React, useState } from "react";
import Post from "../Post/Post";
import NewPost from "../NewPost/NewPost";
import Modal from "../Modal/Modal";
import styles from "./PostList.module.scss";

export default function PostList({ isPosting, stopPosting }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const bodyChaneHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const authorChaneHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };
  return (
    <>
      {isPosting && (
        <Modal onClose={stopPosting}>
          <NewPost
            onBodyChange={bodyChaneHandler}
            onAuthorChange={authorChaneHandler}
          ></NewPost>
        </Modal>
      )}

      <ul className={styles.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Lau" body="Romantic date today" />
      </ul>
    </>
  );
}
