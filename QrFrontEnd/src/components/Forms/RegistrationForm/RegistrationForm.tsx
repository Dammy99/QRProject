import React, { useContext, useState } from "react";
import styles from "./RegistrationForm.module.css";
import RegisterButton from "../../Buttons/ProjButton/ProjButton";
import TextInput from "../../Input/PasswordInput";
import { UserContext, UserContextType } from "../../../App";
import { getUser, registerUser } from "../../../apis/apis";
interface RegisterProps {
  setOpen: () => void;
}

const RegistrationForm = (props: RegisterProps) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [correctPassword, setCorrectPassword] = useState("");
  const { setUser } = useContext<UserContextType>(UserContext);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleCorrectPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCorrectPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (name.length < 3) {
      alert("Ім'я повинно містити не менше 3 символів");
      return;
    } else if (password.length < 6) {
      alert("Пароль повинен містити не менше 6 символів");
      return;
    } else if (!/[A-Z]/.test(password)) {
      alert("Пароль повинен містити хоча б одну велику літеру");
      return;
    } else if (!/\d/.test(password)) {
      alert("Пароль повинен містити хоча б одне число");
      return;
    } else if (!/[^\w\s]/.test(password)) {
      alert("Пароль повинен містити хоча б один символ крім букв і чисел");
      return;
    } else if (password !== correctPassword) {
      alert("Паролі не співпадають");
      return;
    }
    const response = await registerUser(name, password);
    
    if (response != "") {
      setUser({ loggedIn: true, token: response});
    }
  };


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
        <TextInput labelText="Повторіть пароль" handleOnChange={handleCorrectPasswordChange} password={correctPassword} />
        <br />
        <RegisterButton
          hoverBackgroundColor="green"
          backgroundColor="#23a923"
          color="white"
          size="medium"
          text="Зареєструватись"
          type="submit"
        />
      </form>
      <img className={styles.regImg} onClick={props.setOpen} src="/cross.png" />
    </section>
  );
};

export default RegistrationForm;
