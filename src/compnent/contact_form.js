import React, { useState } from "react";
import { useEffect } from "react";
import { createBid, getCatogeryBids } from "../methord/bids";
import {
  addMobileNotifivation,
  getMobileContact,
  putMobileContact,
} from "../methord/mobile_app";
import { bidType, langages, states, transport } from "../module/static_data";
import {
  DropDown1,
  DropDown2,
  DropDown3,
  Textbox1,
  Textbox2,
  Textbox3,
} from "./textbox";

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

function ContactForm() {
  const [loadingP, setloadingP] = useState(true);
  const [items, setitems] = useState({});
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  useEffect(
    async () => await getMobileContact(setitems, setloadingP, seterror),
    []
  );

  return loadingP ? (
    "Loading..."
  ) : (
    <form
      onSubmit={(e) => putMobileContact(e, setloading, seterror, items._id)}
    >
      <div className="hm1_baf1_a">
        <div className="hm1_baf1_ab">Contact Information</div>
        <div className="hm1_baf1_1az">
          <Textbox3 tit="Phone 1" id="phone_1" dv={items.phone_1} />
          <Textbox3 tit="Phone 2" id="phone_2" dv={items.phone_2} />
          <Textbox3 tit="Email 1" id="email_1" dv={items.email_1} />
          <Textbox3 tit="Email 2" id="email_2" dv={items.email_2} />
          <Textbox3 tit="Address" id="address" dv={items.address} />
        </div>
      </div>
      <div className="cm1_error center">{error}</div>
      <div className="center">
        <button
          style={{ background: loading ? "gray" : "" }}
          disabled={loading}
          type="submit"
          className="hm1_add_btl2"
        >
          Updata Contact
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
