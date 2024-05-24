import React, { useEffect, useState } from 'react';
import styles from "./OrganizationHome.module.css"
import { getOrgStorageCount } from '../../../apis/apis';
import { getLocalStorageUser } from '../../../functions/localStorage';
import { LocalStorageUser } from '../../../interfaces/interfaces';

const OrganizationHome: React.FC = () => {
    const [count, setCount] = useState(0);
    const [user] = useState<LocalStorageUser>(getLocalStorageUser());
    useEffect(() => {

        getOrgStorageCount(user.orgId).then((data) => {
            setCount(data);
        });
    }, []);

    return (
        <div className={styles.home}>
            <h1>Ласкаво просимо {user?.name}</h1>
            <p>Загалом в організації зареєстровано {count} продукт{count === 0 ? "" : count < 5 ? "и" : "ів"}</p>
            <p>Це домашня сторінка.</p>
        </div>
    );
};

export default OrganizationHome;