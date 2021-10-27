import React, { useState } from "react";
import BodyTopbar from "../compnent/body_topbar";
import MemberDetailsPopup from "../compnent/member_det_popup";
import MyTable from "../compnent/table";
import { rejectAprovel, updateMember } from "../methord/member";

function Member({
  memActive,
  memActiveT,
  memNotActive,
  memNotActiveT,
  memBlock,
  memBlockT,
  setpage,
  page,
  searchA,
  searchD,
  searchB,
  reload,
}) {
  const titles = [
    { title: "All Members", count: memActive.length },
    { title: "Pending for approval", count: memNotActive.length },
    { title: "Blocked Members", count: memBlock.length },
  ];

  console.log(memActive);

  return (
    <React.StrictMode>
      <div className="cm1_page_title">Vendor</div>
      <BodyTopbar titles={titles} onclick={setpage} />
      {page === 0 ? (
        <AllMember
          items={memActive}
          itemsT={memActiveT}
          search={searchA}
          reload={reload}
        />
      ) : (
        ""
      )}
      {page === 1 ? (
        <NewRequstes
          items={memNotActive}
          itemsT={memNotActiveT}
          search={searchD}
          reload={reload}
        />
      ) : (
        ""
      )}
      {page === 2 ? (
        <RenewelRequsts
          items={memBlock}
          itemsT={memBlockT}
          search={searchB}
          reload={reload}
        />
      ) : (
        ""
      )}
    </React.StrictMode>
  );
}

export default Member;

function AllMember({ items, itemsT, search, reload }) {
  const [selected, setselected] = useState(null);
  return (
    <React.StrictMode>
      <MemberDetailsPopup
        close={() => setselected(null)}
        i={selected}
        members={items}
        reload={reload}
      />
      <MyTable
        fBody={""}
        search={search}
        searchph="Search Username or Phone.."
        title="All Vendor"
        titles={[
          { name: "Person", cl: "tr3" },
          { name: "Location", cl: "tr2" },
          { name: "Phone", cl: "tr2" },
          { name: "Catogery", cl: "tr2" },
        ]}
        onclick={setselected}
        items={itemsT}
      />
    </React.StrictMode>
  );
}

function NewRequstes({ items, itemsT, search, reload }) {
  const [selected, setselected] = useState(null);
  return (
    <React.StrictMode>
      <MemberDetailsPopup
        close={() => setselected(null)}
        i={selected}
        members={items}
        reload={reload}
      />
      <MyTable
        title="Pending for approval"
        search={search}
        searchph="Search Username or Phone.."
        titles={[
          { name: "Person", cl: "tr3" },
          { name: "Location", cl: "tr2" },
          { name: "Phone", cl: "tr2" },
          { name: "Catogery", cl: "tr2" },
        ]}
        onclick={setselected}
        items={itemsT}
      />
    </React.StrictMode>
  );
}

function RenewelRequsts({ items, itemsT, search, reload }) {
  const [selected, setselected] = useState(null);
  return (
    <React.StrictMode>
      <MemberDetailsPopup
        close={() => setselected(null)}
        i={selected}
        members={items}
        reload={reload}
      />
      <MyTable
        title="Blocked Vendor"
        search={search}
        searchph="Search Username or Phone.."
        titles={[
          { name: "Person", cl: "tr3" },
          { name: "Location", cl: "tr2" },
          { name: "Phone", cl: "tr2" },
          { name: "Catogery", cl: "tr2" },
        ]}
        onclick={setselected}
        items={itemsT}
      />
    </React.StrictMode>
  );
}
