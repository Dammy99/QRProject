import React, { useEffect, useState } from 'react';
import RegistrationForm from '../../../components/Forms/RegistrationForm/RegistrationForm';
import styles from "./OrganizationHome.module.css"
import Button from '../../../components/Buttons/ProjButton/ProjButton';
import { getOrgStorageCount } from '../../../apis/apis';
import { getLocalStorageUser } from '../../../functions/localStorage';

interface UserDto{
    id: string,
    name: string,
    orgId: string
}

const OrganizationHome: React.FC = () => {
    const [count, setCount] = useState(0);
    const [user, setUser] = useState<UserDto>();
    useEffect(() => {

        getOrgStorageCount("1").then((data) => {
            setCount(data);
        });
        setUser(getLocalStorageUser());
    }, []);

    return (
        <div className={styles.home}>
            <h1>Ласкаво просимо в {user?.name}</h1>
            <p>Загалом в організації зареєстровано {count} продукт/и/ів</p>
            <p>This is the home page of our site.</p>
        </div>
    );
};

export default OrganizationHome;