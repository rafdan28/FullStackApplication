import React, { useEffect, useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UtenteService from "../Services/UtenteService";
export default function AdminHome({ userData }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllUser();
  }, []);

  function getAllUser() {
    UtenteService.getAllUtenti().then((response) => {
      console.log(response, "userData");
      setData(response.data);
    });
  }

  function logOut() {
    window.localStorage.setItem("loggedIn", false);
    window.localStorage.clear();
    window.location.href = "/sign-in";
  }

  function deleteUtente(email){
    if (window.confirm(`Sei sicuro di voler cancellare "${email}" ?`)) {
      //   fetch("http://localhost:5000/deleteUser", {
      //     method: "POST",
      //     crossDomain: true,
      //     headers: {
      //       "Content-Type": "application/json",
      //       Accept: "application/json",
      //       "Access-Control-Allow-Origin": "*",
      //     },
      //     body: JSON.stringify({
      //       userid: id,
      //     }),
      //   })
      //     .then((res) => res.json())
      //     .then((data) => {
      //       alert(data.data);
      //       getAllUser();
      //     });
      // } else {
      // }
      UtenteService.deleteUtenteByEmail(email).then((response) => {
        alert(response.data.message);
        getAllUser();
      });
    }
  }

  function handlerAdmin(admin){
    if(admin === true){
      return "Si";
    }
    else return "No";
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner" style={{ width: "auto" }}>
        <h3>Benvenuto/a {userData.nome}</h3>
        <table style={{ width: 500 }}>
          <tr>
            <th>Nome</th>
            <th>Cognome</th>
            <th>Email</th>
            <th>Rapporto</th>
            <th>Admin</th>
            <th>Delete</th>
          </tr>
          {data.map((user) => {
            return (
              <tr>
                <td>{user.nome}</td>
                <td>{user.cognome}</td>
                <td>{user.email}</td>
                <td>{user.rapporto}</td>
                <td>{handlerAdmin(user.admin)}</td>
                <td>
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => deleteUtente(user.email)}
                  />
                </td>
              </tr>
            );
          })}
        </table>
        <br/>
        <center>
          <button onClick={logOut} className="btn btn-primary">
            Esci
          </button>
        </center>
      </div>
    </div>
  );
}
