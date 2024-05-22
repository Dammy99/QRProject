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
    localStorage.setItem("access_token", response.data);
    return response.data;
  } catch (error) {
    alert(error);
    return null;
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
    localStorage.setItem("access_token", response.data);
    return response.data;
  } catch (error) {
    alert(error);
    return null;
  }
};


//-------------------------------------------------------------------------------------------

const getOrgStorageCount = async (orgId: string) => {
  try {
    const token = window.localStorage.getItem('access_token');

    const response = await axios.get(
      "https://localhost:7198/api/Organization/getOrgStorageCount",
      { 
        params: {
          orgId: orgId,
        },
        headers:{
            // Authorization: `Bearer ${localStorage.getItem("token")}`
            Authorization: `bearer ${token}`
        }
      }
    );
    return response.data;

  } catch (error) {
    alert(error);
    return null;
  }

};
export { registerUser, loginUser, getOrgStorageCount };
