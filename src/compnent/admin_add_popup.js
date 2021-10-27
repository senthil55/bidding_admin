import React, { useState } from "react";
import { addCategory } from "../methord/catogory";
import { addAdmin } from "../methord/settings";

function AdminAddPopup({ show, close, reload }) {
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
            Add Admin
            <div style={{ cursor: "pointer" }} onClick={close}>
              X
            </div>
          </div>
          <React.StrictMode>
            <form
              onSubmit={(e) => addAdmin(e, setloading, seterror, close, reload)}
            >
              <input
                placeholder="Username"
                className="hm1_input_tab"
                type="text"
                id="name"
                required
              />
              <input
                placeholder="Password"
                className="hm1_input_tab"
                type="text"
                id="password"
                required
              />
              <div className="cm1_error center">{error}</div>
              <button
                style={{ background: loading ? "gray" : "" }}
                disabled={loading}
                type="submit"
                className="hm1_add_btl1"
              >
                Add
              </button>
            </form>
          </React.StrictMode>
        </div>
      </div>
    </div>
  );
}
export default AdminAddPopup;
