import React, { useState } from 'react';
import RegistrationForm from '../../components/Forms/RegistrationForm/RegistrationForm';

const Home: React.FC = () => {
    const [open, setOpen] = useState(false);

    const handleOpenRegister = () => {
        setOpen(!open);
    };

    return (
        <div>
            <h1>Welcome to our website!</h1>
            <p>This is the home page of our site.</p>
            <p>Feel free to explore and learn more about us.</p>
            <button onClick={handleOpenRegister}>Register</button>
            {open && <RegistrationForm setOpen={handleOpenRegister} />}
        </div>
    );
};

export default Home;