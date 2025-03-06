import React from "react";
import styles from "./Post.module.scss";

function Post({ author, body, urlImage }) {
  return (
    <li className={styles.post}>
      <img src={urlImage} alt={urlImage} />
      <p className={styles.author}>{author}</p>
      <p className={styles.text}>{body}</p>
    </li>
  );
}

export default Post;
