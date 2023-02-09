import "./BaseItem.css";

const AgendaItem = ({ item }) => {
  return (
    <div className="item-container">
      <div className="item-content-header">
        <p
          className="subheader"
          style={{ fontWeight: "550", marginRight: "4px" }}
        >
          {item.date}
        </p>
        <div style={{ display: "block", marginTop: "8px" }}>
            <p className="body-medium" style={{ marginBottom: "4px" }}>
             Horário
            </p>
            <p className="body">
              {item.time}
            </p>
          </div>
      </div>
      <div className="item-content-body">
        <div style={{ display: "flex" }}>
          <div style={{ display: "block", marginRight: "16px" }}>
            <p className="body-medium" style={{ marginBottom: "4px" }}>
              Situação
            </p>
            <p className="body">
              {item.situation}
            </p>
          </div>
          <div style={{ display: "block" }}>
            <p className="body-medium" style={{ marginBottom: "4px" }}>
              Data da situação
            </p>
            <p className="body">
              {item.dateSituation}
            </p>
          </div>
        </div>
        <div style={{ display: "block", marginTop: "8px" }}>
            <p className="body-medium" style={{ marginBottom: "4px" }}>
              Observações
            </p>
            <p className="body" style={{maxWidth: "200px", wordWrap: "break-word"}}>
              {item.observations}
            </p>
          </div>
        <div className="item-children-list">
         
        </div>
      </div>
    </div>
  );
};

export default AgendaItem;
