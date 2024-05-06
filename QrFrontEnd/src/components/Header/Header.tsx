import React, { useState } from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../Buttons/ProjButton/ProjButton";

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

  const handleHomeClick = () =>{
    navigate(`/`);
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.tabs}>
          <Button size="small" hoverColor="orange" text="Домашня" onClick={handleHomeClick} />
          <Button size="small" hoverColor="orange" text="Склад" onClick={handleStorageClick }/>
          <Button size="small" hoverColor="orange" text="Налаштування організації" onClick={handleOrgClick }/>
          <Button size="small" hoverColor="orange" text="Генерація QR коду" onClick={handleGenerationClick }/>
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
