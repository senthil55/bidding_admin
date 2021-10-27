import React, { useState } from "react";
import { useEffect } from "react";
import { createBid, getCatogeryBids } from "../methord/bids";
import { addMobileNotifivation } from "../methord/mobile_app";
import {
  bidType,
  langages,
  notiType,
  states,
  transport,
} from "../module/static_data";
import { DropDown1, DropDown2, DropDown3, Textbox1, Textbox2 } from "./textbox";

function EachLangage({ title }) {
  return (
    <div>
      <div className="hm1_baf1_ab">{title}</div>
      <input
        placeholder="Title"
        className="hm1_input_tab"
        type="text"
        id={title + "T"}
        required
      />
      <textarea
        placeholder="Disctiption "
        className="hm1_input_tab"
        id={title + "D"}
        rows={3}
      />
    </div>
  );
}

function NotificationAddForm({}) {
  const [hindi, sethindi] = useState(false);
  const [tamil, settamil] = useState(false);
  const [malayalam, setmalayalam] = useState(false);
  const [kannada, setkannada] = useState(false);
  const [telungu, settelungu] = useState(false);

  const [category, setcategory] = useState([]);
  const [loadingP, setloadingP] = useState(true);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  useEffect(() => getCatogeryBids(setcategory, setloadingP, seterror), []);

  return (
    <form
      id="noti_add_form"
      onSubmit={(e) => addMobileNotifivation(e, setloading, seterror)}
    >
      <div className="hm1_baf1_a">
        <div className="hm1_baf1_ab">Visibility</div>
        <div className="hm1_baf1_1az">
          <DropDown1 tit="State" id="state" data={states} />
          <DropDown2
            tit="Category"
            id="category"
            data={[{ title: "All" }, ...category]}
          />
          <DropDown1 tit="Langage" id="lang" data={langages} />
        </div>
      </div>
      {/* <div className="hm1_baf1_a">
        <div className="hm1_baf1_ab">Type</div>
        <div className="hm1_baf1_1az">
          <DropDown3
            tit="Choose a notification type"
            id="noti_type"
            data={notiType}
          />
        </div>
      </div> */}
      <div className="hm1_baf1_a">
        <div className="hm1_baf1_ab">Chose Langages</div>
        <div className="hm1_baf1_1a">
          <div className="hm1_baf1_1ab">
            <input type="checkbox" onChange={() => sethindi(!hindi)} />
            Hindi
          </div>
          <div className="hm1_baf1_1ab">
            <input type="checkbox" onChange={() => settamil(!tamil)} />
            Tamil
          </div>
          <div className="hm1_baf1_1ab">
            <input type="checkbox" onChange={() => setmalayalam(!malayalam)} />
            Malyalam
          </div>
          <div className="hm1_baf1_1ab">
            <input type="checkbox" onChange={() => setkannada(!kannada)} />
            Kannada
          </div>
          <div className="hm1_baf1_1ab">
            <input type="checkbox" onChange={() => settelungu(!telungu)} />
            Telungu
          </div>
        </div>
        <EachLangage title="English" />
        {hindi ? <EachLangage title="Hindi" /> : ""}
        {tamil ? <EachLangage title="Timil" /> : ""}
        {malayalam ? <EachLangage title="Malayalam" /> : ""}
        {kannada ? <EachLangage title="Kannada" /> : ""}
        {telungu ? <EachLangage title="Telungu" /> : ""}
      </div>
      <div className="cm1_error center">{error}</div>
      <div className="center">
        <button
          style={{ background: loading ? "gray" : "" }}
          disabled={loading}
          type="submit"
          className="hm1_add_btl2"
        >
          + Create Notification
        </button>
      </div>
    </form>
  );
}

export default NotificationAddForm;
