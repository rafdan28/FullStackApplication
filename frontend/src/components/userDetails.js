import React, { useEffect, useState } from "react";

import AdminHome from "./adminHome";
import UserHome from "./userHome";
import UtenteService from "../Services/UtenteService";
import {useParams} from "react-router-dom";

export default function UserDetails() {
  const [userData, setUserData] = useState("");
  const [admin, setAdmin] = useState(false);
  const {email} = useParams();

  useEffect(() => {
      UtenteService.getUtenteByEmail(email).then((res)=>{
          if(res.data.success === true){
              // alert(res.data.message);
              console.log(res.data.message)
              setAdmin(res.data.utente.admin);
              setUserData(res.data.utente);
          }
      });
  }, []);

  return admin ? <AdminHome userData={userData} /> : <UserHome userData={userData} />;
}
