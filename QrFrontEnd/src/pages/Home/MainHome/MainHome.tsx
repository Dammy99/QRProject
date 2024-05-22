import React from 'react';
import styles from "../OrganizationHome/OrganizationHome.module.css"
import { useAuth } from '../../../functions/routerProtector';
import OrganizationHome from '../OrganizationHome/OrganizationHome';

const MainHome: React.FC = () => {
    const isAuth = useAuth();
    
    return !isAuth ? (<>
    <div className={styles.home}>
        <br></br>
        <br></br>
        <h1>Ласкаво просимо в QR-code систему</h1>
        <h4>Для того щоб продовжити необхідно ввійти в систему/зареєстроватись</h4>
        <h4>Зверху є кнопочка</h4>
    </div>
    </>) :(
        <OrganizationHome/>
    );
};

export default MainHome;