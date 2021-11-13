import { useEffect } from "react";
import { useState } from "react";
import SideBar from "../compnent/sidebar";
import { logout } from "../methord/login";
import { wsUrl } from "../module/api_init";
import { alertedBell, appsettingsIcon, aqaiLogo } from "../module/image_logo";
import { bellIcon, biddingIcon, bidIcon, gearIcon } from "../module/image_logo";
import { logoutIcon, maxIcon, membersIcon } from "../module/image_logo";
import { notiIcon, profile, settingsIcon } from "../module/image_logo";
import Bid from "../screen_compnent/bids";
import Category from "../screen_compnent/category";
import Member from "../screen_compnent/member";
import MobileApp from "../screen_compnent/mobile_app";
import Notification from "../screen_compnent/notification";
import Settings from "../screen_compnent/settings";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { bidSearch, getBids } from "../methord/bids";
import { getNoti } from "../methord/notification";
import { getMembers, memberSearch } from "../methord/member";
import { Loading } from "../compnent/warnings";

var client = new W3CWebSocket(wsUrl);

function Home() {
  const [page, setpage] = useState(0);
  const [loading, setloading] = useState(0);
  const [fullbody, setfullbody] = useState(false);
  const [errors, seterrors] = useState("");

  const [notiNew, setnotiNew] = useState([]);
  const [notiNewT, setnotiNewT] = useState([]);
  const [notiBids, setnotiBids] = useState([]);
  const [notiBidsT, setnotiBidsT] = useState([]);
  const [notiMemeber, setnotiMemeber] = useState([]);
  const [notiMemeberT, setnotiMemeberT] = useState([]);
  const [notiAll, setnotiAll] = useState([]);
  const [notiAllT, setnotiAllT] = useState([]);
  const [bidOpen, setbidOpen] = useState([]);
  const [bidOpenT, setbidOpenT] = useState([]);
  const [bidClosed, setbidClosed] = useState([]);
  const [bidClosedT, setbidClosedT] = useState([]);
  const [bidBlind, setbidBlind] = useState([]);
  const [bidBlindT, setbidBlindT] = useState([]);
  const [memberActive, setmemberActive] = useState([]);
  const [memberActiveT, setmemberActiveT] = useState([]);
  const [memberNotActive, setmemberNotActive] = useState([]);
  const [memberNotActiveT, setmemberNotActiveT] = useState([]);
  const [memberBlock, setmemberBlock] = useState([]);
  const [memberBlockT, setmemberBlockT] = useState([]);

  const [notiPage, setnotiPage] = useState(0);
  const [bidPage, setbidPage] = useState(0);
  const [memeberPage, setmemeberPage] = useState(0);

  const seterror = (v) => seterrors(errors + ", " + v);
  const [pushNoti, setpushNoti] = useState(0);

  const initialLoad = async () => {
    seterrors("");
    await getNoti(setnotiNewT, setnotiNew, seterror, "seen=false");
    setloading(10);
    await getNoti(setnotiBidsT, setnotiBids, seterror, "type=b");
    setloading(20);
    await getNoti(setnotiMemeberT, setnotiMemeber, seterror, "type=m");
    setloading(30);
    await getNoti(setnotiAllT, setnotiAll, seterror, "");
    setloading(40);
    await getBids(setbidOpenT, setbidOpen, seterror, "o");
    setloading(50);
    await getBids(setbidClosedT, setbidClosed, seterror, "c");
    setloading(60);
    await getBids(setbidBlindT, setbidBlind, seterror, "b");
    setloading(70);
    await getMembers(setmemberActiveT, setmemberActive, seterror, "a");
    setloading(80);
    await getMembers(setmemberNotActiveT, setmemberNotActive, seterror, "d");
    setloading(90);
    await getMembers(setmemberBlockT, setmemberBlock, seterror, "b");
    setloading(100);
  };

  const reloadNoti = async () => {
    getNoti(setnotiNewT, setnotiNew, seterror, "seen=false").then(() => {
      setpushNoti(0);
      for (let i = 0; i < notiNew.length; i++) {
        if (!notiNew[i].push) setpushNoti(pushNoti + 1);
        console.log(notiNew[i].push);
      }
    });
    getNoti(setnotiBidsT, setnotiBids, seterror, "type=b");
    getNoti(setnotiMemeberT, setnotiMemeber, seterror, "type=m");
    getNoti(setnotiAllT, setnotiAll, seterror, "");
  };
  const reloadbids = () => {
    getBids(setbidOpenT, setbidOpen, seterror, "o");
    getBids(setbidClosedT, setbidClosed, seterror, "c");
    getBids(setbidBlindT, setbidBlind, seterror, "b");
  };
  const reloadMemeber = () => {
    getMembers(setmemberActiveT, setmemberActive, seterror, "a");
    getMembers(setmemberNotActiveT, setmemberNotActive, seterror, "d");
    getMembers(setmemberBlockT, setmemberBlock, seterror, "b");
  };

  function reconnectSocket() {
    console.log("Web Socket Conecting...");
    setTimeout(() => {
      client = new W3CWebSocket(wsUrl);
      client.onopen = () => {
        console.log("Web Socket Conected");
      };
    }, 10000);
  }

  useEffect(() => {
    client.onopen = () => {
      console.log("Web Socket Conected");
    };
    client.onmessage = (message) => {
      var msg = JSON.parse(message.data);
      console.log(msg);
      if (msg.mem) reloadMemeber();
      if (msg.noti) reloadNoti();
      if (msg.bid) reloadbids();
    };

    client.onclose = () => {
      console.log("Web Socket Disconected");
      reconnectSocket();
    };
    initialLoad();
  }, []);

  const pages = [
    {
      component: (
        <Notification
          loading={loading}
          notiNew={notiNew}
          notiNewT={notiNewT}
          notiBids={notiBids}
          notiBidsT={notiBidsT}
          notiMemeber={notiMemeber}
          notiMemeberT={notiMemeberT}
          notiAll={notiAll}
          notiAllT={notiAllT}
          setpage={setnotiPage}
          page={notiPage}
          reload={reloadNoti}
          reloadM={reloadMemeber}
          reloadB={reloadbids}
        />
      ),
      icon: notiIcon,
      title: "Notification",
    },
    {
      component: (
        <Bid
          loading={loading}
          bidOpen={bidOpen}
          bidOpenT={bidOpenT}
          bidClosed={bidClosed}
          bidClosedT={bidClosedT}
          bidBlind={bidBlind}
          bidBlindT={bidBlindT}
          setpage={setbidPage}
          page={bidPage}
          reload={reloadbids}
          search={(e) => {
            bidSearch(
              (v) => {
                setbidBlindT(v);
                setbidClosedT(v);
                setbidOpenT(v);
              },
              (v) => {
                setbidBlind(v);
                setbidClosed(v);
                setbidOpen(v);
              },
              reloadbids,
              e
            );
          }}
        />
      ),
      icon: biddingIcon,
      title: "RFQ",
    },
    {
      component: (
        <Member
          loading={loading}
          memActive={memberActive}
          memActiveT={memberActiveT}
          memNotActive={memberNotActive}
          memNotActiveT={memberNotActiveT}
          memBlock={memberBlock}
          memBlockT={memberBlockT}
          setpage={setmemeberPage}
          page={memeberPage}
          reload={reloadMemeber}
          searchA={(e) =>
            memberSearch(setmemberActive, setmemberActiveT, setloading, e, "a")
          }
          searchD={(e) =>
            memberSearch(
              setmemberNotActive,
              setmemberNotActiveT,
              setloading,
              e,
              "d"
            )
          }
          searchB={(e) =>
            memberSearch(setmemberBlock, setmemberBlockT, setloading, e, "b")
          }
        />
      ),
      icon: membersIcon,
      title: "Vendor",
    },
    { component: <Category />, icon: bidIcon, title: "Products" },
    {
      component: <MobileApp />,
      icon: appsettingsIcon,
      title: "Mobile App",
    },
    {
      component: <Settings />,
      icon: gearIcon,
      title: "Admins  ",
    },
  ];

  return (
    <div className="hm1_screen">
      <div className="hm1_top">
        <div className="hm1_top_a">
          <img width="150" style={{ paddingBottom: 10 }} src={aqaiLogo} />
          {/* <img alt="No Img" src={profile} width="60" /> */}
          <div className="hm1_top_ab">{sessionStorage.getItem("userName")}</div>
          <div className="hm1_top_ac">
            <div className="hm1_top_aca" onClick={() => setpage(0)}>
              {pushNoti === 0 ? (
                <img alt="No Img" src={bellIcon} width="16" />
              ) : (
                <img alt="No Img" src={alertedBell} width="20" />
              )}
              &nbsp; Notification
            </div>
            <div
              className="hm1_top_acb"
              onClick={() => {
                setloading(0);
                initialLoad();
              }}
            >
              <img alt="No Img" src={settingsIcon} width="16" />
              &nbsp;&nbsp;Refresh
            </div>
          </div>
        </div>

        <div className="hm1_top_b" onClick={logout}>
          <img alt="No Img" src={logoutIcon} width="20" />
          &nbsp;&nbsp;LogOut
        </div>
      </div>
      <div className="hm1_bottom">
        <SideBar setpage={setpage} page={page} pages={pages} />
      </div>
      <div className="hm1_body" style={fullbody ? { top: 20, left: 20 } : {}}>
        {loading < 100 ? <Loading value={loading} /> : pages[page].component}
        <div className="hm1_max_button" onClick={() => setfullbody(!fullbody)}>
          <img alt="No Img" src={maxIcon} width="20" />
        </div>
      </div>
    </div>
  );
}

export default Home;
