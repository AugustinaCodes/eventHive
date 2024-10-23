import styles from "./NavigationBarModal.module.scss";

export default function NavigationBarModal() {
  return (
    <div className={styles.modal}>
      <div className={styles.buttonHover}>
        <a href="">About</a>
      </div>
      <div className={styles.buttonHover}>
        <a href="">Events</a>
      </div>
      <div className={styles.buttonHover}>
        <a href="">Contact</a>
      </div>
    </div>
  );
}
