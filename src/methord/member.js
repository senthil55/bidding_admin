import axios from "axios";
import {
  api_init_delete,
  api_init_get,
  api_init_post,
  api_init_put,
  baseapi,
} from "../module/api_init";

async function getMember(id, setmember, setloading, seterror) {
  setloading(true);
  seterror("");

  await api_init_get("member?user_id=" + id, setmember);
  setloading(false);
  return 0;
}
async function getMembers(settableItems, setmembers, seterror, v) {
  var headers = {
    key: sessionStorage.getItem("authKey"),
    user_name: sessionStorage.getItem("userName"),
  };
  await axios
    .get(baseapi + "members?value=" + v, { headers })
    .then((res) => {
      const items = res.data;
      setmembers(items);
      const tableItems = [];
      for (let i = 0; i < items.length; i++) {
        tableItems.push([
          [items[i].name, items[i].user_name],
          [items[i].state, items[i].district],
          [items[i].phone, items[i].email],
          [items[i].catogory],
        ]);
      }
      settableItems(tableItems);
    })
    .catch((err) => {
      if (err.toJSON().message === "Network Error") {
      }
      // seterror("Check Your Internet");
      else if (err.response.status === 400) seterror(err.response.data.msg);
      else if (err.response.status === 401)
        window.location.assign("/admin/login");
      // else seterror("Error Loading data");
    });

  return 0;
}

async function memberSearch(setmembers, settableItems, setloading, e, v) {
  e.preventDefault();
  var name = e.target.value;
  if (name.length === 0) {
    getMembers(settableItems, setloading, setmembers, v);
  }
  if (name.length > 2) {
    // setloading(0);
    await api_init_get(
      "membersearch?name=" + name + "&value=" + v,
      (items) => {
        setmembers(items);
        const tableItems = [];
        for (let i = 0; i < items.length; i++) {
          tableItems.push([
            [items[i].name, items[i].user_name],
            [items[i].state, items[i].district],
            [items[i].phone, items[i].email],
            [items[i].catogory],
          ]);
        }
        settableItems(tableItems);
      },
      () => {}
    );
    // setloading(100);
  }
}

async function updateMember({ user_name }, v, seterror) {
  seterror("");
  await api_init_put(
    "members?user_name=" + user_name,
    { status: v },
    () => {},
    seterror
  );
}
async function updateMemberRaiting(
  { user_name },
  setloading,
  seterror,
  reload,
  e
) {
  seterror("");
  setloading(true);
  await api_init_put(
    "members?user_name=" + user_name,
    { raiting: parseInt(e.target.raiting.value) },
    () => reload(),
    seterror
  );
  setloading(false);
}

async function rejectAprovel(id, setloading, seterror, reload) {
  setloading(true);
  await api_init_delete("members?user_id=" + id, reload, seterror);
  setloading(false);
}

export {
  getMember,
  getMembers,
  memberSearch,
  updateMember,
  rejectAprovel,
  updateMemberRaiting,
};
