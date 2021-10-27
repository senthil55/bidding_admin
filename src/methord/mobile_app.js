import {
  api_init_delete,
  api_init_get,
  api_init_post,
  api_init_put,
} from "../module/api_init";

async function getMobileContact(setitems, setloading, seterror) {
  setloading(true);
  await api_init_get("contact", setitems, seterror);
  setloading(false);
  return 0;
}
async function putMobileContact(e, setloading, seterror, id) {
  e.preventDefault();
  setloading(true);
  const body = {
    address: e.target.address.value,
    email_1: e.target.email_1.value,
    email_2: e.target.email_2.value,
    phone_1: e.target.phone_1.value,
    phone_2: e.target.phone_2.value,
  };

  await api_init_put(
    "contact?_id=" + id,
    body,
    () => alert("Succesfully Updated"),
    seterror
  );
  setloading(false);
  return 0;
}

async function getMobileNotification(
  setitems,
  settableItems,
  setloading,
  seterror
) {
  function RemoveCat({ id }) {
    return (
      <div
        style={{ color: "red" }}
        onClick={async () => {
          if (window.confirm("Do You want To Delete it"))
            await api_init_delete(
              "pubnoti?_id=" + id,
              () =>
                getMobileNotification(
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
  await api_init_get("pubnoti", (v) => (items = v), seterror);
  if (items.length > 0) {
    setitems(items);
    console.log(items);
    var tableItems = [];
    for (let i = 0; i < items.length; i++) {
      tableItems.push([
        [items[i].title, items[i].desc],
        [
          items[i].created,
          <div>
            <span style={{ color: "gray" }}>State :</span>
            {items[i].state}&nbsp;&nbsp;
            <span style={{ color: "gray" }}>Catogory : </span>
            {items[i].category}&nbsp;&nbsp;
            <span style={{ color: "gray" }}>Langage : </span>
            {items[i].lang}
          </div>,
        ],
        [<RemoveCat id={items[i]._id} />],
      ]);
    }
    settableItems(tableItems);
  }
  setloading(false);
  return 0;
}

async function addMobileNotifivation(e, setloading, seterror, close, reload) {
  e.preventDefault();
  setloading(true);
  const body = {
    title: e.target.EnglishT.value,
    desc: e.target.EnglishD.value,
    state: e.target.state.value,
    lang: e.target.lang.value,
    // noti_type: e.target.noti_type.value,
    category: e.target.category.value,
  };
  seterror("");
  await api_init_post(
    "pubnoti",
    body,
    () => {
      alert("Succesfully Cteated");
      document.getElementById("noti_add_form").reset();
    },
    seterror
  );
  setloading(false);
}

export {
  getMobileNotification,
  addMobileNotifivation,
  getMobileContact,
  putMobileContact,
};
