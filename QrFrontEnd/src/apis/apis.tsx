import axios from "axios";

interface RegisterLoginProps {
  name: string;
  password: string;
}

const registerUser = async (name:string, password:string) => {
  const registerLoginDto: RegisterLoginProps = {
    name,
    password,
  };

  try {
    const response = await axios.post(
      "https://localhost:7198/api/Auth/register",
      registerLoginDto
    );
    localStorage.setItem("access_token", response.data);
    await getUser(registerLoginDto.name);
    return response.data;
  } catch (error) {
    alert(error);
    return null;
  }
};

const loginUser = async (name:string, password:string) => {
  const registerLoginDto: RegisterLoginProps = {
    name,
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

const getUser = async (name: string) => {
  try {
    const token = window.localStorage.getItem('access_token');

    const response = await axios.get(
      "https://localhost:7198/api/User/getUser",
      { 
        params: {
          name: name,
        },
        headers:{
            Authorization: `bearer ${token}`
        }
      }
    );
    localStorage.setItem("user", JSON.stringify(response.data));

    return response.data;

  } catch (error) {
    alert(error);
    return null;
  }
};
export { registerUser, loginUser, getOrgStorageCount, getUser };
