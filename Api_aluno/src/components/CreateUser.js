import { useState } from "react";
import axios from "axios";
import { IMaskInput }  from "react-imask";

function CreateUser(){

    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [rg, setRG] = useState("");
    const [telefoneAluno, setTelefoneAluno] = useState("");
    const [telefoneResponsavel, setTelefoneResponsavel] = useState("");
    const [email, setEmail] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");

    function creatUser(event){

        event.preventDefault();

        alert(`NOME: ${name} CPF: ${cpf} RG: ${rg} SEU TELEFONE: ${telefoneAluno} TELEFONE DO RESPONSÁVEL: ${telefoneResponsavel} EMAIL: ${email} DATA DE NASCIMENTO: ${dataNascimento}`)
        
        let user = JSON.stringify({name:name, cpf:cpf, rg:rg, telefoneAluno:telefoneAluno, telefoneResponsavel:telefoneResponsavel, email:email, dataNascimento:dataNascimento,}); //converte dado para json
        console.log(user);

        //axios aqui
            axios.post('https://reqres.in/api/users',user)
            .then((response)=>{
                console.log(response);
                //alert(response);
        })
            .catch((error)=>{
            console.log(error);
            alert(error);
        });
    }

    return(
        <form onSubmit={creatUser} className="form">

            <h1>Formulário de cadastro</h1>

            <input
                type="text"
                placeholder="digite seu nome aqui"
                value={name}
                onChange={(event)=>{setName(event.target.value)}}
            />

            <IMaskInput
                type="text"
                mask = "000.000.000.00"
                placeholder="digite seu CPF aqui"
                value={cpf}
                onChange={(event)=>{setCpf(event.target.value)}}
            />

            <IMaskInput
                type="text"
                mask = "00.000.000-0"
                placeholder="digite seu RG aqui"
                value={rg}
                onChange={(event)=>{setRG(event.target.value)}}
            />

            <IMaskInput
                type="text"
                mask = "(00) 0 0000-0000"
                placeholder="digite seu telefone aqui"
                value={telefoneAluno}
                onChange={(event)=>{setTelefoneAluno(event.target.value)}}
            />

            <IMaskInput
                type="text"
                mask = "(00) 0 0000-0000"
                placeholder="digite o telefone do seu responsável aqui"
                value={telefoneResponsavel}
                onChange={(event)=>{setTelefoneResponsavel(event.target.value)}}
            />

            <input
                type="email"
                placeholder="digite seu email aqui"
                value={email}
                onChange={(event)=>{setEmail(event.target.value)}}
            />

            <input
                type="date"
                placeholder="digite sua data de nascimento aqui"
                value={dataNascimento}
                onChange={(event)=>{setDataNascimento(event.target.value)}}
            />

            <button type="submit">Cadastrar</button>
        
        </form>
    );
}

export default CreateUser;