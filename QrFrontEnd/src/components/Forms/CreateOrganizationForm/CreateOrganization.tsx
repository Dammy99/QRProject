import React, { useState } from "react";
import styles from "./CreateOrganization.module.css";
import { createOrganization, getUser } from "../../../apis/apis";
import { getLocalStorageUser } from "../../../functions/localStorage";

interface CreateOrganizationProps {
  setOpen: () => void;
  setIsHaveOrg: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateOrganizationForm = (props: CreateOrganizationProps) => {
  const [orgName, setOrgName] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = getLocalStorageUser();
      await createOrganization(user.name, orgName);
      await getUser(user.name);
      props.setOpen();
      props.setIsHaveOrg(true);
      
    } catch (error) {
      alert("Failed to add org");
      props.setOpen();
    }
  };

  const handleOrgNameEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrgName(e.target.value);
  };

  return (
    <section className={styles.page}>
      <div className={styles.background}></div>
        <form className={styles.registration} onSubmit={handleSubmit}>
            <div>
                <label>Org name:</label>
                <input type="text" value={orgName} onChange={handleOrgNameEmail} required />
            </div>
            <button type="submit">Add Item</button>
        </form>
      <img className={styles.regImg} onClick={props.setOpen} src="/cross.png" />
    </section>
  );
};

export default CreateOrganizationForm;
