import {
  api_init_delete,
  api_init_get,
  api_init_post,
  api_init_put,
} from "../module/api_init";

async function getBids(settableItems, setmembers, seterror, v) {
  var items = [];
  await api_init_get("bids?value=" + v, (data) => (items = data), seterror);
  if (items.length > 0) {
    setmembers(items);
    var tableItems = [];
    for (let i = 0; i < items.length; i++) {
      tableItems.push([
        [
          <>
            <span style={{ color: "blue " }}>#{items[i].id} - </span>
            {items[i].title}
          </>,
          items[i].desc,
        ],
        [
          <>
            <span
              style={{
                color:
                  items[i].type === "b"
                    ? "#749AF8"
                    : items[i].type === "c"
                    ? "#BC5EE9"
                    : "#34D1AA",
              }}
            >
              (
              {items[i].type === "b"
                ? "Blind RFQ"
                : items[i].type === "c"
                ? "Closed RFQ"
                : "Open RFQ"}
              )&nbsp;&nbsp;
            </span>
            {items[i].category}
          </>,
          items[i].carry_type == "i"
            ? "Company"
            : items[i].carry_type == "n"
            ? "Vendor"
            : "Vendor can choose",
        ],
        [items[i].state, items[i].district],
        [items[i].created.split("G")[0], items[i].created.split("G")[0]],
        [
          items[i].bids.length,
          items[i].assigned != null ? (
            <span style={{ color: "purple" }}>Assigned</span>
          ) : items[i].status === "c" ? (
            <span style={{ color: "blue" }}>Closed</span>
          ) : items[i].status === "r" ? (
            <span style={{ color: "green" }}>Running</span>
          ) : (
            <span style={{ color: "red" }}>Expired</span>
          ),
        ],
      ]);
    }
    settableItems(tableItems);
  }
  return 0;
}

async function getCatogeryBids(setcatogeries, setloading, seterror) {
  setloading(true);
  var cat = [];
  await api_init_get("category", (v) => (cat = v), seterror);
  // setcatogeries([{ id: "-1", title: "All" }, ...cat]);
  setcatogeries(cat);
  setloading(false);
}

async function createBid(
  e,
  setloading,
  seterror,
  hindi,
  tamil,
  malayalam,
  kannada,
  telungu
) {
  e.preventDefault();
  seterror("");
  var data = e.target;
  const formData = new FormData();
  if (data.photo.files[0] != null)
    formData.append("img", data.photo.files[0], data.photo.files[0].name);

  function langsetter(t, v) {
    if (v) {
      return {
        status: true,
        title: e.target[t + "B"].value,
        desc: e.target[t + "D"].value,
      };
    } else return { status: false, title: "", desc: "" };
  }
  var body = {
    type: data.type.value,
    category: data.category.value,
    end_date: data.dateE.value,
    start_price: (data.priceS.value * 100).toString(),
    carry_type: data.trans.value,
    carry_price: (data.priceT.value * 100).toString(),
    visible_state: data.stateV.value,
    visible_category: data.categoryV.value,
    visible_lag: data.langageV.value,
    state: data.state.value,
    district: data.district.value,
    town: data.town.value,
    pin: data.pin.value,
    title: data.EnglishB.value,
    desc: data.EnglishD.value,
    qty: data.qty.value,
    unit: data.unit.value,
    langages: {
      hindi: langsetter("Hindi", hindi),
      tamil: langsetter("Tamil", tamil),
      malayalam: langsetter("Malayalam", malayalam),
      kannada: langsetter("Kannada", kannada),
      telugu: langsetter("Telugu", telungu),
    },
  };
  setloading(true);
  formData.append("body", JSON.stringify(body));
  await api_init_post(
    "bids",
    formData,
    () => {
      alert("RFQ successfully created");
      document.getElementById("bid_add_form").reset();
    },
    seterror
  );
  setloading(false);
}

async function confirmBid(id, bid, setloading, seterror, reload) {
  seterror("");
  if (window.confirm("Confirm Assigning to " + bid.user_name)) {
    setloading(true);
    await api_init_post(
      "assignbids",
      { bid_id: id, bid },
      () => reload(),
      seterror
    );
    setloading(false);
  }
}

async function cancelAssign(id, setloading, seterror, reload) {
  seterror("");
  if (window.confirm("Confirm Cancel")) {
    setloading(true);
    await api_init_post(
      "cancelassign?type=a",
      { bid_id: id },
      () => reload(),
      seterror
    );
    setloading(false);
  }
}

async function closebid(id, setloading, seterror, reload) {
  seterror("");
  if (window.confirm("Are You sure you want to close the bid !")) {
    setloading(true);
    await api_init_put("bids?bid_id=" + id, { status: "c" }, reload, seterror);
    setloading(false);
  }
}

async function deletebid(id, setloading, seterror, reload) {
  seterror("");
  if (window.confirm("Are You sure you want to delete the bid!")) {
    setloading(true);
    await api_init_delete("bid?bid_id=" + id, reload, seterror);
    setloading(false);
  }
}

async function bidSearch(setdataT, setdata, reload, e) {
  e.preventDefault();
  var id = e.target.value;

  if (id.length === 0) {
    reload();
    return 0;
  }
  if (id.length < 5) {
    reload();
    return 0;
  }

  var item = null;

  await api_init_get(
    "bidsearch?bid_id=" + id,
    (v) => (item = v),
    () => reload()
  );
  if (item != null) {
    setdata([item]);
    var tableItems = [];

    tableItems.push([
      [
        <>
          <span style={{ color: "blue " }}>#{item.id} - </span>
          {item.title}
        </>,
        item.desc,
      ],
      [
        <>
          <span
            style={{
              color:
                item.type === "b"
                  ? "#749AF8"
                  : item.type === "c"
                  ? "#BC5EE9"
                  : "#34D1AA",
            }}
          >
            (
            {item.type === "b"
              ? "Blind RFQ"
              : item.type === "c"
              ? "Closed RFQ"
              : "Open RFQ"}
            )&nbsp;&nbsp;
          </span>
          {item.category}
        </>,
        item.carry_type == "i"
          ? "Company"
          : item.carry_type == "n"
          ? "Vendor"
          : "Vendor can choose",
      ],
      [item.state, item.district],
      [item.created.split("G")[0], item.created.split("G")[0]],
      [
        item.bids.length,
        item.assigned != null ? (
          <span style={{ color: "purple" }}>Assigned</span>
        ) : item.status === "c" ? (
          <span style={{ color: "blue" }}>Closed</span>
        ) : item.status === "r" ? (
          <span style={{ color: "green" }}>Running</span>
        ) : (
          <span style={{ color: "red" }}>Expired</span>
        ),
      ],
    ]);
    setdataT(tableItems);
  }
}

export {
  getBids,
  getCatogeryBids,
  createBid,
  confirmBid,
  cancelAssign,
  closebid,
  bidSearch,
  deletebid,
};
