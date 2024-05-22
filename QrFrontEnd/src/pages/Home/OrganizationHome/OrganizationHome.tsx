import React, { useEffect, useState } from 'react';
import RegistrationForm from '../../../components/Forms/RegistrationForm/RegistrationForm';
import styles from "./OrganizationHome.module.css"
import Button from '../../../components/Buttons/ProjButton/ProjButton';

interface OrganizationProps {
    name: string,
    amountOfProducts: number
}

const orgProps: OrganizationProps = {
    name: "Nazar's Organization",
    amountOfProducts: 3
}

const OrganizationHome: React.FC = () => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        
    }, []);

    return (
        <div className={styles.home}>
            <h1>Ласкаво просимо в {orgProps.name}</h1>
            <p>Загалом в організації зареєстровано {orgProps.amountOfProducts} продукт/и/ів</p>
            <p>This is the home page of our site.</p>
        </div>
    );
};

export default OrganizationHome;