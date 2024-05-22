import React from 'react';
import styles from "./WelcomePage.module.css";

const WelcomePage: React.FC = () => {
    return (
        <div className={styles.welcome}>
            <h1>Welcome to our website!</h1>
            <p>We are glad to have you here.</p>
        </div>
    );
};

export default WelcomePage;