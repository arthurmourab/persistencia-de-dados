import "./App.css";
import Button from "../components/buttons/Button";
import React, { useState, useEffect } from "react";
import VaccineDialog from "../components/dialogs/VaccineDialog";

function App() {
  
  const [vaccines, setVaccines] = useState([]);
  const [allergies, setAllergies] = useState([]);
  const [users, setUsers] = useState([]);
  const [agendas, setAgendas] = useState([]);

  const [isVaccineModalOpen, setIsVaccinesModalOpen] = useState(false);
  const [isAllergyModalOpen, setIsAllergyModalOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isAgendaModalOpen, setIsAgendaModalOpen] = useState(false);

  const onAddedItem = (value, target) => {
    if (target === "vaccine") {
      setVaccines((previous) => [...previous, value]);
      setIsVaccinesModalOpen(false);
    }
    else if (target === "allergy") {
      setAllergies((previous) => [...previous, value]);
      setIsAllergyModalOpen(false);
    }
    else if (target === "user") {
      setUsers((previous) => [...previous, value]);
      setIsUserModalOpen(false);
    }
    else if (target === "agenda") {
      setAgendas((previous) => [...previous, value]);
      setIsAgendaModalOpen(false);
    }
  }

  const toggleModal = (value) => {
    if (value === "vaccine") {
      setIsVaccinesModalOpen((previous) => !previous);
    }
    else if (value === "allergy") {
      setIsAllergyModalOpen((previous) => !previous);
    }
    else if (value === "user") {
      setIsUserModalOpen((previous) => !previous);
    }
    else if (value === "agenda") {
      setIsAgendaModalOpen((previous) => !previous);
    }
  }

  return (
    <div className="app">
      <div className="app-header">
        <h3 className="header" style={{ color: "white" }}>
          Agenda vacinação
        </h3>
      </div>
      <div className="sections-container">
        <div className="section-item">
          <div className="section-actions">
            <h4 className="section-header">Vacinas</h4>
            <Button
              label="+"
              labelMargin="-20px"
              width={32}
              fontSize={20}
              buttonMargin="16px 0px 0px 8px"
              onClick={() => toggleModal("vaccine")}
            />
            {isVaccineModalOpen ? (
              <VaccineDialog
                isOpen={isVaccineModalOpen}
                onCancel={() => toggleModal("vaccine")}
                onSuccessCallback={() => onAddedItem("vaccine")}
              />
            ) : null}
          </div>
          <div className="vaccines-container"></div>
        </div>
        <div className="section-item">
          <div className="section-actions">
            <h4 className="section-header">Alergias</h4>
            <Button
              label="+"
              labelMargin="-20px"
              width={32}
              fontSize={20}
              buttonMargin="16px 0px 0px 8px"
              onClick={() => toggleModal("allergy")}
            />
          </div>
          <div className="allergies-container"></div>
        </div>
        <div className="section-item">
          <div className="section-actions">
            <h4 className="section-header">Usuários</h4>
            <Button
              label="+"
              labelMargin="-20px"
              width={32}
              fontSize={20}
              buttonMargin="16px 0px 0px 8px"
              onClick={() => toggleModal("user")}
            />
          </div>
          <div className="users-container"></div>
        </div>
        <div className="section-item">
          <div className="section-actions">
            <h4 className="section-header">Agendas</h4>
            <Button
              label="+"
              labelMargin="-20px"
              width={32}
              fontSize={20}
              buttonMargin="16px 0px 0px 8px"
              onClick={() => toggleModal("agenda")}
            />
          </div>
          <div className="agendas-container"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
