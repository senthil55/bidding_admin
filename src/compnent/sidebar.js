function SideBar({ page, pages, setpage }) {
  return (
    <div className="hm1_sb1_a">
      {pages.map((p, k) => (
        <div
          key={k}
          className="hm1_sb1_ab"
          style={
            k === page
              ? {
                  background: "rgb(193, 233, 255)",
                  borderLeft: "4px solid #0075BA",
                }
              : {}
          }
          onClick={() => setpage(k)}
        >
          <img  alt="No Img" className="hm1_sb1_abs" src={p.icon} />
          {p.title}
        </div>
      ))}
    </div>
  );
}

export default SideBar;
