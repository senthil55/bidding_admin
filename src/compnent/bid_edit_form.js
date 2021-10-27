import React, { useState, useEffect } from "react";
import { createBid, getCatogeryBids } from "../methord/bids";
import { bidType, langages, states } from "../module/static_data";
import { transport, units } from "../module/static_data";
import { DropDown1, DropDown2, DropDown3 } from "./textbox";
import { Textbox1, Textbox2, Textbox4 } from "./textbox";

function EachLangage({ title }) {
  return (
    <div>
      <div className="hm1_baf1_ab">{title}</div>
      <input
        placeholder="Bid Content"
        className="hm1_input_tab"
        type="text"
        id={title + "B"}
        required
      />
      <textarea
        placeholder="Disctiption"
        className="hm1_input_tab"
        id={title + "D"}
        rows={3}
      />
    </div>
  );
}

function BidEditForm({ close, item, reload }) {
  const [hindi, sethindi] = useState(false);
  const [tamil, settamil] = useState(false);
  const [malayalam, setmalayalam] = useState(false);
  const [kannada, setkannada] = useState(false);
  const [telugu, settelugu] = useState(false);
  const [category, setcategory] = useState([]);
  const [loadingP, setloadingP] = useState(true);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  useEffect(() => getCatogeryBids(setcategory, setloadingP, seterror), []);

  return (
    <div
      className="cm1_memeber_popup"
      style={{ display: item != null ? "flex" : "none" }}
    >
      <div className="cm1_memeber_body">
        <div className="cm1_mb1_a">
          <div className="cm1_mb1_aa">
            Edit RFQ
            <div style={{ cursor: "pointer" }} onClick={close}>
              X
            </div>
          </div>
          {item === null ? (
            ""
          ) : (
            <form
              id="bid_add_form"
              // onSubmit={(e) =>
              //   createBid(
              //     e,
              //     setloading,
              //     seterror,
              //     hindi,
              //     tamil,
              //     malayalam,
              //     kannada,
              //     telugu
              //   )
              // }
            >
              <div className="cm1_mb1_abz">
                <div className="hm1_baf1_a">
                  <div className="hm1_baf1_ab">Details</div>
                  <div className="hm1_baf1_1az">
                    <DropDown3
                      tit="Bid Type"
                      id="type"
                      data={bidType}
                      dv={item.type}
                    />
                    <DropDown2
                      tit="Category"
                      id="category"
                      data={category}
                      dv={item.category}
                    />
                    {/* <Textbox2 tit="Start Data" id="dateS" /> */}
                    <Textbox2 tit="End Data" id="dateE" dv={item.dateE} />
                    <Textbox1
                      tit="Starting Price(one item)(Rs)"
                      id="priceS"
                      ph="120/-"
                      type="number"
                    />
                    <DropDown3
                      tit="Transportation Type"
                      id="trans"
                      data={transport}
                    />
                    <Textbox1
                      tit="Transport Price(Rs)"
                      id="priceT"
                      ph="120/-"
                      type="number"
                    />
                    <DropDown1 tit="Unit" id="unit" data={units} />
                    <Textbox1 tit="Qty" id="qty" ph="120/-" type="number" />
                    <Textbox4 tit="Choose a photo" id="photo" />
                  </div>
                </div>
                <div className="hm1_baf1_a">
                  <div className="hm1_baf1_ab">Visibility</div>
                  <div className="hm1_baf1_1az">
                    <DropDown1 tit="State" id="stateV" data={states} />
                    <DropDown2 tit="Category" id="categoryV" data={category} />
                    <DropDown1 tit="Langage" id="langageV" data={langages} />
                  </div>
                </div>
                <div className="hm1_baf1_a">
                  <div className="hm1_baf1_ab">Location</div>
                  <div className="hm1_baf1_1az">
                    <DropDown1 tit="State" id="state" data={states} />
                    <Textbox1 tit="District" id="district" ph="District" />
                    <Textbox1 tit="Town" id="town" ph="Town" />
                    <Textbox1 tit="Pin" id="pin" ph="123 456" />
                  </div>
                </div>
                <div className="hm1_baf1_a">
                  <div className="hm1_baf1_ab">Chose Langages</div>
                  <div className="hm1_baf1_1a">
                    <div className="hm1_baf1_1ab">
                      <input
                        type="checkbox"
                        onChange={() => sethindi(!hindi)}
                      />
                      Hindi
                    </div>
                    <div className="hm1_baf1_1ab">
                      <input
                        type="checkbox"
                        onChange={() => settamil(!tamil)}
                      />
                      Tamil
                    </div>
                    <div className="hm1_baf1_1ab">
                      <input
                        type="checkbox"
                        onChange={() => setmalayalam(!malayalam)}
                      />
                      Malayalam
                    </div>
                    <div className="hm1_baf1_1ab">
                      <input
                        type="checkbox"
                        onChange={() => setkannada(!kannada)}
                      />
                      Kannada
                    </div>
                    <div className="hm1_baf1_1ab">
                      <input
                        type="checkbox"
                        onChange={() => settelugu(!telugu)}
                      />
                      Telugu
                    </div>
                  </div>
                  <EachLangage title="English" />
                  {hindi ? <EachLangage title="Hindi" /> : ""}
                  {tamil ? <EachLangage title="Tamil" /> : ""}
                  {malayalam ? <EachLangage title="Malayalam" /> : ""}
                  {kannada ? <EachLangage title="Kannada" /> : ""}
                  {telugu ? <EachLangage title="Telugu" /> : ""}
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
                  Confirm Edit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default BidEditForm;
