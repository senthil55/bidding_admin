import React, { useState } from "react";
import { rejectAprovel, updateMember, updateMemberRaiting } from "../methord/member";
import { baseapi, baseUrlimgkyc, baseUrlimgprofile } from "../module/api_init";

function MemberDetailsPopup({ members, i, close, reload }) {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");
  return (
    <div
      className="cm1_memeber_popup"
      style={{ display: i !== null ? "flex" : "none" }}
    >
      <div className="cm1_memeber_body">
        <div className="cm1_mb1_a">
          <div className="cm1_mb1_aa">
            Memebr
            <div style={{ cursor: "pointer" }} onClick={close}>
              X
            </div>
          </div>
          {i === null ? (
            ""
          ) : (
            <React.StrictMode>
              <div className="cm1_mb1_abz">
                <div className="cm1_mb1_ab">
                  <div className="cm1_mb1_aba">Profile</div>
                  <div className="cm1_mb1_abb">
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Name</div>
                      <div className="cm1_mb1_abbab">{members[i].name}</div>
                    </div>
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Username</div>
                      <div className="cm1_mb1_abbab">
                        {members[i].user_name}
                      </div>
                    </div>
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Phone</div>
                      <div className="cm1_mb1_abbab">{members[i].phone}</div>
                    </div>
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Email</div>
                      <div className="cm1_mb1_abbab">
                        {members[i].email}
                        {/* {members[i].email !== null
                          ? members[i].email_verifyed
                            ? " - Verifide"
                            : " - Not Verifide"
                          : null} */}
                      </div>
                    </div>
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Langage</div>
                      <div className="cm1_mb1_abbab">{members[i].lang}</div>
                    </div>
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Status</div>
                      <div className="cm1_mb1_abbab">
                        {members[i].status === "b"
                          ? "Blocked"
                          : members[i].status === "a"
                          ? "Active"
                          : members[i].status === "f"
                          ? "Freezed"
                          : members[i].status === "d"
                          ? "Note Aproved"
                          : "None"}
                      </div>
                    </div>
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Raiting</div>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          updateMemberRaiting(
                            members[i],
                            setloading,
                            seterror,
                            reload,
                            e
                          );
                        }}
                      >
                        <input id="raiting" defaultValue={members[i].raiting} />
                        <button
                          style={{ marginLeft: 10, color: "blue" }}
                          type="submit"
                          disabled={loading}
                        >
                          {loading ? "...." : "Update"}
                        </button>
                      </form>
                    </div>
                    <div className="cm1_mb1_abbb" />
                  </div>
                </div>
                <div className="cm1_mb1_ab">
                  <div className="cm1_mb1_aba">Location</div>
                  <div className="cm1_mb1_abb">
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">State</div>
                      <div className="cm1_mb1_abbab">{members[i].state}</div>
                    </div>
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">District</div>
                      <div className="cm1_mb1_abbab">{members[i].district}</div>
                    </div>
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Town</div>
                      <div className="cm1_mb1_abbab">{members[i].town}</div>
                    </div>
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Pin Code</div>
                      <div className="cm1_mb1_abbab">{members[i].pincode}</div>
                    </div>
                    <div className="cm1_mb1_abbb" />
                  </div>
                </div>
                <div className="cm1_mb1_ab">
                  <div className="cm1_mb1_aba">Bussnuss</div>
                  <div className="cm1_mb1_abb">
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Catogory</div>
                      <div className="cm1_mb1_abbab">{members[i].catogory}</div>
                    </div>
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Orgenisation Name</div>
                      <div className="cm1_mb1_abbab">{members[i].org_name}</div>
                    </div>
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Address</div>
                      <div className="cm1_mb1_abbab">{members[i].address}</div>
                    </div>
                    <div className="cm1_mb1_abbb" />
                  </div>
                </div>
                <div className="cm1_mb1_ab">
                  <div className="cm1_mb1_aba">
                    KYC Document And Profile Picture
                    <a
                      href={
                        baseapi +
                        "getkyc?data=asset/kyc_docs/" +
                        members[i].kyc_document
                      }
                      target="_blank"
                    >
                      Download Kyc Document
                    </a>
                  </div>
                  <div className="cm1_mb1_abb">
                    {members[i].kyc_document !== null ? (
                      <img
                        height="300"
                        src={baseUrlimgkyc + members[i].kyc_document}
                      />
                    ) : null}
                    &nbsp; &nbsp; &nbsp;
                    {members[i].profile_pic !== null ||
                    members[i].profile_pic !== "" ? (
                      <img
                        height="300"
                        src={baseUrlimgprofile + members[i].profile_pic}
                      />
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="cm1_error">{error}</div>
              <div className="cm1_mb1_ac">
                {members[i].status === "a" ? (
                  <div
                    className="cm1_mb1_acb"
                    style={loading ? { background: "gray" } : {}}
                    onClick={async () => {
                      if (!loading) {
                        setloading(true);
                        await updateMember(members[i], "b", seterror);
                        if (error === "") {
                          reload();
                          close();
                        }
                        setloading(false);
                      }
                    }}
                  >
                    Block User
                  </div>
                ) : null}
                {members[i].status === "d" ? (
                  <React.StrictMode>
                    <div
                      className="cm1_mb1_acs"
                      onClick={async () => {
                        if (!loading) {
                          setloading(true);
                          await updateMember(members[i], "a", seterror);
                          if (error === "") {
                            reload();
                            close(null);
                          }
                          setloading(false);
                        }
                      }}
                    >
                      Aprove
                    </div>
                    <div
                      className="cm1_mb1_acb"
                      style={loading ? { background: "gray" } : {}}
                      onClick={async () => {
                        if (!loading)
                          await rejectAprovel(
                            members[i]._id,
                            setloading,
                            seterror,
                            () => {
                              reload();
                              close(null);
                            }
                          );
                      }}
                    >
                      Reject
                    </div>
                  </React.StrictMode>
                ) : null}
                {members[i].status === "b" ? (
                  <div
                    className="cm1_mb1_acb"
                    onClick={async () => {
                      if (!loading) {
                        setloading(true);
                        await updateMember(members[i], "a", seterror);
                        if (error === "") {
                          reload();
                          close(null);
                        }
                        setloading(false);
                      }
                    }}
                  >
                    UnBlock User
                  </div>
                ) : null}
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
export default MemberDetailsPopup;
