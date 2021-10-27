import React, { useEffect, useState } from "react";
import AdminAddPopup from "../compnent/admin_add_popup";
import BodyTopbar from "../compnent/body_topbar";
import MyTable from "../compnent/table";
import { getAdmins } from "../methord/settings";

function Settings() {
  const [tableItems, settableItems] = useState([]);
  const [page, setpage] = useState(0);
  const [items, setitems] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");
  
  const titles = [
    { title: "All Admins", count: items.length },
    { title: "Add Admin", count: "+" },
  ];

  useEffect(() => getAdmins(setitems, settableItems, setloading, seterror), []);

  const reload = () =>
    getAdmins(
      setitems,
      settableItems,
      () => {},
      () => {}
    );

  return (
    <React.StrictMode>
      <AdminAddPopup
        show={page === 1}
        close={() => setpage(0)}
        reload={reload}
      />
      <div className="cm1_page_title">Admins</div>
      <BodyTopbar titles={titles} onclick={setpage} />
      {loading ? (
        "Loading..."
      ) : (
        <MyTable
          fBody={""}
          nofilter={true}
          search={(e) => {}}
          title="All Members"
          titles={[
            { name: "Name", cl: "tr7" },
            { name: "Edit", cl: "tr3" },
          ]}
          onclick={() => {}}
          items={tableItems}
        />
      )}
    </React.StrictMode>
  );
}

export default Settings;
