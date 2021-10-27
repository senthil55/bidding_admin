import React, { useState } from "react";
import { addCategory, editCategory } from "../methord/catogory";

function CatogoryAddPopup({ show, close, setcatogeries }) {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  return (
    <div
      className="cm1_memeber_popup"
      style={{ display: show ? "flex" : "none" }}
    >
      <div className="cm1_memeber_body2">
        <div className="cm1_mb1_a">
          <div className="cm1_mb1_aa">
            Add Catogory
            <div style={{ cursor: "pointer" }} onClick={close}>
              X
            </div>
          </div>
          <React.StrictMode>
            <form
              onSubmit={(e) =>
                addCategory(e, setloading, seterror, close, setcatogeries)
              }
              id="catform"
            >
              <input
                placeholder="Category"
                className="hm1_input_tab"
                type="text"
                id="category"
                required
              />
              <div className="cm1_error center">{error}</div>
              <button
                style={{ background: loading ? "gray" : "" }}
                disabled={loading}
                type="submit"
                className="hm1_add_btl1"
              >
                Add Category
              </button>
            </form>
          </React.StrictMode>
        </div>
      </div>
    </div>
  );
}
function CatogoryEditPopup({ item, close, setcatogeries }) {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  return (
    <div
      className="cm1_memeber_popup"
      style={{ display: item !== null ? "flex" : "none" }}
    >
      <div className="cm1_memeber_body2">
        <div className="cm1_mb1_a">
          <div className="cm1_mb1_aa">
            Add Catogory
            <div style={{ cursor: "pointer" }} onClick={close}>
              X
            </div>
          </div>

          {item !== null ? (
            <form
              onSubmit={(e) =>
                editCategory(
                  e,
                  setloading,
                  seterror,
                  close,
                  setcatogeries,
                  item._id
                )
              }
              id="catform"
            >
              <input
                placeholder="Category"
                className="hm1_input_tab"
                type="text"
                id="category"
                required
                defaultValue={item.title}
              />

              <div className="cm1_error center">{error}</div>
              <button
                style={{ background: loading ? "gray" : "" }}
                disabled={loading}
                type="submit"
                className="hm1_add_btl1"
              >
                Add Category
              </button>
            </form>
          ) : null}
        </div>
      </div>
    </div>
  );
}
export { CatogoryAddPopup, CatogoryEditPopup };
