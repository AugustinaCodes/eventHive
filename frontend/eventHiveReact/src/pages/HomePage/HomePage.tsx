import NavigationBar from "../../components/NavigationBar/NavigationBar";
import styles from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <div>
        <NavigationBar />
        <div className={styles.heroSection}>
            <h1>Explore the hidden gems</h1>
            <p>Discover exclusive locations and events in cities worldwide. Book your visit now!</p>
            <button>Find out more</button>

        </div>
    </div>
  )
}
