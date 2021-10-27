import React, { useEffect, useState } from "react";
import BodyTopbar from "../compnent/body_topbar";
import {
  CatogoryAddPopup,
  CatogoryEditPopup,
} from "../compnent/catogory_popup";
import MyTable from "../compnent/table";
import { Loading, ShowError } from "../compnent/warnings";
import { getCatogery } from "../methord/catogory";

function Category(params) {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");
  const [catogory, setcatogeries] = useState([]);
  const [showadd, setshowadd] = useState(false);
  const [edititem, setedititem] = useState(null);
  const titles = [
    { title: "All Products", count: catogory.length },
    { title: "Add Products", count: "+" },
  ];

  function onclickheaders(v) {
    if (v === 0) setshowadd(false);
    else setshowadd(true);
  }

  function onedit(v) {
    setedititem(v);
  }

  useEffect(() => getCatogery(setcatogeries, setloading, seterror, onedit), []);

  return (
    <React.StrictMode>
      <CatogoryAddPopup
        show={showadd}
        close={() => setshowadd(false)}
        setcatogeries={setcatogeries}
      />
      <CatogoryEditPopup
        item={edititem}
        close={() => setedititem(null)}
        setcatogeries={setcatogeries}
      />
      <div className="cm1_page_title">Products</div>
      <BodyTopbar titles={titles} onclick={onclickheaders} />
      {loading ? (
        <Loading />
      ) : error !== "" ? (
        <ShowError err={error} />
      ) : (
        <MyTable
          // fBody={""}
          nofilter={true}
          searchph="Search Product"
          search={
            (e) => {}
            // getMemberbySearch(settableItems, setloading, setmembers, e, "a")
          }
          title="All Products"
          titles={[
            { name: "Title", cl: "tr5" },
            { name: "Edit", cl: "tr2" },
            { name: "", cl: "tr2" },
          ]}
          onclick={() => {}}
          items={catogory}
        />
      )}
    </React.StrictMode>
  );
}

export default Category;
