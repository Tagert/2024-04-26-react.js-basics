import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <navbar className={styles.container}>
      <h1>Bailard Foundation</h1>

      <nav className={styles.navList}>
        <a href="#">About</a>
        <a href="#">News</a>
        <a href="#">Read Me</a>
        <a href="#">Take Action</a>
      </nav>
    </navbar>
  );
};

export { Navbar };
