import React from "react";
import styles from "./DeleteOrganization.module.css";
import { deleteOrganization, getUser } from "../../../apis/apis";
import { getLocalStorageUser } from "../../../functions/localStorage";

interface DeleteOrganizationProps {
  setOpen: () => void;
  setIsHaveOrg: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteOrganizationForm = (props: DeleteOrganizationProps) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = getLocalStorageUser();
      await deleteOrganization(user.orgId);
      await getUser(user.name);
      props.setOpen();
      props.setIsHaveOrg(false);
      
    } catch (error) {
      alert("Failed to add org");
      props.setOpen();
    }
  };


  return (
    <section className={styles.page}>
      <div className={styles.background}></div>
        <form className={styles.registration} onSubmit={handleSubmit}>
            <label>Бажаєте видати?</label>
            <button type="submit">Видалити</button>
        </form>
      <img className={styles.regImg} onClick={props.setOpen} src="/cross.png" />
    </section>
  );
};

export default DeleteOrganizationForm;
