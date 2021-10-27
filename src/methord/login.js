import axios from "axios";
import { baseapi } from "../module/api_init";

async function login(e, setloading, seterror) {
  e.preventDefault();
  setloading(true);
  seterror("");
  await axios
    .post(baseapi + "login", {
      password: e.target.pass.value,
      user_name: e.target.id.value,
    })
    .then((res) => {
      sessionStorage.setItem("authKey", res.data.key);
      sessionStorage.setItem("userName", e.target.id.value);
      window.location.assign("admin/home");
    })
    .catch((err) => {
      if (err.toJSON().message === "Network Error")
        seterror("Check Your Internet");
      else if (err.response.status === 400) seterror(err.response.data.msg);
      else seterror("Error Loading data");
    });

  setloading(false);
}

function logout() {
  if (window.confirm("Confirm Logout")) {
    sessionStorage.setItem("authKey", "");
    sessionStorage.setItem("userName", "");
    window.location.assign("/admin/login");
  }
}

export { login, logout };
