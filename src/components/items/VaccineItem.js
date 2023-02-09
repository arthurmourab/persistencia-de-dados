import "./BaseItem.css";

const VaccineItem = ({ item }) => {
  return (
    <div className="item-container">
      <div className="item-content-header">
        <p
          className="subheader"
          style={{ fontWeight: "550", marginRight: "4px" }}
        >
          {item.title})
        </p>
        <p className="subheader">{item.title}</p>
      </div>
      <div className="item-content-body">
        <div>
          <p className="body" style={{ margin: "0px 0px 8px 0px" }}>
            {item.description}
          </p>
        </div>
        <div style={{display: "flex", marginTop: "16px"}}>
            <div style={{display: "block", marginLeft: "8px" }}>
                <p className="body" style={{ marginBottom: "4px" }}>
                    Doses
                </p>
                <p className="body" style={{ fontSize: 12}}>
                    {item.doses}
                </p>
            </div>
            <div style={{display: "block", marginLeft: "8px" }}>
                <p className="body" style={{ marginBottom: "4px" }}>
                    Periodicidade
                </p>
                <p className="body" style={{ fontSize: 12}}>
                    {item.frequency}
                </p>
            </div>
            <div style={{display: "block" }}>
                <p className="body" style={{ marginBottom: "4px" }}>
                    Intervalo
                </p>
                <p className="body" style={{ fontSize: 12}}>
                    {item.gap}
                </p>
            </div>
        </div>
      </div>
      <div className="item-content-footer">
      </div>
    </div>
  );
};

export default VaccineItem;
