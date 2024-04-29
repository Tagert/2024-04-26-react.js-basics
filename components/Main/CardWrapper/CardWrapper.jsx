import styles from "./CardWrapper.module.css";
import { Cards } from "./Cards/Cards";

const CardWrapper = () => {
  return (
    <div className={styles.container}>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
};

export { CardWrapper };
