import React, { useContext, useState } from "react";
import styles from "./LoginForm.module.css";
import LoginButton from "../../Buttons/ProjButton/ProjButton";
import TextInput from "../../Input/PasswordInput";
import { UserContext, UserContextType } from "../../../App";
import { loginUser } from "../../../apis/apis";

interface RegisterProps {
  setOpen: () => void;
}

const LoginForm = (props: RegisterProps) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext<UserContextType>(UserContext);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  
  const handleSubmit =  async (event: React.FormEvent) =>{
    event.preventDefault();

    const response = await loginUser(name, password);

    if (response) {
      setUser({ loggedIn: true, token: response});
    }
  }

  return (
    <section className={styles.page}>
      <div className={styles.background}></div>
      <form className={styles.registration} onSubmit={handleSubmit}>
        <div>
          <label>Ім'я:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <br />
        <TextInput labelText="Введіть пароль" handleOnChange={handlePasswordChange} password={password}/>
        <br />
        <LoginButton
          hoverBackgroundColor="green"
          backgroundColor="#23a923"
          color="white"
          size="medium"
          text="Логін"
          type="submit"
        />
      </form>
      <img className={styles.regImg} onClick={props.setOpen} src="/cross.png" />
    </section>
  );
};

export default LoginForm;
