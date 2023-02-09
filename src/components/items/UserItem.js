import "./BaseItem.css";

const UserItem = ({ item }) => {
  return (
    <div className="item-container">
      <div className="item-content-header">
        <p
          className="subheader"
          style={{ fontWeight: "550", marginRight: "4px" }}
        >
          {item.name})
        </p>
        <p className="subheader">{item.title}</p>
      </div>
      <div className="item-content-body">
        <div style={{ display: "flex" }}>
          <div style={{ display: "block", marginRight: "8px" }}>
            <p className="body" style={{ marginBottom: "4px" }}>
              Data de nascimento
            </p>
            <p className="metadata" style={{ fontSize: 12 }}>
              {item.birthData}
            </p>
          </div>
          <div style={{ display: "block" }}>
            <p className="body" style={{ marginBottom: "4px" }}>
              Sexo
            </p>
            <p className="metadata" style={{ fontSize: 12 }}>
              {item.sex}
            </p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ display: "block", marginRight: "8px" }}>
            <p className="body" style={{ marginBottom: "4px" }}>
              Endereço
            </p>
            <p className="metadata" style={{ fontSize: 12 }}>
              {item.address}
            </p>
          </div>
          <div style={{ display: "block", marginRight: "8px" }}>
            <p className="body" style={{ marginBottom: "4px" }}>
              Número
            </p>
            <p className="metadata" style={{ fontSize: 12 }}>
              {item.number}
            </p>
          </div>
          <div style={{ display: "block" }}>
            <p className="body" style={{ marginBottom: "4px" }}>
              Setor
            </p>
            <p className="metadata" style={{ fontSize: 12 }}>
              {item.sector}
            </p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ display: "block", marginRight: "8px" }}>
            <p className="body" style={{ marginBottom: "4px" }}>
              Cidade
            </p>
            <p className="metadata" style={{ fontSize: 12 }}>
              {item.city}
            </p>
          </div>
          <div style={{ display: "block" }}>
            <p className="body" style={{ marginBottom: "4px" }}>
              Estado
            </p>
            <p className="metadata" style={{ fontSize: 12 }}>
              {item.uf}
            </p>
          </div>
        </div>
        <div className="item-children-list">
          <div className="children-list-header">
            <p className="body-medium">Alergias:</p>
            {item.allergies.map((allergyItem, index) => {
              return (
              <div style={{display: "flex"}}>
                  <p className="body" style={{ margin: "0px 8px 0px 0px" }}>
                    {index})
                  </p>
                  <p className="body" style={{ margin: "0px" }}>
                    {allergyItem.text}
                  </p>
              </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="item-content-footer"></div>
    </div>
  );
};

export default UserItem;
