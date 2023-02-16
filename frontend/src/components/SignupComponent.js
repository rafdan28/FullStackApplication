import React, { useState } from "react";
import UtenteService from "../Services/UtenteService";
export default function Signup(){

    const [nome, setNome] = useState("");
    const [cognome, setCognome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [admin, setAdmin] = useState("");
    const [rapporto, setRapporto] = useState("");
    const enumRapporto = ["Cliente", "Fornitore", "Dipendente"];

    function saveUtenteHandle(e) {
        e.preventDefault();
        let utente = {nome, cognome, email, password, admin, rapporto};
        UtenteService.signUpUtente(utente).then(res=>{
            if (res.data.success === true) {
                window.alert(res.data.message);
                window.location.href = "./sign-in";
            } else {
                alert("Qualcosa è andato storto... Riprova");
            }
        });
    }

    function handlerRadioButton(value){
        if (value === "USER") setAdmin(false);
        else setAdmin(true);
    }

    function handleRapporto(value){
        if (value === "Cliente") setRapporto("CLI");
        else if (value === "Fornitore") setRapporto("FOR");
        else if (value === "Dipendente")  setRapporto("DIP");
        // else alert("Inserisci Cliente, Fornitore o Dipendente!!");
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form onSubmit={saveUtenteHandle}>
                    <h3>Registrati</h3>
                    <center>
                    <div>
                        <input
                            type="radio"
                            name="Admin"
                            value="USER"
                            onChange={(e) => handlerRadioButton(e.target.value)}
                        />
                        Utente &ensp;
                        <input
                            type="radio"
                            name="Admin"
                            value="ADMIN"
                            onChange={(e) => handlerRadioButton(e.target.value)}
                        />
                        Admin
                    </div>
                    </center>

                    <div className="mb-3">
                        <label>Nome</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Inserisci il nome"
                                onChange={(e) => setNome(e.target.value)}
                            />
                    </div>

                    <div className="mb-3">
                        <label>Cognome</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Inserisci il cognome"
                            onChange={(e) => setCognome(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Inserisci l'email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Inserisci la password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Rapporto</label>
                        <input
                            type="rapporto"
                            className="form-control"
                            placeholder="Inserisci il rapporto"
                            onChange={(e) => handleRapporto(e.target.value)}
                        />
                    </div>

                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                            Registrati
                        </button>
                    </div>
                    <p className="forgot-password text-right">
                        Sei già registrato? <a href="/sign-in">Accedi</a>
                    </p>
                </form>
            </div>
        </div>
    );

}

