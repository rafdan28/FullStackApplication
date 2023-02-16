import React, {Component} from 'react';
import UtenteService from "../Services/UtenteService";

export class AllUserComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        UtenteService.getAllUtenti().then((response) => {
            this.setState({ users: response.data})
        });
    }

    render (){
        return (
            <form>
                <div className="auth-wrapper">
                    <h1 className = "text-center">Lista utenti</h1>
                    <table className = "table table-striped">
                        <thead>
                        <tr>
                            <td> Nome </td>
                            <td> Cognome </td>
                            <td> Email </td>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.users.map(user =>
                                <tr key = {user.email}>
                                    <td> {user.nome}</td>
                                    <td> {user.cognome}</td>
                                    <td> {user.email}</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </form>
        )
    }
}

export default AllUserComponent;

