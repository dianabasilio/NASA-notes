import { React, useState } from "react";
import styles from "./NewPost.module.scss";

export default function NewPost({ onCancel, onAddPost }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const bodyChaneHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const authorChaneHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };

    onAddPost(postData);
    onCancel();
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body"> Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={bodyChaneHandler}
          value={enteredBody}
        ></textarea>
      </p>
      <p>
        <label htmlFor="name"> Your name</label>
        <textarea id="name" required onChange={authorChaneHandler}></textarea>
      </p>
      <p className={styles.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}
