import styles from "./Header.module.css";
import { Navbar } from "./Navbar/Navbar.jsx";
import { Hero } from "./Hero/Hero.jsx";

const Header = () => {
  return (
    <header className={styles.container}>
      <Navbar />

      <Hero />
    </header>
  );
};

export { Header };
