import React, { useState } from "react";
import "./BaseDialog.css";
import Button from "../buttons/Button";
import InputField from "../inputs/InputField";

const UserDialog = ({ isOpen, onCancel, onSuccessCallback }) => {
  //#region UseState and Variables
  const [newUser, setNewUser] = useState({
    name: "",
    birthDate: "",
    sex: "",
    adress: "",
    number: undefined,
    sector: "",
    city: "",
    uf: "",
    allergies : [
      {
        text: ""
      },
      {
        text: ""
      },
      {
        text: ""
      }
    ]
  });

  const sexOptions = [
    {
      name: "M",
    },
    {
      name: "F",
    },
  ];

  //#endregion

  //#region Handles

  const handleComboBoxChange = (e) => {
    if (e.target.value === "M") {
      setNewUser({
        ...newUser,
        sex: "M",
      });
    } else if (e.target.value === "F") {
      setNewUser({
        ...newUser,
        sex: "F",
      });
    }
  };

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleAllergyInputChange = (index, e) => {
    setNewUser({
      ...newUser,
      allergies: newUser.allergies.map((item, itemIndex) => {
        if (itemIndex === index) {
          item.text = e.target.value;
        }
        return item;
      }),
    });
  };

  const postUser = (value) => {
    onSuccessCallback(value);
  };

  const handleSubmit = (state) => {
    postUser(state);
  };

  //#endregion

  return isOpen ? (
    <div className="dialog-popup">
      <div className="dialog-content">
        <div className="dialog-header">
          <p className="subheader">Novo usuário</p>
        </div>
        <div className="dialog-body">
          <div className="input-row">
            <div style={{ margin: "auto 0px" }}>
              <p className="body" style={{ margin: "0px 8px 0px 0px" }}>
                Nome:
              </p>
            </div>
            <InputField
              name="name"
              value={newUser.name}
              inputStyle={{ width: "200px" }}
              inputLength={60}
              placeholder="Preencha o nome"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-row">
            <div style={{ margin: "auto 0px" }}>
              <p className="body" style={{ margin: "0px 16px 0px 0px" }}>
                Data de nascimento:
              </p>
            </div>
            <InputField
              name="birthDate"
              value={newUser.birthDate}
              placeholder="Preencha a data"
              inputLength={10}
              inputStyle={{ width: "200px" }}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-row">
            <div style={{ margin: "auto 0px" }}>
              <p className="body" style={{ margin: "0px 1px 4px 0px" }}>
                Selecione o sexo:
              </p>
            </div>
            <select
              name="sex"
              className="text-input"
              onChange={handleComboBoxChange}
              value={newUser.sex}
            >
              {sexOptions.map((item, index) => {
                return (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="input-row">
            <div style={{ margin: "auto 0px" }}>
              <p className="body" style={{ margin: "0px 1px 4px 0px" }}>
                Endereço:
              </p>
            </div>
            <InputField
              inputStyle={{ width: "200px" }}
              placeholder="Preencha o endereço"
              name="adress"
              value={newUser.adress}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex-input-row">
            <div
              className="input-row"
              style={{ display: "flex", marginRight: "8px" }}
            >
              <div style={{ margin: "auto 4px auto 0px" }}>
                <p className="body" style={{ margin: "0px 1px 4px 0px" }}>
                  Número:
                </p>
              </div>
              <InputField
                inputStyle={{ width: "50px" }}
                placeholder="Núm."
                name="number"
                value={newUser.number}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-row" style={{ display: "flex" }}>
              <div style={{ margin: "auto 4px auto 0px" }}>
                <p className="body" style={{ margin: "0px 1px 4px 0px" }}>
                  Setor:
                </p>
              </div>
              <InputField
                inputStyle={{ width: "150px" }}
                placeholder="Preencha o setor"
                name="sector"
                value={newUser.sector}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex-input-row">
            <div
              className="input-row"
              style={{ display: "flex", marginRight: "8px" }}
            >
              <div style={{ margin: "auto 4px auto 0px" }}>
                <p className="body" style={{ margin: "0px 1px 4px 0px" }}>
                  Estado:
                </p>
              </div>
              <InputField
                inputStyle={{ width: "50px" }}
                placeholder="UF"
                name="uf"
                value={newUser.uf}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-row" style={{ display: "flex" }}>
              <div style={{ margin: "auto 4px auto 0px" }}>
                <p className="body" style={{ margin: "0px 1px 4px 0px" }}>
                  Cidade:
                </p>
              </div>
              <InputField
                inputStyle={{ width: "150px" }}
                placeholder="Preencha a cidade"
                name="city"
                value={newUser.city}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="input-row">
              <div style={{ margin: "auto 0px" }}>
                <p className="body" style={{ margin: "0px 1px 4px 0px" }}>
                  Alergias:
                </p>
              </div>
              <div className="item-row-children">
                {newUser.allergies.map((item, index) => {
                  return (
                    <div className="item-row-child" key={index}>
                      <div style={{ margin: "auto 0px", display: "flex" }}>
                        <p className="body" style={{ margin: "0px 8px 0px 8px", fontSize: 12 }}>
                          Alergia {index + 1}
                        </p>
                          <InputField
                            name="text"
                            value={item.text}
                            placeholder="Preencha o campo"
                            inputStyle={{ width: "200px" }}
                            onChange={(e) => {
                              handleAllergyInputChange(index, e);
                            }}
                          />
                       </div> 
                    </div>
                  )
                })}
              </div>
          </div>
        </div>
        <div className="dialog-footer">
          <Button
            label="Salvar"
            onClick={() => handleSubmit(newUser)}
            buttonMargin={"0px 8px 0px 0px"}
          />
          <Button label="Cancelar" isDestructive onClick={onCancel} />
        </div>
      </div>
    </div>
  ) : null;
};

export default UserDialog;
