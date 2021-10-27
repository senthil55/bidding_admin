import React, { useState } from "react";
import BidListingPopup from "./bids_listing_popup";

function BidDetailsPopup({ item, i, close, buttons, error, reload }) {
  const [showlist, setshowlist] = useState(false);
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
                <BidListingPopup
                  reload={reload}
                  close={() => setshowlist(false)}
                  show={showlist}
                  item={item[i]}
                />
                <div className="cm1_mb1_ab">
                  <div className="cm1_mb1_aba">Bid</div>
                  <div className="cm1_mb1_abb">
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Bid Title</div>
                      <div className="cm1_mb1_abbab">{item[i].title}</div>
                    </div>
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Bid Description</div>
                      <div className="cm1_mb1_abbab">{item[i].desc}</div>
                    </div>
                    <div className="cm1_mb1_abbb" />
                  </div>
                </div>
                <div className="cm1_mb1_ab">
                  <div className="cm1_mb1_aba">Bid Details</div>
                  <div className="cm1_mb1_abb">
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Bid Type</div>
                      <div className="cm1_mb1_abbab">
                        {item[i].type === "o"
                          ? "Open Bid"
                          : item[i].type === "c"
                          ? "Closed Bid"
                          : item[i].type === "b"
                          ? "Blind Bid"
                          : "None"}
                      </div>
                    </div>
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Category</div>
                      <div className="cm1_mb1_abbab">{item[i].category}</div>
                    </div>
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Start Data</div>
                      <div className="cm1_mb1_abbab">
                        {item[i].start_date.split("T")[0] +
                          " " +
                          item[i].start_date.split("T")[1]}
                      </div>
                    </div>
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">End Data</div>
                      <div className="cm1_mb1_abbab">
                        {item[i].end_date.split("T")[0] +
                          " " +
                          item[i].end_date.split("T")[1]}
                      </div>
                    </div>
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">
                        Starting Price(one item)(Rs)
                      </div>
                      <div className="cm1_mb1_abbab">{item[i].start_price}</div>
                    </div>
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Transportation Type</div>
                      <div className="cm1_mb1_abbab">
                        {item[i].carry_type === "i"
                          ? "Transport Include"
                          : item[i].carry_type === "n"
                          ? "Transport Not Include"
                          : item[i].carry_type === "b"
                          ? "Customer Can Deside"
                          : "None"}
                      </div>
                    </div>
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Transport Price(Rs)</div>
                      <div className="cm1_mb1_abbab">{item[i].carry_price}</div>
                    </div>
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Unit</div>
                      <div className="cm1_mb1_abbab">{item[i].unit}</div>
                    </div>
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Qty</div>
                      <div className="cm1_mb1_abbab">{item[i].qty}</div>
                    </div>
                    <div className="cm1_mb1_abbb" />
                  </div>
                </div>
                <div className="cm1_mb1_ab">
                  <div className="cm1_mb1_aba">Location</div>
                  <div className="cm1_mb1_abb">
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">State</div>
                      <div className="cm1_mb1_abbab">{item[i].state}</div>
                    </div>
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">District</div>
                      <div className="cm1_mb1_abbab">{item[i].district}</div>
                    </div>
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Town</div>
                      <div className="cm1_mb1_abbab">{item[i].town}</div>
                    </div>
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Pin Code</div>
                      <div className="cm1_mb1_abbab">{item[i].pin}</div>
                    </div>
                    <div className="cm1_mb1_abbb" />
                  </div>
                </div>
                <div className="cm1_mb1_ab">
                  <div className="cm1_mb1_aba">Visibility</div>
                  <div className="cm1_mb1_abb">
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Visible State</div>
                      <div className="cm1_mb1_abbab">
                        {item[i].visible_state}
                      </div>
                    </div>
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Visible Category</div>
                      <div className="cm1_mb1_abbab">
                        {item[i].visible_category}
                      </div>
                    </div>
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Visible Language</div>
                      <div className="cm1_mb1_abbab">{item[i].visible_lag}</div>
                    </div>
                    <div className="cm1_mb1_abbb" />
                  </div>
                </div>
                {/* //////////statr///////////Langagets////////////////////// */}
                <div className="cm1_mb1_ab">
                  <div className="cm1_mb1_aba">Content In Hindi</div>
                  <div className="cm1_mb1_abb">
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Bid Title</div>
                      <div className="cm1_mb1_abbab">
                        {item[i].langages.hindi.title}
                      </div>
                    </div>
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Bid Description</div>
                      <div className="cm1_mb1_abbab">
                        {item[i].langages.hindi.desc}
                      </div>
                    </div>
                    <div className="cm1_mb1_abbb" />
                  </div>
                </div>
                <div className="cm1_mb1_ab">
                  <div className="cm1_mb1_aba">Content In Tamil</div>
                  <div className="cm1_mb1_abb">
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Bid Title</div>
                      <div className="cm1_mb1_abbab">
                        {item[i].langages.tamil.title}
                      </div>
                    </div>
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Bid Description</div>
                      <div className="cm1_mb1_abbab">
                        {item[i].langages.tamil.desc}
                      </div>
                    </div>
                    <div className="cm1_mb1_abbb" />
                  </div>
                </div>
                <div className="cm1_mb1_ab">
                  <div className="cm1_mb1_aba">Content In Malayalam</div>
                  <div className="cm1_mb1_abb">
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Bid Title</div>
                      <div className="cm1_mb1_abbab">
                        {item[i].langages.malayalam.title}
                      </div>
                    </div>
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Bid Description</div>
                      <div className="cm1_mb1_abbab">
                        {item[i].langages.malayalam.desc}
                      </div>
                    </div>
                    <div className="cm1_mb1_abbb" />
                  </div>
                </div>
                <div className="cm1_mb1_ab">
                  <div className="cm1_mb1_aba">Content In Kannada</div>
                  <div className="cm1_mb1_abb">
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Bid Title</div>
                      <div className="cm1_mb1_abbab">
                        {item[i].langages.kannada.title}
                      </div>
                    </div>
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Bid Description</div>
                      <div className="cm1_mb1_abbab">
                        {item[i].langages.kannada.desc}
                      </div>
                    </div>
                    <div className="cm1_mb1_abbb" />
                  </div>
                </div>
                <div className="cm1_mb1_ab">
                  <div className="cm1_mb1_aba">Content In Telugu</div>
                  <div className="cm1_mb1_abb">
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Bid Title</div>
                      <div className="cm1_mb1_abbab">
                        {item[i].langages.telugu.title}
                      </div>
                    </div>
                    <div className="cm1_mb1_abba">
                      <div className="cm1_mb1_abbaa">Bid Description</div>
                      <div className="cm1_mb1_abbab">
                        {item[i].langages.telugu.desc}
                      </div>
                    </div>
                    <div className="cm1_mb1_abbb" />
                  </div>
                </div>
                {/* ///////end//////////////Langagets////////////////////// */}
              </div>
              <div className="cm1_error">{error}</div>
              <div className="cm1_mb1_ac">
                <div className="cm1_mb1_acs" onClick={() => setshowlist(true)}>
                  View Bids
                </div>
                {buttons}
              </div>
            </React.StrictMode>
          )}
        </div>
      </div>
    </div>
  );
}
export default BidDetailsPopup;
