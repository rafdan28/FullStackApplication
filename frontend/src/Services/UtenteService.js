import axios from 'axios'

const REST_API_URL = 'http://localhost:8080/api';

class UtenteService {

    getAllUtenti(){
        return axios.get(`${REST_API_URL}/utente/allutenti`);
    }

    getUtenteByEmail(email){
        return axios.get(`${REST_API_URL}/utente/utenteByEmail/${email}`);
    }

    signIn(email, password){
        return axios.get(`${REST_API_URL}/authentication/signin?email=${email}&password=${password}`);
    }

    signUpUtente(utente){
        return axios.post(`${REST_API_URL}/authentication/signup`, utente);
    }

    deleteUtenteByEmail(email){
        return axios.delete(`${REST_API_URL}/utente/deleteUtente/${email}`);
    }

}

export default new UtenteService();

