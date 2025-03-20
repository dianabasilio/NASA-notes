import { MdPostAdd, MdMessage } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header({ onCreatePost }) {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <MdMessage />
        NASA Posts
      </Link>

      <div className={styles.buttons}>
        <Link to="/favorites" className={styles.button}>
          favorites
        </Link>
        <Link to="/" className={styles.button} onClick={onCreatePost}>
          <MdPostAdd size={18} />
          new NASA Post
        </Link>
      </div>
    </header>
  );
}

export default Header;
