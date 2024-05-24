import React, { useState } from "react";
import styles from "./AddToOrganizationForm.module.css";
import { createOrganization } from "../../../apis/apis";
import { getLocalStorageUser } from "../../../functions/localStorage";

interface CreateOrganizationProps {
  setOpen: () => void;
}

const AddToOrganizationForm = (props: CreateOrganizationProps) => {
  const [username, setUsername] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = getLocalStorageUser();
    props.setOpen();
    await createOrganization(username, user.orgId);
  };

  const handleOrgNameEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <section className={styles.page}>
      <div className={styles.background}></div>
        <form className={styles.registration} onSubmit={handleSubmit}>
            <div>
                <label>Ім'я користувача:</label>
                <input type="text" value={username} onChange={handleOrgNameEmail} required />
            </div>
            <button type="submit">Добавити</button>
        </form>
      <img className={styles.regImg} onClick={props.setOpen} src="/cross.png" />
    </section>
  );
};

export default AddToOrganizationForm;
