function Textbox1({ tit, id, ph, type }) {
  return (
    <div className="cm1_tb1_a">
      <div>{tit}</div>
      <input
        placeholder={ph}
        className="cm1_tb1_ab"
        type="text"
        type={type != null ? type : ""}
        id={id}
        required
      />
    </div>
  );
}
function Textbox2({ tit, id, ph, dv }) {
  return (
    <div className="cm1_tb1_a">
      <div>{tit}</div>
      <input
        defaultValue={dv}
        placeholder={ph}
        className="cm1_tb1_ab"
        type="datetime-local"
        id={id}
        required
      />
    </div>
  );
}
function Textbox3({ tit, id, dv }) {
  return (
    <div className="cm1_tb1_a">
      <div>{tit}</div>
      <input defaultValue={dv} className="cm1_tb1_ab" id={id} required />
    </div>
  );
}

function Textbox4({ tit, id }) {
  return (
    <div className="cm1_tb1_a">
      <div>{tit}</div>
      <input className="cm1_tb1_ab1" type="file" type="file" id={id} />
    </div>
  );
}

function DropDown1({ tit, id, data }) {
  return (
    <div className="cm1_tb1_a">
      <div>{tit}</div>
      <select className="cm1_tb1_ab" type="text" id={id}>
        {data.map((d, k) => (
          <option key={k} value={d}>
            {d}
          </option>
        ))}
      </select>
    </div>
  );
}

function DropDown2({ tit, id, data }) {
  return (
    <div className="cm1_tb1_a">
      <div>{tit}</div>
      <select className="cm1_tb1_ab" type="text" id={id}>
        {data.map((d) => (
          <option value={d.title}>{d.title}</option>
        ))}
      </select>
    </div>
  );
}

function DropDown3({ tit, id, data, dv }) {
  return (
    <div className="cm1_tb1_a">
      {tit}
      <select defaultValue={dv} className="cm1_tb1_ab" type="text" id={id}>
        {data.map((d, k) => (
          <option key={k} value={d.id}>
            {d.title}
          </option>
        ))}
      </select>
    </div>
  );
}

export {
  Textbox1,
  DropDown1,
  DropDown2,
  DropDown3,
  Textbox2,
  Textbox3,
  Textbox4,
};
