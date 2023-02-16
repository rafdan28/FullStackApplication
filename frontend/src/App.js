import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Signin from "./components/SigninComponents";
import Signup from "./components/SignupComponent";
import AllUserComponent from "./components/AllUserComponent";
import UserDetails from "./components/userDetails";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    // <Router>
    //     <div className="App">
    //         <nav className="navbar navbar-light bg-light">
    //             <div className="child">
    //                 <a className="navbar-brand" href="#">
    //                     <img
    //                         src="https://www.smsengineering.it/wp-content/uploads/2019/08/logo-20th-anniversary-sms-def.png"
    //                         className="me-2"
    //                         height="40"
    //                         alt="SMS 20th"
    //                         loading="lazy"
    //                     />
    //                     {/*<big>SMS Authenticated</big>*/}
    //                 </a>
    //             </div>
    //         </nav>
    //         <div className="auth-wrapper">
    //             <div className="auth-inner">
    //                 <Routes>
    //                     <Route exact path="/" element={<Signin />} />
    //                     <Route path="/sign-in" element={<Signin />} />
    //                     <Route path="/one/:email" exact component={OneUserList}></Route>
    //                     <Route path="/sign-up" element={<Signup />} />
    //                     <Route path="/list"  element={<AllUserComponent />}/>
    //                 </Routes>
    //             </div>
    //         </div>
    //     </div>
    // </Router>

    <Router>
        <div className="App">
            <nav className="navbar navbar-light bg-light">
                <div className="child">
                    <a className="navbar-brand" href="#">
                        <img
                            src="https://www.smsengineering.it/wp-content/uploads/2019/08/logo-20th-anniversary-sms-def.png"
                            className="me-2"
                            height="40"
                            alt="SMS 20th"
                            loading="lazy"
                        />
                        {/*<big>SMS Authenticated</big>*/}
                    </a>
                </div>
            </nav>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={isLoggedIn === "true" ? <Signin /> : <Signin />}
                />
                <Route path="/sign-in" element={<Signin />} />
                <Route path="/sign-up" element={<Signup />} />
                {/*<Route path="/list"  element={<AllUserComponent />}/>*/}
                <Route path="/userDetails/:email"  element={<UserDetails />} />
            </Routes>
        </div>
    </Router>
  );

}

export default App;
