import React, { useState } from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../Buttons/ProjButton/ProjButton";
import {ic_settings} from 'react-icons-kit/md/ic_settings'
import {ic_settings_outline} from 'react-icons-kit/md/ic_settings_outline'
import { Icon } from "react-icons-kit";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [icon, setIcon] = useState(ic_settings);

  const navigate = useNavigate();

  const handleMenuClick = () => {
    if(icon === ic_settings){
      setIcon(ic_settings_outline);
    }
    else{
      setIcon(ic_settings)
    }
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
          <Button transition size="small" hoverColor="orange" text="Домашня" onClick={handleHomeClick} />
          <Button transition size="small" hoverColor="orange" text="Склад" onClick={handleStorageClick }/>
          <Button transition size="small" hoverColor="orange" text="Налаштування організації" onClick={handleOrgClick }/>
          <Button transition size="small" hoverColor="orange" text="Генерація QR коду" onClick={handleGenerationClick }/>
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
              <button className={styles.menuItem}>
                Log Out
              </button>
              <div className={styles.menuItem}>Log Out</div>
            </div>
          </>
        ) : (
          <></>
        )}
        <button onClick={handleMenuClick} className={styles.settings} >
          <Icon icon={icon} size={40}/>
        </button>
        {/* <Button margin="20px" backgroundColor="grey" size="small" text="Settings" onClick={handleMenuClick} /> */}
      </header>
    </>
  );
};

export default Header;
