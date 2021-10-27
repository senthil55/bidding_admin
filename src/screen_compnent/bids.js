import React, { useState } from "react";
import BidAddForm from "../compnent/bid_add_form";
import BidDetailsPopup from "../compnent/bid_detail_popup";
import BidEditForm from "../compnent/bid_edit_form";
import BodyTopbar from "../compnent/body_topbar";
import MyTable from "../compnent/table";

function Bid({
  bidOpen,
  bidOpenT,
  bidClosed,
  bidClosedT,
  bidBlind,
  bidBlindT,
  setpage,
  page,
  reload,
  search,
}) {
  const titles = [
    { title: "Open RFQ", count: bidOpen.length },
    { title: "Closed RFQ", count: bidClosed.length },
    { title: "Blind RFQ", count: bidBlind.length },
    { title: "Create RFQ", count: "+" },
  ];
  return (
    <React.StrictMode>
      <div className="cm1_page_title">RFQ</div>
      <BodyTopbar titles={titles} onclick={setpage} />
      {page === 0 ? (
        <OpenBids
          items={bidOpen}
          itemsT={bidOpenT}
          reload={reload}
          search={search}
        />
      ) : null}
      {page === 1 ? (
        <ClosedBids
          items={bidClosed}
          itemsT={bidClosedT}
          reload={reload}
          search={search}
        />
      ) : null}
      {page === 2 ? (
        <BlintBids
          items={bidBlind}
          itemsT={bidBlindT}
          reload={reload}
          search={search}
        />
      ) : null}
      {page === 3 ? <AddBids /> : null}
    </React.StrictMode>
  );
}

export default Bid;

function OpenBids({ items, itemsT, reload, search }) {
  const [selected, setselected] = useState(null);
  const [edititem, setedititem] = useState(null);
  return (
    <React.StrictMode>
      <BidDetailsPopup
        reload={reload}
        close={() => setselected(null)}
        i={selected}
        item={items}
        buttons={
          <React.StrictMode>
            {/* <div
              className="cm1_mb1_acb"
              onClick={() => setedititem(items[selected])}
            >
              Editlkadjclkvc
            </div> */}  
            {/* <div className="cm1_mb1_acb" onClick={() => setselected(null)}>
              Delete
            </div> */}
            <div className="cm1_mb1_acc" onClick={() => setselected(null)}>
              Close
            </div>
          </React.StrictMode>
        }
      />
      <BidEditForm
        reload={reload}
        item={edititem}
        close={() => setedititem(null)}
      />

      <MyTable
        fBody={""}
        search={search}
        title="Open Bids"
        searchph="Search By ID"
        titles={[
          { name: "Title", cl: "tr3" },
          { name: "Category/Transportation", cl: "tr2" },
          { name: "Location", cl: "tr2" },
          { name: "Time(Created/End)", cl: "tr2" },
          { name: "Bids Count / Status", cl: "tr1" },
        ]}
        onclick={setselected}
        items={itemsT}
      />
    </React.StrictMode>
  );
}

function ClosedBids({ items, itemsT, reload, search }) {
  const [selected, setselected] = useState(null);
  return (
    <React.StrictMode>
      <BidDetailsPopup
        reload={reload}
        close={() => setselected(null)}
        i={selected}
        item={items}
        buttons={
          <React.StrictMode>
            <div className="cm1_mb1_acc" onClick={() => setselected(null)}>
              Close
            </div>
          </React.StrictMode>
        }
      />
      <MyTable
        title="Closed Bids"
        search={search}
        searchph="Search By ID"
        titles={[
          { name: "Title", cl: "tr3" },
          { name: "Category/Transportation", cl: "tr2" },
          { name: "Location", cl: "tr2" },
          { name: "Time(Created/End)", cl: "tr2" },
          { name: "Bids Count / Status", cl: "tr1" },
        ]}
        onclick={setselected}
        items={itemsT}
      />
    </React.StrictMode>
  );
}

function BlintBids({ items, itemsT, reload, search }) {
  const [selected, setselected] = useState(null);
  return (
    <React.StrictMode>
      <BidDetailsPopup
        reload={reload}
        close={() => setselected(null)}
        i={selected}
        item={items}
        buttons={
          <React.StrictMode>
            <div className="cm1_mb1_acc" onClick={() => setselected(null)}>
              Close
            </div>
          </React.StrictMode>
        }
      />
      <MyTable
        title="Blind Bids"
        search={search}
        searchph="Search By ID"
        titles={[
          { name: "Title", cl: "tr3" },
          { name: "Category/Transportation", cl: "tr2" },
          { name: "Location", cl: "tr2" },
          { name: "Time(Created/End)", cl: "tr2" },
          { name: "Bids Count / Status", cl: "tr1" },
        ]}
        onclick={setselected}
        items={itemsT}
      />
    </React.StrictMode>
  );
}

function AddBids() {
  return (
    <div className="hm1_baf1">
      <div className="cm1_tb_top">Create RFQ</div>
      <div className="hm1_baf1_formbody">
        <BidAddForm />
      </div>
    </div>
  );
}
