import "./BaseItem.css";

const AgendaItem = ({ item }) => {
  return (
    <div className="item-container">
      <div className="item-content-header">
        <p
          className="subheader"
          style={{ fontWeight: "550", marginRight: "4px" }}
        >
          {item.date})
        </p>
        <p className="subheader">{item.time}</p>
      </div>
      <div className="item-content-body">
        <div style={{ display: "flex" }}>
          <div style={{ display: "block", marginRight: "8px" }}>
            <p className="body" style={{ marginBottom: "4px" }}>
              Situação
            </p>
            <p className="metadata" style={{ fontSize: 12 }}>
              {item.situation}
            </p>
          </div>
          <div style={{ display: "block" }}>
            <p className="body" style={{ marginBottom: "4px" }}>
              Data da situação
            </p>
            <p className="metadata" style={{ fontSize: 12 }}>
              {item.dateSituation}
            </p>
          </div>
        </div>
        <div style={{ display: "block", marginRight: "8px" }}>
            <p className="body" style={{ marginBottom: "4px" }}>
              Observações
            </p>
            <p className="metadata" style={{ fontSize: 12 }}>
              {item.observations}
            </p>
          </div>
        <div className="item-children-list">
         
        </div>
      </div>
      <div className="item-content-footer"></div>
    </div>
  );
};

export default AgendaItem;
