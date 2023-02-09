import "./BaseItem.css";

const UserItem = ({ item }) => {
  return (
    <div className="item-container" style={{width: "200px"}}>
      <div className="item-content-header">
        <p
          className="subheader"
          style={{ fontWeight: "550", marginRight: "4px" }}
        >
          {item.name}
        </p>
        <div style={{ display: "flex", marginTop: "8px" }}>
          <div style={{ display: "block", marginRight: "36px" }}>
            <p className="body-medium" style={{ marginBottom: "4px" }}>
              Data de nascimento
            </p>
            <p className="body">
              {item.birthDate}
            </p>
          </div>
          <div style={{ display: "block" }}>
            <p className="body-medium" style={{ marginBottom: "4px" }}>
              Sexo
            </p>
            <p className="body">
              {item.sex}
            </p>
          </div>
        </div>
      </div>
      <div className="item-content-body">
        <div style={{ display: "flex" }}>
          <div style={{ display: "block", marginRight: "24px" }}>
            <p className="body-medium" style={{ marginBottom: "4px" }}>
              Endereço
            </p>
            <p className="body">
              {item.address}
            </p>
          </div>
          <div style={{ display: "block", marginRight: "24px" }}>
            <p className="body-medium" style={{ marginBottom: "4px" }}>
              Número
            </p>
            <p className="body">
              {item.number}
            </p>
          </div>
          <div style={{ display: "block" }}>
            <p className="body-medium" style={{ marginBottom: "4px" }}>
              Setor
            </p>
            <p className="body">
              {item.sector}
            </p>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "8px" }}>
          <div style={{ display: "block", marginRight: "8px" }}>
            <p className="body-medium" style={{ marginBottom: "4px" }}>
              Cidade
            </p>
            <p className="body">
              {item.city}
            </p>
          </div>
          <div style={{ display: "block" }}>
            <p className="body-medium" style={{ marginBottom: "4px" }}>
              Estado
            </p>
            <p className="body">
              {item.uf}
            </p>
          </div>
        </div>
        <div className="item-children-list">
          <div className="children-list-header">
            <p className="body-medium">Alergias:</p>
            {item.allergies.map((allergyItem, index) => {
              return (
              <div style={{display: "flex"}} key={index}>
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
