import React, { useState } from "react";
import UtenteService from "../Services/UtenteService";

export default function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function signinHandler(e) {
        e.preventDefault();
        if(email === null && password === null)
            alert("Inserisci Email & Password");
        else if(email === null || password === null)
            alert("Inserisci Email & Password");
        else{
            UtenteService.signIn(email, password).then(res=>{
                if(res.data.success === true){
                    alert(res.data.message);
                    window.localStorage.setItem("loggedIn", true);
                    window.location.href = `./userDetails/${email}`;
                }
                else if(res.data.success === false){
                    alert(res.data.message + "!! Riprova...");
                }
            });
        }
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form onSubmit={signinHandler}>
                    <h3>Sign In</h3>

                    <div className="mb-3">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            // name="email"  value={this.state.email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            // name="password" value={this.state.password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                            />
                            <label className="custom-control-label" htmlFor="customCheck1">
                                Remember me
                            </label>
                        </div>
                    </div>

                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                            Accedi
                        </button>
                    </div>

                    <p className="forgot-password text-right">
                        Non sei registrato? <a href="/sign-up">Registrati</a>
                    </p>

                    {/*<p className="forgot-password text-right">*/}
                    {/*    <a href="#">Recupera password</a>*/}
                    {/*</p>*/}
                </form>
            </div>
        </div>
    );
}
