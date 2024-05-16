import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import React, { useState } from "react";
import styles from "./PasswordInput.module.css";

interface TextInputProps{
    labelText: string,
    handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    password: string,
}

const TextInput = (props:TextInputProps) => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  return (
    <div>
      <div>
          <label className={styles.label}>{props.labelText}</label>
        <div className={styles.container}>
          <input
            className={styles.textinput}
            type={type}
            name="password"
            placeholder="Password"
            value={props.password}
            onChange={props.handleOnChange}
            autoComplete="current-password"
          />
          <span
            className="flex justify-around items-center"
            onClick={handleToggle}
          >
            <Icon className="absolute mr-10" icon={icon} size={25} />
          </span>
        </div>
      </div>
    </div>

    // <div className={styles.container}>
    //   <input
    //     className={styles.textinput}
    //     value={value}
    //     onChange={(e) => setValue(e.target.value)}
    //     type={showPassword ? "text" : type}
    //   />
    //   {type === "password" && (
    //     <label className={styles.labelbutton} onClick={handleTogglePassword}>
    //       {showPassword ? "Hide" : " Show"}
    //     </label>
    //   )}
    // </div>

    // <div>
    //     <input
    //         type={showPassword ? 'text' : type}
    //         value={value}
    //         onChange={(e) => setValue(e.target.value)}
    //     />
    //     <button type='button' onClick={handleTogglePassword}>
    //         {showPassword ? 'Hide Password' : 'Show Password'}
    //     </button>
    // </div>
  );
};

export default TextInput;
