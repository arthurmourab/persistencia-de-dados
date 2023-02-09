import React, { useState } from "react";
import "./BaseDialog.css";
import Button from "../buttons/Button";
import InputField from "../inputs/InputField";

const VaccineDialog = ({ isOpen, onCancel, onSuccessCallback }) => {

  //#region UseState and Variables
  const [newVaccine, setNewVaccine] = useState({
    title: "",
    description: "",
    doses: 0,
    frequency: 0,
    gap: 0,
  });

  //#endregion

  //#region Handles

  const handleInputChange = (e) => {
    setNewVaccine({ ...newVaccine, [e.target.name]: e.target.value });
  };

  const postVaccine = (value) => {
    onSuccessCallback(value);
  };

  const handleSubmit = (state) => {
    postVaccine(state);
  };

  //#endregion

  return isOpen ? (
    <div className="dialog-popup">
      <div className="dialog-content">
        <div className="dialog-header">
          <p className="subheader">Nova vacina</p>
        </div>
        <div className="dialog-body">
          <div className="input-row">
            <div style={{ margin: "auto 0px" }}>
              <p className="body" style={{ margin: "0px 8px 0px 0px" }}>
                Título:
              </p>
            </div>
            <InputField
              name="title"
              value={newVaccine.title}
              inputStyle={{ width: "200px" }}
              inputLength={60}
              placeholder="Preencha o título"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-row">
            <div style={{ margin: "auto 0px" }}>
              <p className="body" style={{ margin: "0px 16px 0px 0px" }}>
                Descrição:
              </p>
            </div>
            <InputField
              name="description"
              value={newVaccine.description}
              placeholder="Preencha a descrição"
              inputLength={200}
              inputStyle={{ width: "200px" }}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-row">
            <div style={{ margin: "auto 0px" }}>
              <p className="body" style={{ margin: "0px 1px 4px 0px" }}>
                Doses:
              </p>
            </div>
            <InputField
              inputStyle={{ width: "200px" }}
              placeholder="Preencha as doses"
              name="doses"
              value={newVaccine.doses}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-row">
            <div style={{ margin: "auto 0px" }}>
              <p className="body" style={{ margin: "0px 1px 4px 0px" }}>
                Periodicidade:
              </p>
            </div>
            <InputField
              inputStyle={{ width: "200px" }}
              placeholder="Preencha a periodicidade"
              name="frequency"
              value={newVaccine.frequency}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-row">
            <div style={{ margin: "auto 0px" }}>
              <p className="body" style={{ margin: "0px 1px 4px 0px" }}>
                Intervalo:
              </p>
            </div>
            <InputField
              inputStyle={{ width: "200px" }}
              placeholder="Preencha o intervalo"
              name="gap"
              value={newVaccine.gap}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="dialog-footer">
          <Button
            label="Salvar"
            onClick={() => handleSubmit(newVaccine)}
            buttonMargin={"0px 8px 0px 0px"}
          />
          <Button label="Cancelar" isDestructive onClick={onCancel} />
        </div>
      </div>
    </div>
  ) : null;
};

export default VaccineDialog;
