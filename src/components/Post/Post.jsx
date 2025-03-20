import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "./Post.module.scss";

function Post({ author, body, urlImage }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <li className={styles.post}>
      <img src={urlImage} alt={urlImage} />
      <p className={styles.author}>{author}</p>
      <p className={styles.text}>{body}</p>
      <button className={styles.likeButton} onClick={handleLike}>
        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </button>
    </li>
  );
}

export default Post;
