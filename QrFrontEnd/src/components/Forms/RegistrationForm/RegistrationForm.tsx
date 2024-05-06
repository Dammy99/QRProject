import React, { useState } from "react";
import styles from "./RegistrationForm.module.css";
import RegisterButton from "../../Buttons/ProjButton/ProjButton";

interface RegisterProps {
  setOpen: () => void
}

const RegistrationForm = (props: RegisterProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className={styles.page}>
      <div className={styles.background}>

      </div>
      <form className={styles.registration} onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <RegisterButton hoverBackgroundColor="green" backgroundColor="#23a923" color="white"  size="medium" text="Зареєструватись" type="submit"/>
      </form>
    <img className={styles.regImg} onClick={props.setOpen} src="/cross.png"/>
    </section>
  );
};

export default RegistrationForm;
