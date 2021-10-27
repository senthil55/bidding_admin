function BodyTopbar({ titles, onclick }) {
  return (
    <div className="cm1_body_top">
      {titles.map((title, k ) => (
        <div  key={k} className="cm1_top_card" onClick={() => onclick(k)}>
          <div className="cm1_top_card_a">{title.count}</div>
          {title.title}
        </div>
      ))}
    </div>
  );
}

export default BodyTopbar;
