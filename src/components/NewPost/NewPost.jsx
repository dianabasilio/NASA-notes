import { React } from "react";
import styles from "./NewPost.module.scss";

export default function NewPost(props) {
  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body"> Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={props.onBodyChange}
        ></textarea>
      </p>
      <p>
        <label htmlFor="name"> Your name</label>
        <textarea id="name" required onChange={props.onAuthorChange}></textarea>
      </p>
    </form>
  );
}
