import React, { useContext } from "react";
import styles from "./Post.module.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { PostsContext } from "../../store/PostsContext";

function Post({ author, body, urlImage, isFavorite, index }) {
  const { toggleFavorite } = useContext(PostsContext);

  const handleLike = () => {
    toggleFavorite(index);
  };

  return (
    <li className={styles.post}>
      <img src={urlImage} alt={urlImage} />
      <p className={styles.author}>{author}</p>
      <p className={styles.text}>{body}</p>
      <button className={styles.likeButton} onClick={handleLike}>
        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </button>
    </li>
  );
}

export default Post;
