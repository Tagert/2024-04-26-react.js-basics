import styles from "./Main.module.css";
import { CardWrapper } from "./CardWrapper/CardWrapper.jsx";

const Main = () => {
  return (
    <main className={styles.container}>
      <CardWrapper />
    </main>
  );
};

export { Main };
