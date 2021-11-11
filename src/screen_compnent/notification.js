import React, { useState } from "react";
import { useEffect } from "react";
import BidDetailsPopup from "../compnent/bid_detail_popup";
import BodyTopbar from "../compnent/body_topbar";
import MemberDetailsPopup from "../compnent/member_det_popup";
import MyTable from "../compnent/table";
import { rejectAprovel, updateMember } from "../methord/member";
import { getNotification, onNotificationclick } from "../methord/notification";

function Notification({
  notiNew,
  notiNewT,
  notiBids,
  notiBidsT,
  notiMemeber,
  notiMemeberT,
  notiAll,
  notiAllT,
  setpage,
  page,
  reloadM,
  reloadB,
}) {
  const titles = [
    {
      title: "New Notification",
      count: notiNew.length == 50 ? "50+" : notiNew.length,
      item: notiNew,
      itemT: notiNewT,
    },
    {
      title: "Bids Notification",
      count: "",
      item: notiBids,
      itemT: notiBidsT,
    },
    {
      title: "Member Notification",
      count: "",
      item: notiMemeber,
      itemT: notiMemeberT,
    },
    {
      title: "All Notification",
      count: "",
      item: notiAll,
      itemT: notiAllT,
    },
  ];

  const [selectemember, setselectemember] = useState(null);
  const [selectebid, setselectebid] = useState(null);
  const [bid, setbid] = useState(null);
  const [member, setmember] = useState(null);
  const [error, seterror] = useState(null);
  return (
    <React.StrictMode>
      <div
        className="cm1_memeber_popup"
        style={{ display: error !== null ? "flex" : "none" }}
      >
        <div className="cm1_mb1_a">
          <div className="cm1_mb1_aa">
            {error}
            <div style={{ cursor: "pointer" }} onClick={() => seterror(null)}>
              X
            </div>
          </div>
        </div>
      </div>
      <MemberDetailsPopup
        close={() => setmember(null)}
        i={member}
        members={[selectemember]}
        reload={reloadM}
      />
      <BidDetailsPopup
        reload={() => {
          reloadB();
          onNotificationclick(
            selectemember.type,
            selectemember.id,
            () => {},
            () => {},
            setselectebid,
            () => {},
            () => {}
          );
        }}
        close={() => setbid(null)}
        i={bid}
        item={[selectebid]}
        buttons={
          <div className="cm1_mb1_acc" onClick={() => setbid(null)}>
            Close
          </div>
        }
      />
      <div className="cm1_page_title">Notification</div>
      <BodyTopbar titles={titles} onclick={setpage} />

      <MyTable
        fBody={""}
        nofilter
        onclick={(k) =>
          onNotificationclick(
            titles[page].item[k].type,
            titles[page].item[k].id,
            setbid,
            setmember,
            setselectebid,
            setselectemember,
            seterror
          )
        }
        search={(e) => {}}
        nosearch
        title={titles[page].title}
        titles={[
          { name: "Title", cl: "tr6" },
          { name: "Time", cl: "tr3" },
        ]}
        data={titles[page].item}
        items={titles[page].itemT}
      />
    </React.StrictMode>
  );
}

export default Notification;
