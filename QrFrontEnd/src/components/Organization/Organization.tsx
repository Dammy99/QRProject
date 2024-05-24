import { useEffect, useState } from "react";
import { getLocalStorageUser } from "../../functions/localStorage";
import Button from "../Buttons/ProjButton/ProjButton";
import styles from "./Organization.module.css";
import CreateOrganizationForm from "../Forms/CreateOrganizationForm/CreateOrganization";
import DeleteOrganizationForm from "../Forms/DeleteOrganizationForm/DeleteOrganization";

const Organization = () => {
  const [isCreateOrgOpen, setIsCreateOrgOpen] = useState<boolean>(false);
  // const [isAddToOrgOpen, setIsAddToOrgOpen] = useState<boolean>(false);
  const [isDeleteOrgOpen, setIsDeleteOrgOpen] = useState<boolean>(false);

  const [isHaveOrg, setIsHaveOrg] = useState<boolean>(false);
  useEffect(() => {
    if (getLocalStorageUser().orgId !== "00000000-0000-0000-0000-000000000000") {
      setIsHaveOrg(true);
    }
  }, []);

  const handleCreateOrg = async () => {
    setIsCreateOrgOpen(!isCreateOrgOpen);
    setIsHaveOrg(true);
  }

  const handleDeleteOrg = async () => {
    setIsDeleteOrgOpen(!isDeleteOrgOpen);
    setIsHaveOrg(false);
  }

  return (
    <section className={styles.container}>
      {!isHaveOrg && <Button onClick={handleCreateOrg} hoverBackgroundColor="#59d959" size="large" backgroundColor="#59d959" text="Створити організацію"/>}
      <Button hoverBackgroundColor="#a3a3ed" size="large" backgroundColor="#8d8dd7" text="Добавити в організацію"/>
      {isHaveOrg &&<Button onClick={handleDeleteOrg} hoverBackgroundColor="#ff1414" size="large" backgroundColor="orangered" text="Видалити організацію"/>}

      {isCreateOrgOpen && <CreateOrganizationForm setOpen={handleCreateOrg}/>}
      {isDeleteOrgOpen && <DeleteOrganizationForm setOpen={handleDeleteOrg}/>}
    </section>
  );
};

export default Organization;
