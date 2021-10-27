import React, { useState } from "react";
import { cancelAssign, confirmBid } from "../methord/bids";
import { getMember } from "../methord/member";

function BidListingPopup({ item, show, close, reload }) {
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(false);

  return (
    <div
      className="cm1_memeber_popup"
      style={{ display: show ? "flex" : "none" }}
    >
      <div className="cm1_memeber_body">
        <div className="cm1_mb1_a">
          <div className="cm1_mb1_aa">
            {item.title}
            <div style={{ cursor: "pointer" }} onClick={close}>
              X
            </div>
          </div>
          {item === null ? (
            ""
          ) : (
            <React.StrictMode>
              <div className="cm1_mb1_abz">
                {item.bids.map((bid) => (
                  <Body bid={bid} item={item} reload={reload} />
                ))}
              </div>
              <div className="cm1_error">{error}</div>
              {item.assigned !== null ? (
                <div className="cm1_error">
                  <span style={{ color: "purple" }}>
                    Assigned to {item.assigned.user_name}
                  </span>
                </div>
              ) : null}
              <div className="cm1_mb1_ac">
                {item.assigned === null ? null : (
                  <React.StrictMode>
                    <div
                      className={loading ? "pus1_acb" : "cm1_mb1_acb"}
                      onClick={() => {
                        if (!loading)
                          cancelAssign(item._id, setloading, seterror, reload);
                      }}
                    >
                      Cancel Assigned
                    </div>
                  </React.StrictMode>
                )}
                <div className="cm1_mb1_acc" onClick={close}>
                  Close
                </div>
              </div>
            </React.StrictMode>
          )}
        </div>
      </div>
    </div>
  );
}
export default BidListingPopup;

function Body({ bid, item, reload }) {
  const [loading, setloading] = useState(false);
  const [loading2, setloading2] = useState(false);
  const [user, setuser] = useState(null);
  const [error, seterror] = useState("");
  const [error2, seterror2] = useState("");

  return (
    <div className="pus1_a">
      <div className="pus1_az">₹ {bid.price / 100}/-</div>
      <div className="pus1_aa">
        {bid.user_name}
        <div className="pus1_aaa">{bid.created.split("G")[0]}</div>
      </div>
      <div className="pus1_ac">
        <div className="pus1_ab">{bid.comment}</div>
        {bid.cancel_status ? (
          <div className="pus1_acb">Canceled</div>
        ) : item.assigned === null ? (
          <div
            onClick={() => {
              if (!loading)
                confirmBid(item._id, bid, setloading, seterror, reload);
            }}
            className={loading ? "pus1_acb" : "pus1_acc"}
          >
            Confirm
          </div>
        ) : null}
      </div>
      {user === null ? (
        loading2 ? (
          <div className="pus1_ab">Loading</div>
        ) : (
          <div
            onClick={() =>
              getMember(bid.user_id, setuser, setloading2, seterror2)
            }
            className="pus1_ad"
          >
            Show user details
          </div>
        )
      ) : error2 === "" ? (
        <div className="pus1_ae">
          <div className="pus1_aea">Transport</div>
          <div className="pus1_aeb">
            {bid.transport ? "Include" : "NotInclude"}
          </div>
          <div className="pus1_aea">Name</div>
          <div className="pus1_aeb">{user.name}</div>
          <div className="pus1_aea">Totel Bid</div>
          <div className="pus1_aeb">{user.my_bids.length}</div>
          <div className="pus1_aea">Joined</div>
          <div className="pus1_aeb">{user.created.split("G")[0] ?? ""}</div>
          <div className="pus1_aea">Phone</div>
          <div className="pus1_aeb">{user.phone}</div>
          <div className="pus1_aea">State</div>
          <div className="pus1_aeb">{user.state}</div>
          <div className="pus1_aea">District</div>
          <div className="pus1_aeb">{user.district}</div>
          <div className="pus1_aea">Town</div>
          <div className="pus1_aeb">{user.town}</div>
          <div className="pus1_aea">PinCode</div>
          <div className="pus1_aeb">{user.pincode}</div>
          <div className="pus1_aea">Langage</div>
          <div className="pus1_aeb">{user.lang}</div>
          <div className="pus1_aea">Raiting</div>
          <div className="pus1_aeb">{user.raiting}</div>
          <div className="pus1_aea">Address</div>
          <div className="pus1_aeb">{user.address}</div>
        </div>
      ) : (
        error
      )}
    </div>
  );
}
