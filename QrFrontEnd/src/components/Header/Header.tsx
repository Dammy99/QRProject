import React, { useState } from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../Buttons/ProjButton/ProjButton";
import {ic_settings} from 'react-icons-kit/md/ic_settings'
import {ic_settings_outline} from 'react-icons-kit/md/ic_settings_outline'
import { Icon } from "react-icons-kit";
import { useAuth } from "../../functions/routerProtector";
import RegistrationForm from "../Forms/RegistrationForm/RegistrationForm";
import LoginForm from "../Forms/LoginForm/LoginForm";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [icon, setIcon] = useState(ic_settings);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  const isAuth = useAuth();
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

  const handleExit = () => {
    confirm("Exit?");
  }

  const handleStorageClick = () => {
    navigate(`/storage`);
    handleMenuClick();
  };

  const handleOrgClick = () => {
    navigate(`/organization`);
    handleMenuClick();
  };

  const handleGenerationClick = () => {
    navigate(`/generation`);
    handleMenuClick();
  };

  const handleHomeClick = () =>{
    navigate(`/`);
    handleMenuClick();
  }

  const handleOpenRegister = () => {
    setRegisterOpen(!isRegisterOpen);
  };

  const handleOpenLogin = () => {
    setLoginOpen(!isLoginOpen);
  };

  return !isAuth ? (
    <header className={styles.header}>
      <div className={styles.unauth}>
        <h3>QR-code NazDev</h3>
        <div className={styles.buttons}>
          <Button size="none" text='Реєстрація' hoverBackgroundColor="green" backgroundColor="#23a923" color='black' onClick={handleOpenRegister} />
          <Button size="none" text='Логін' backgroundColor="#008eff" color='black' onClick={handleOpenLogin} />
        </div>

        {isRegisterOpen && <RegistrationForm setOpen={handleOpenRegister} />}
        {isLoginOpen && <LoginForm setOpen={handleOpenLogin} />}
        
      </div>
    </header>
  ) : (
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
              <Button transition size="small" hoverColor="orange" text="Домашня" onClick={handleHomeClick} />
              <Button transition size="small" hoverColor="orange" text="Склад" onClick={handleStorageClick }/>
              <Button transition size="small" hoverColor="orange" text="Налаштування організації" onClick={handleOrgClick }/>
              <Button transition size="small" hoverColor="orange" text="Генерація QR коду" onClick={handleGenerationClick }/>
              <Button hoverColor="white" size="small" text="Вихід" onClick={handleExit} />
            </div>
            <div className={styles.smallMenu}>
              <Button hoverColor="white" size="small" text="Вихід" onClick={handleExit} />
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
