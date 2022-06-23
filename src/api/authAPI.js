import axios from "axios";
const API_URL = "http://localhost:8000/api/auth/login";

const login = ({ email, password }) => {
  return axios.post(API_URL, { email, password }).then((response) => {
    if (response.data.success && response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data.token));
    }
    return response.data;
  });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authAPI = {
  login,
  logout,
};

export default authAPI;
