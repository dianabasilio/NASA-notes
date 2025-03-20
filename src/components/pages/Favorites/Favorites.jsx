import React, { useContext } from "react";
import Post from "../../Post/Post";
import { PostsContext } from "../../../store/PostsContext";
import styles from "./Favorites.module.scss";

const Favorites = () => {
  const { posts } = useContext(PostsContext);
  const favoritePosts = posts.filter((post) => post.isFavorite);

  return (
    <div>
      <h1>Favorite Posts</h1>
      {favoritePosts.length > 0 && (
        <ul className={styles.posts}>
          {favoritePosts.map((post, index) => (
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
    </div>
  );
};

export default Favorites;
