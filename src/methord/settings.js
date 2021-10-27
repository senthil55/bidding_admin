import {
  api_init_delete,
  api_init_get,
  api_init_post,
} from "../module/api_init";

async function getAdmins(setitems, settableItems, setloading, seterror) {
  function RemoveCat({ user_name }) {
    return (
      <div
        style={{ color: "red" }}
        onClick={async () => {
          if (window.confirm("Do You want To Delete it"))
            await api_init_delete(
              "admin?user_name=" + user_name,
              () =>
                getAdmins(
                  setitems,
                  settableItems,
                  () => {},
                  () => {}
                ),
              (v) => alert(v)
            );
        }}
      >
        Remove
      </div>
    );
  }

  setloading(true);
  var items = [];
  await api_init_get("admin", (data) => (items = data), seterror);
  if (items.length > 0) {
    setitems(items);
    var tableItems = [];
    for (let i = 0; i < items.length; i++) {
      tableItems.push([
        [items[i].user_name],
        [<RemoveCat user_name={items[i].user_name} />],
      ]);
    }
    settableItems(tableItems);
  }
  setloading(false);
  return 0;
}

async function addAdmin(e, setloading, seterror, close, reload) {
  e.preventDefault();
  setloading(true);
  const body = {
    user_name: e.target.name.value,
    password: e.target.password.value,
  };
  const fun = () => {
    close();
    reload();
  };
  await api_init_post("admin", body, fun, seterror);
  setloading(false);
}

export { getAdmins, addAdmin };
