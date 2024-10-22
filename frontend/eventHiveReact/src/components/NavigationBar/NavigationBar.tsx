import logo from "../../assets/EventHive.svg";
import styles from "./NavigationBar.module.scss";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavigationBar() {
  return (
    <div className={styles.navBar}>
      <div>
        <img src={logo} alt="Event Hive Logo" />
      </div>
      <div className={styles.rightSide}>
        <a href="" className={styles.navLink}>
          Login
        </a>
        <MenuIcon fontSize="large" />
      </div>
    </div>
  );
}
