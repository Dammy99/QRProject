import React, { useState } from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleStorageClick = () => {
    navigate(`/storage`);
  };

  const handleOrgClick = () => {
    navigate(`/organization`);
  };

  const handleGenerationClick = () => {
    navigate(`/generation`);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.tabs}>
          <button onClick={handleStorageClick} className={styles.tab}>Склад</button>
          <button onClick={handleOrgClick} className={styles.tab}>Налаштування організації</button>
          <button onClick={handleGenerationClick} className={styles.tab}>Генерація QR коду</button>
        </div>
        {showMenu ? (
          <>
            <div className={styles.menu}>
              <div className={styles.menuItem}>Склад</div>
              <div className={styles.menuItem}>Налаштування організації</div>
              <div className={styles.menuItem}>Генерація QR коду</div>
              <div className={styles.menuItem}>Log Out</div>
            </div>
            <div className={styles.smallMenu}>
              <div className={styles.menuItem}>Log Out</div>
            </div>
          </>
        ) : (
          <></>
        )}
        <button className={styles.settingsButton} onClick={handleMenuClick}>
          Settings
        </button>
      </header>
    </>
  );
};

export default Header;
