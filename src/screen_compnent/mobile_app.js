import React, { useEffect, useState } from "react";
import BodyTopbar from "../compnent/body_topbar";
import ContactForm from "../compnent/contact_form";
import NotificationAddForm from "../compnent/notification_addform";
import MyTable from "../compnent/table";
import { getMobileNotification } from "../methord/mobile_app";

function MobileApp({ c }) {
  const titles = [
    { title: "App Notifications", count: "" },
    { title: "Add Notification", count: "+" },
    { title: "App Contact", count: "" },
  ];
  const [page, setpage] = useState(0);
  return (
    <React.StrictMode>
      <div className="cm1_page_title">Mobile App Settings</div>
      <BodyTopbar titles={titles} onclick={setpage} />
      {page == 0 ? <Notification /> : null}
      {page == 1 ? <AddNotification /> : null}
      {page == 2 ? <Contact /> : null}
    </React.StrictMode>
  );
}

export default MobileApp;

function Notification({}) {
  const [tableItems, settableItems] = useState([]);
  const [items, setitems] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  useEffect(
    () => getMobileNotification(setitems, settableItems, setloading, seterror),
    []
  );

  return loading ? (
    "Loading.."
  ) : (
    <MyTable
      fBody={""}
      nofilter={true}
      nosearch={true}
      search={
        (e) => {}
        // getMemberbySearch(settableItems, setloading, setmembers, e, "a")
      }
      title="All Members"
      titles={[
        { name: "Title", cl: "tr5" },
        { name: "Time/Visibility", cl: "tr4" },
        { name: "Edit", cl: "tr1" },
      ]}
      onclick={() => {}}
      items={tableItems}
    />
  );
}
function AddNotification({}) {
  return (
    <div className="hm1_baf1">
      <div className="cm1_tb_top">Create Notification</div>
      <div className="hm1_baf1_formbody">
        <NotificationAddForm />
      </div>
    </div>
  );
}
function Contact({}) {
  return (
    <div className="hm1_baf1">
      <div className="cm1_tb_top">Contact </div>
      <div className="hm1_baf1_formbody">
        <ContactForm />
      </div>
    </div>
  );
}
