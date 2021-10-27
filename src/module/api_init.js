import axios from "axios";
// const serverN = "localhost:8000";
const serverN = "52.15.97.24:8000";

// const baseapi = `http://${serverN}/admin/`;
// const baseUrlimgkyc = `http://${serverN}/asset/kyc_docs/`;
// const baseUrlimgprofile = `http://${serverN}/asset/profile/`;
// const baseUrlimgbids = `http://${serverN}/asset/bids/`;
// const wsUrl = `ws://${serverN}/admin`;
const baseapi = `http://${serverN}/admin/`;
const baseUrlimgkyc = `http://${serverN}/asset/kyc_docs/`;
const baseUrlimgprofile = `http://${serverN}/asset/profile/`;
const baseUrlimgbids = `http://${serverN}/asset/bids/`;
const wsUrl = `ws://${serverN}/admin`;

async function api_init_get(api, setdata, seterror) {
  var headers = {
    key: sessionStorage.getItem("authKey"),
    user_name: sessionStorage.getItem("userName"),
  };
  await axios
    .get(baseapi + api, { headers })
    .then((res) => setdata(res.data))
    .catch((err) => {
      if (err.toJSON().message === "Network Error")
        seterror("Check Your Internet");
      else if (err.response.status === 401) window.location.replace("login");
      else if (err.response.status === 400) seterror(err.response.data.msg);
      else seterror("Error");
    });
  return 0;
}
async function api_init_post(api, body, setdata, seterror) {
  var headers = {
    key: sessionStorage.getItem("authKey"),
    user_name: sessionStorage.getItem("userName"),
  };
  await axios
    .post(baseapi + api, body, { headers })
    .then((res) => setdata(res.data))
    .catch((err) => {
      if (err.toJSON().message === "Network Error")
        seterror("Check Your Internet");
      else if (err.response.status === 401) window.location.replace("login");
      else if (err.response.status === 400) seterror(err.response.data.msg);
      else seterror("Error");
    });
  return 0;
}
async function api_init_put(api, body, setdata, seterror) {
  var headers = {
    key: sessionStorage.getItem("authKey"),
    user_name: sessionStorage.getItem("userName"),
  };
  await axios
    .put(baseapi + api, body, { headers })
    .then((res) => setdata(res.data))
    .catch((err) => {
      if (err.toJSON().message === "Network Error")
        seterror("Check Your Internet");
      else if (err.response.status === 401) window.location.replace("login");
      else if (err.response.status === 400) seterror(err.response.data.msg);
      else seterror("Error");
    });
  return 0;
}
async function api_init_delete(api, setdata, seterror) {
  var headers = {
    key: sessionStorage.getItem("authKey"),
    user_name: sessionStorage.getItem("userName"),
  };
  await axios
    .delete(baseapi + api, { headers })
    .then((res) => setdata(res.data))
    .catch((err) => {
      if (err.toJSON().message === "Network Error")
        seterror("Check Your Internet");
      else if (err.response.status === 401) window.location.replace("login");
      else if (err.response.status === 400) seterror(err.response.data.msg);
      else seterror("Error");
    });
  return 0;
}

export {
  api_init_post,
  api_init_get,
  api_init_put,
  api_init_delete,
  baseapi,
  baseUrlimgkyc,
  baseUrlimgbids,
  baseUrlimgprofile,
  wsUrl,
};
