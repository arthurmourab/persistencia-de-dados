import "./BaseItem.css";

const VaccineItem = ({ item }) => {
  return (
    <div className="item-container">
      <div className="item-content-header">
        <p
          className="subheader"
          style={{ fontWeight: "550", marginRight: "4px" }}
        >
          {item.title}
        </p>
        <div style={{ display: "block", marginTop: "8px" }}>
            <p className="body-medium" style={{ marginBottom: "4px" }}>
             Descrição
            </p>
            <p className="body">
              {item.description}
            </p>
          </div>
      </div>
      <div className="item-content-body">
        <div style={{display: "flex", marginTop: "8px"}}>
            <div style={{display: "block", marginRight: "16px" }}>
                <p className="body-medium" style={{ marginBottom: "4px" }}>
                    Doses
                </p>
                <p className="body">
                    {item.doses}
                </p>
            </div>
            <div style={{display: "block" }}>
                <p className="body-medium" style={{ marginBottom: "4px" }}>
                    Intervalo
                </p>
                <p className="body">
                    {item.gap} dias
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
