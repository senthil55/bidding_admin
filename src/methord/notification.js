import { api_init_get, api_init_put } from "../module/api_init";

async function getNoti(settableitem, setitem, seterror, v) {
  var data = [];
  var t_data = [];
  await api_init_get("noti?" + v, (v) => (data = v), seterror);
  for (let i = 0; i < data.length; i++) {
    t_data.push([
      [data[i].title, data[i].desc],
      [data[i].created.split("G")[0]],
    ]);
  }
  settableitem(t_data);
  setitem(data);
  return 0;
}

async function makeNotificationseen(id) {
  api_init_put(
    "category",
    { seen: true },
    () => {},
    () => {}
  );
}

async function onNotificationclick(
  type,
  id,
  setbid,
  setmember,
  setselectebid,
  setselectemember,
  seterror
) {
  if (id === null) {
    seterror("No Data");
  } else {
    if (type === "b") {
      seterror("Loading..");
      await api_init_get(
        "bid?bid_id=" + id,
        (v) => {
          setselectebid(v);
          setbid(0);
          seterror(null);
        },
        seterror
      );
    } else {
      seterror("Loading..");
      await api_init_get(
        "member?user_id=" + id,
        (v) => {
          setselectemember(v);
          setmember(0);
          seterror(null);
        },
        seterror
      );
    }
  }

  return 0;
}

export { getNoti, makeNotificationseen, onNotificationclick };
