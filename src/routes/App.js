import "./App.css";
import Button from "../components/buttons/Button";
import React, { useState } from "react";
import VaccineDialog from "../components/dialogs/VaccineDialog";
import UserDialog from "../components/dialogs/UserDialog";
import AgendaDialog from "../components/dialogs/AgendaDialog";
import VaccineItem from "../components/items/VaccineItem";
import UserItem from "../components/items/UserItem";
import AgendaItem from "../components/items/AgendaItem";

function App() {
  
/* 
TO-DOs
em agenda, colocar status Agendado, Cancelado e Realizado
em agenda agenda tem que ser possível selecionar um usuário
em vacinas pode ter periodicidade por dia, semanas, meses e anos
em vacinas intervalo tem a ver com periodicidade, exemplo, 10 dias
*/

  const [vaccines, setVaccines] = useState([
    {
      title: "Vacina Pfizer teste",
      description: "Novas vacinas 2023",
      doses: 200,
      frequency: 1,
      gap: 10,
    }
  ]);
  const [agendas, setAgendas] = useState([
    {
      date: "20/02/2022",
      time: "18:00",
      situation: "Reservado",
      dateSituation: "10:00",
      observations: "Vacina está reservada.",
    }
  ]);
  const [users, setUsers] = useState([ 
    {
      name: "Teste",
      birthDate: "20/02/2022",
      sex: "M",
      address: "Teste",
      number: 2,
      sector: "Teste",
      city: "Goiania",
      uf: "GO",
      allergies : [
        {
          text: "teste"
        },
        {
          text: "teste"
        },
        {
          text: "teste"
        }
      ]
    }
   ]);

  const [isVaccineModalOpen, setIsVaccinesModalOpen] = useState(false);
  const [isAgendaModalOpen, setIsAgendaModalOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);

  const onAddedItem = (value, target) => {
    if (target === "vaccine") {
      setVaccines((previous) => [...previous, value]);
      setIsVaccinesModalOpen(false);
    }
    else if (target === "agenda") {
      setAgendas((previous) => [...previous, value]);
      setIsAgendaModalOpen(false);
    }
    else if (target === "user") {
      setUsers((previous) => [...previous, value]);
      setIsUserModalOpen(false);
    }
  }

  const toggleModal = (value) => {
    if (value === "vaccine") {
      setIsVaccinesModalOpen((previous) => !previous);
    }
    else if (value === "agenda") {
      setIsAgendaModalOpen((previous) => !previous);
    }
    else if (value === "user") {
      setIsUserModalOpen((previous) => !previous);
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
          <div className="section-children">
            {vaccines.map((item, index) => {
              return (
                <div style={{margin: "auto 16px auto 0px"}}>
                  <VaccineItem key={index} item={item} />
                </div>
              )
            })}
          </div>
        </div>
        <div className="section-item">
          <div className="section-actions">
            <h4 className="section-header">Agendas</h4>
            <Button
              label="+"
              width={32}
              fontSize={20}
              buttonMargin="16px 0px 0px 8px"
              onClick={() => toggleModal("agenda")}
            />
            {isAgendaModalOpen ? (
              <AgendaDialog
                isOpen={isAgendaModalOpen}
                onCancel={() => toggleModal("agenda")}
                onSuccessCallback={() => onAddedItem("agenda")}
              />
            ) : null}
          </div>
          <div className="section-children">
          {agendas.map((item, index) => {
              return (
                <div style={{margin: "auto 16px auto 0px"}}>
                  <AgendaItem key={index} item={item} />
                </div>
              )
            })}
          </div>
        </div>
        <div className="section-item">
          <div className="section-actions">
            <h4 className="section-header">Usuários</h4>
            <Button
              label="+"
              width={32}
              fontSize={20}
              buttonMargin="16px 0px 0px 8px"
              onClick={() => toggleModal("user")}
            />
            {isUserModalOpen ? (
              <UserDialog
                isOpen={isUserModalOpen}
                onCancel={() => toggleModal("user")}
                onSuccessCallback={() => onAddedItem("user")}
              />
            ) : null}
          </div>
          <div className="section-children">
          {users.map((item, index) => {
              return (
                <div style={{margin: "auto 16px auto 0px"}}>
                  <UserItem key={index} item={item} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
