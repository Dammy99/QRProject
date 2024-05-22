import axios from "axios";

interface RegisterLoginProps {
  email: string;
  password: string;
}

const registerUser = async (email:string, password:string) => {
  const registerLoginDto: RegisterLoginProps = {
    email,
    password,
  };

  try {
    const response = await axios.post(
      "https://localhost:7198/api/Auth/register",
      registerLoginDto
    );
    
    return response.data;
    // Handle successful response
  } catch (error) {
    alert(error);
    return null;
    // Handle error response
  }
};

const loginUser = async (email:string, password:string) => {
  const registerLoginDto: RegisterLoginProps = {
    email,
    password,
  };

  try {
    const response = await axios.post(
      "https://localhost:7198/api/Auth/login",
      registerLoginDto
    );
    
    return response.data;
    // Handle successful response
  } catch (error) {
    alert(error);
    return null;
    // Handle error response
  }

};

export { registerUser, loginUser };
