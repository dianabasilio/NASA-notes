import { React, useState } from "react";
import Post from "../Post/Post";
import NewPost from "../NewPost/NewPost";
import Modal from "../Modal/Modal";
import styles from "./PostList.module.scss";

export default function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  const addPostHandler = (postData) => {
    //To ensure to get the last state
    setPosts((prevPosts) => [...prevPosts, postData]);
  };
  return (
    <>
      {isPosting && (
        <Modal>
          <NewPost
            onCancel={onStopPosting}
            onAddPost={addPostHandler}
          ></NewPost>
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post, index) => (
            <Post
              key={index}
              author={post.author}
              body={post.body}
              urlImage={post.urlImage}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div className={styles["no-posts"]}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}
