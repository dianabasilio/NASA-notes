import { MdPostAdd, MdMessage } from "react-icons/md";

import styles from "./Header.module.scss";

function Header({ onCreatePost }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <MdMessage />
        NASA Posts
      </h1>
      <p>
        <button className={styles.button} onClick={onCreatePost}>
          <MdPostAdd size={18} />
          Add new NASA Post
        </button>
      </p>
    </header>
  );
}

export default Header;
