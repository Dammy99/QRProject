import React, { useState } from "react";
import styles from "./RegistrationForm.module.css";
import RegisterButton from "../../Buttons/ProjButton/ProjButton";
import TextInput from "../../Input/TextInput";

interface RegisterProps {
  setOpen: () => void
}

const RegistrationForm = (props: RegisterProps) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [correctPassword, setCorrectPassword] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleCorrectPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCorrectPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name.length < 3) {
      alert("Ім'я повинно містити не менше 3 символів");
      return;
    }
    else if (password.length < 6) {
      alert("Пароль повинен містити не менше 6 символів");
      return;
    }
    else if (!/[A-Z]/.test(password)) {
      alert("Пароль повинен містити хоча б одну велику літеру");
      return;
    }
    else if (!/\d/.test(password)) {
      alert("Пароль повинен містити хоча б одне число");
      return;
    }
    else if (!/[^\w\s]/.test(password)) {
      alert("Пароль повинен містити хоча б один символ крім букв і чисел");
      return;
    }
    else if (password !== correctPassword) {
      alert("Паролі не співпадають");
      return;
    }
    // Handle form submission logic here
  };

  return (
    <section className={styles.page}>
      <div className={styles.background}>
      </div>
      <form className={styles.registration} onSubmit={handleSubmit}>
        <label>
          Ім'я:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Пароль:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <label>
          Повторіть пароль:
          <input
            type="password"
            value={correctPassword}
            onChange={handleCorrectPasswordChange}
          />
        </label>
        <TextInput type="password" />
        <br />
        <RegisterButton hoverBackgroundColor="green" backgroundColor="#23a923" color="white"  size="medium" text="Зареєструватись" type="submit"/>
      </form>
    <img className={styles.regImg} onClick={props.setOpen} src="/cross.png"/>
    </section>
  );
};

export default RegistrationForm;
