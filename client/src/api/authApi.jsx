import axios from "axios";

// const authApi = axios.create({
//   baseURL: API_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

export const doLogin = async (username, password) => {
  try {
    const response = await axios.post("http://localhost:3000/api/loginUser", {
      username: username,
      password: password,
    });
    return response.data
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const doRegister = async (username, password,phone) => {
    try {
      const response = await axios.post("http://localhost:3000/api/registerUser", {
        username: username,
        password: password,
        phone: phone,
      });
      console.log(response);
      return response.data
    } catch (error) {
      console.error(error);
      throw error;
    }
  };