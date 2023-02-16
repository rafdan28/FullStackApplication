import React from "react";

export default function UserHome({ userData }) {
  function logOut() {
    window.localStorage.setItem("loggedIn", false);
    window.localStorage.clear();
    window.location.href = "/sign-in";
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner2">
        <div>
          Full name<h1>{userData.nome} {userData.cognome}</h1>
          Email<h1>{userData.email}</h1>
          Rapporto<h1>{userData.rapporto}</h1>
          <br />
          <center>
            <button onClick={logOut} className="btn btn-primary">
              Esci
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}
