import { useState } from "react";
import logo from "../../assets/EventHive.svg";
import NavigationBarModal from "../Modals/NavigationBarModal/NavigationBarModal";
import styles from "./NavigationBar.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const [openModal, setOpenModal] = useState(false);
  const isDesktop = useMediaQuery(`(min-width:900px)`);
  const navigate = useNavigate();

  function toggleModal() {
    setOpenModal((prevState) => !prevState);
  }

  return (
    <div className={styles.navBar}>
      <div>
        <img src={logo} alt="Event Hive Logo" className={styles.logo} />
      </div>

      <div className={styles.rightSide}>
        {isDesktop && (
          <div className={styles.rightSideDesktop}>
            <div className={styles.desktopNav}>
              <div className={styles.buttonHover}>
                <a href="" className={styles.navLink}>
                  Home
                </a>
              </div>
              <div className={styles.buttonHover}>
                <a href="" className={styles.navLink}>
                  About
                </a>
              </div>
              <div className={styles.buttonHover}>
                <a href="" className={styles.navLink}>
                  Events
                </a>
              </div>
              <div className={styles.buttonHover}>
                <a href="" className={styles.navLink}>
                  Contact
                </a>
              </div>
            </div>
            <div className={styles.registerLinks}>
              <div className={styles.buttonHover} onClick={() => navigate("/login")}>
                <a href="" className={styles.navLink}>
                  Login
                </a>
              </div>
              <button
                className={`${styles.navLink} ${styles.getStartedButton}`}
              >
                Get Started
              </button>
            </div>
          </div>
        )}
        {!isDesktop && (
          <div className={styles.mobileSide}>
            <div className={styles.buttonHover} onClick={() => navigate("/login")}>
              <a href="" className={styles.navLink}>
                Login
              </a>
            </div>
            <div onClick={toggleModal}>
              {!openModal ? (
                <MenuIcon fontSize="large" className={styles.menuIcon} />
              ) : (
                <CloseIcon fontSize="large" className={styles.menuIcon} />
              )}
              {openModal && <NavigationBarModal />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
