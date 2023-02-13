import React from "react";

export default function RetornaUser(props){
    function pergutaNome(){
        const nome= prompt("Qual seu nome?") 
       nome===""|| nome===null? setNomeuser(props.name):setNomeuser(nome);
        
    }
    function perguntaFoto(){
        const foto= prompt("Nova foto de Perfil?")
        foto===""|| foto===null || foto=== undefined? setUserfoto(props.img):setUserfoto(foto);
    }
    const [nomeuser, setNomeuser]= React.useState(props.name);
    const [userfoto, setUserfoto]= React.useState(props.img);

    
return(
<div class="usuario">
    <img src={userfoto} alt={props.alt} onClick={()=> perguntaFoto()} data-test="profile-image"/>
    <div class="texto">
        <span>
            <strong data-test="name">{nomeuser} </strong>
            <ion-icon name="pencil" onClick={()=> pergutaNome()} data-test="edit-name"
></ion-icon>
        </span>
    </div>
</div>
)
}