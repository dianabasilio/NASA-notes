import React, { useContext } from "react";
import Post from "../Post/Post";
import NewPost from "../NewPost/NewPost";
import Modal from "../Modal/Modal";
import styles from "./PostList.module.scss";
import { PostsContext } from "../../store/PostsContext";

export default function PostList({ isPosting, onStopPosting }) {
  const { posts, addPost } = useContext(PostsContext);

  return (
    <>
      {isPosting && (
        <Modal>
          <NewPost onCancel={onStopPosting} onAddPost={addPost} />
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
              isFavorite={post.isFavorite}
              index={index}
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
