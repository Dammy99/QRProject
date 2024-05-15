import React, { useState } from 'react';

const TextInput: React.FC<{ type: 'password' | 'text' }> = ({ type }) => {
    const [value, setValue] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <input
                type={showPassword ? 'text' : type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button type='button' onClick={handleTogglePassword}>
                {showPassword ? 'Hide Password' : 'Show Password'}
            </button>
        </div>
    );
};

export default TextInput;