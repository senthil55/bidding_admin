import {
  api_init_delete,
  api_init_get,
  api_init_post,
  api_init_put,
} from "../module/api_init";

function RemoveCat({ id, setcatogeries }) {
  return (
    <div
      style={{ color: "red" }}
      onClick={async () => {
        if (window.confirm("Do You want To Delete it"))
          await api_init_delete(
            "category?_id=" + id,
            () =>
              getCatogery(
                setcatogeries,
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
function EditCat({ data, onclick }) {
  return <div onClick={() => onclick(data)}>Edit</div>; 
}

async function getCatogery(setcatogeries, setloading, seterror, onedit) {
  setloading(true);

  var data = [];
  await api_init_get("category", (v) => (data = v), seterror);
  var t_data = [];
  for (let i = 0; i < data.length; i++) {
    t_data.push([
      [data[i].title],
      [<EditCat data={data[i]} onclick={onedit} />],
      [<RemoveCat id={data[i]._id} setcatogeries={setcatogeries} />],
    ]);
  }
  setcatogeries(t_data);
  setloading(false);
  return 0;
}

async function addCategory(e, setloading, seterror, close, setcatogeries) {
  e.preventDefault();
  setloading(true);
  const body = { title: e.target.category.value };
  const fun = async () => {
    close();
    getCatogery(
      setcatogeries,
      () => {},
      () => {}
    );
  };
  await api_init_post("category", body, fun, seterror);
  document.getElementById("catform").reset();
  setloading(false);
}

async function editCategory(e, setloading, seterror, close, setcatogeries, id) {
  e.preventDefault();
  setloading(true);
  const body = { title: e.target.category.value };
  const fun = async () => {
    close();
    getCatogery(
      setcatogeries,
      () => {},
      () => {}
    );
  };
  await api_init_put("category?id=" + id, body, fun, seterror);
  document.getElementById("catform").reset();
  setloading(false);
}

export { getCatogery, addCategory, editCategory };
