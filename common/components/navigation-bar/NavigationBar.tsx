import styles from "./Navigation.module.css";

const NavigationBar = () => {
  return (
    <nav className={styles["navigation-bar"]}>
      gurncraft
      <a href="/items">Items</a>
      <a href="/">Settings</a>
    </nav>
  );
};

export default NavigationBar;
