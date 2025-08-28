import styles from "./Navigation.module.css";

const NavigationBar = () => {
  return (
    <section className={styles["navigation-bar"]}>
      <nav>
        gurncraft
        <a href="/items">Items</a>
        <a href="/">Settings</a>
      </nav>
    </section>
  );
};

export default NavigationBar;
