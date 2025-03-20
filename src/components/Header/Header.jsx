import { MdPostAdd, MdMessage } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header({ onCreatePost }) {
  return (
    <header className={styles.header}>
      <Link to="/favorites" className={styles.logo}>
        <MdMessage />
        NASA Posts
      </Link>

      <div className={styles.buttons}>
        <Link to="/favorites" className={styles.button}>
          Favorites
        </Link>
        <Link to="/" className={styles.button} onClick={onCreatePost}>
          <MdPostAdd size={18} />
          Add new NASA Post
        </Link>
      </div>
    </header>
  );
}

export default Header;
