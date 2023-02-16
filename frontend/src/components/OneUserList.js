import React, { Component } from 'react'
import UtenteService from "../Services/UtenteService";

class OneUserList extends Component {

    constructor(props){
        super(props);
        this.state={
            email: this.props.match.params.email,
            nome:"",
            cognome:"",
            password:"",
            admin: false,
            rapporto: "",
            data:[],
            message : null
        }
        this.logout= this.logout.bind(this);
        this.modificaUtente=this.modificaUtente.bind(this);
    
    }

    componentDidMount(){
        UtenteService.getUtenteByEmail(this.state.email).then((response)=>{
            console.log(response.data.data)
            this.setState({data:response.data.data});
            this.props.history.push(`/one/${this.state.email}`);
        });
    }


    logout(){
        this.props.history.push('/');
    }

    modificaUtente(email){
        // this.props.history.push(`/update-employee/${id}`);
    }
   

    render() {
        return (
            // <form>
            //     <div className="auth-wrapper">
            //         <h1 className = "text-center">Lista utenti</h1>
            //         <table className = "table table-striped">
            //             <thead>
            //             <tr>
            //                 <td> Nome </td>
            //                 <td> Cognome </td>
            //                 <td> Email </td>
            //             </tr>
            //             </thead>
            //             <tbody>
            //             {
            //                 this.state.users.map(user =>
            //                     <tr key = {user.email}>
            //                         <td> {user.nome}</td>
            //                         <td> {user.cognome}</td>
            //                         <td> {user.email}</td>
            //                     </tr>
            //                 )
            //             }
            //             </tbody>
            //         </table>
            //     </div>
            // </form>

            <div>
                <br/>
                <h2> Dettagli Utente </h2>
                <br/>
                <div className = "row">
                <div className="d-grid gap-2 d-md-block">
                <button type="button" className="btn btn-danger" onClick={this.logout} >ESCI</button>
                <br/>
                <br/> 
                 </div>
                 </div>
                 <br></br>
                <table className="table table-hover" >
                    <thead>
                    <tr className="bg-info text-white">
                    <th>Email</th>
                    <th>Nome</th>
                    <th>Cognome</th>
                    <th>Admin</th>
                    <th>Rapporto</th>
                    <th>UPDATE</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.data.map((utente)=>
                            <tr key={utente.email}>
                                <td>{utente.email}</td>
                                <td>{utente.nome}</td>
                                <td>{utente.cognome}</td>
                                <td>{utente.admin}</td>
                                <td>{utente.rapporto}</td>
                                <td> <button className="btn btn-warning" onClick={()=>this.modificaUtente(utente.email)} >UPDATE</button> </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                
            </div>
        )
    }
}

export default OneUserList
