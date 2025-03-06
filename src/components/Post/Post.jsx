import React from "react";
import styles from "./Post.module.scss";

function Post(props) {
  return (
    <div className={styles.post}>
      <p>{props.author}</p>
      <p>{props.body}</p>
    </div>
  );
}

export default Post;
