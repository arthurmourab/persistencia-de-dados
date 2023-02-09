import React, { useState } from "react";
import "./BaseDialog.css";
import Button from "../buttons/Button";
import InputField from "../inputs/InputField";

const AgendaDialog = ({ isOpen, onCancel, onSuccessCallback }) => {
  //#region UseState and Variables
  const [newAgenda, setNewAgenda] = useState({
    date: "",
    time: "",
    situation: "",
    dateSituation: "",
    observations: "",
  });

  //#endregion

  //#region Handles

  const handleInputChange = (e) => {
    setNewAgenda({ ...newAgenda, [e.target.name]: e.target.value });
  };

  const postAgenda = (value) => {
    onSuccessCallback(value);
  };

  const handleSubmit = (state) => {
    postAgenda(state);
  };

  //#endregion

  return isOpen ? (
    <div className="dialog-popup">
      <div className="dialog-content">
        <div className="dialog-header">
          <p className="subheader">Nova agenda</p>
        </div>
        <div className="dialog-body">
          <div className="input-row">
            <div style={{ margin: "auto 0px" }}>
              <p className="body" style={{ margin: "0px 8px 0px 0px" }}>
                Data:
              </p>
            </div>
            <InputField
              name="date"
              value={newAgenda.date}
              inputStyle={{ width: "200px" }}
              inputLength={10}
              placeholder="Preencha a data"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-row">
            <div style={{ margin: "auto 0px" }}>
              <p className="body" style={{ margin: "0px 16px 0px 0px" }}>
                Hora:
              </p>
            </div>
            <InputField
              name="time"
              value={newAgenda.time}
              placeholder="Preencha a hora"
              inputLength={5}
              inputStyle={{ width: "200px" }}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-row">
            <div style={{ margin: "auto 0px" }}>
              <p className="body" style={{ margin: "0px 1px 4px 0px" }}>
                Situação:
              </p>
            </div>
            <InputField
              name="situation"
              value={newAgenda.situation}
              placeholder="Preencha a situação"
              inputLength={60}
              inputStyle={{ width: "200px" }}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-row">
            <div style={{ margin: "auto 0px" }}>
              <p className="body" style={{ margin: "0px 1px 4px 0px" }}>
                Data da situação:
              </p>
            </div>
            <InputField
              inputStyle={{ width: "200px" }}
              placeholder="Preencha a data"
              inputLength={10}
              name="dateSituation"
              value={newAgenda.dateSituation}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-row">
            <div style={{ margin: "auto 0px" }}>
              <p className="body" style={{ margin: "0px 1px 4px 0px" }}>
                Observações:
              </p>
            </div>
            <InputField
              inputStyle={{ width: "200px" }}
              placeholder="Preencha a observação"
              inputLength={200}
              name="observations"
              value={newAgenda.observations}
              onChange={handleInputChange}
            />
          </div>
          <div className="dialog-footer">
            <Button
              label="Salvar"
              onClick={() => handleSubmit(newAgenda)}
              buttonMargin={"0px 8px 0px 0px"}
            />
            <Button label="Cancelar" isDestructive onClick={onCancel} />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default AgendaDialog;
