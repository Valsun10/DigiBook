const LOGIN_URL = "https://books-library-dev.herokuapp.com/api/user/login";
const REGISTER_URL =
  "https://books-library-dev.herokuapp.com/api/user/register";

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const login = async (credentials) => {
  options.body = JSON.stringify(credentials);
  const res = await fetch(LOGIN_URL, options);

  if (!res.ok) {
    const { error } = await res.json();
    throw new Error(error);
  }

  const { token } = await res.json();

  localStorage.setItem("token", JSON.stringify(token));

  return token;
};

const register = async (credentials) => {
  options.body = JSON.stringify(credentials);
  const res = await fetch(`${REGISTER_URL}`, options);

  if (!res.ok) {
    const { error } = await res.json();
    throw new Error(error);
  }

  const jsonResult = await res.json();

  return jsonResult;
};

const logout = () => {
  localStorage.removeItem("token");
};

const authService = {
  login,
  register,
  logout,
};

export default authService;
