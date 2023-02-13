 import React from "react";

export default function CriaPost(props) {
   
function salvar(){
    salvo==="bookmark"? setSalvo(props.acoes.save):setSalvo("bookmark");
   
}

function curtir(){
   curtida==="heart"? setCurtida(props.acoes.heart): setCurtida("heart") ;
   curtida==="heart"? setColor("#000000"): setColor("#ff0000");
   curtida==="heart"? setNumero(numero-1): setNumero(numero+1);
}

function curtirImg(){
    setCurtida("heart");
    setColor("#ff0000");
    let novonumero=0;
    novonumero=numero+1;
    numero === 3? setNumero(novonumero): setNumero(4);
}

const [curtida,setCurtida]= React.useState(props.acoes.heart);
const [salvo, setSalvo]= React.useState(props.acoes.save);
const [numero,setNumero]= React.useState(3);
const [color, setColor]= React.useState("#000000")

    return (
        <div class="post" data-test="post">
             < div class="topo" >

                <div class="usuario">
                    <img src={props.topo.img} alt={props.topo.alt} />
                    {props.topo.user}
                </div>
                <div class="acoes">
                    <ion-icon name={props.topo.dots}></ion-icon>
                </div>
            </div >

            <div class="conteudo">
                <img src={props.conteudo.img} data-test="post-image" alt={props.conteudo.alt} onClick={()=>curtirImg()}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={curtida} onClick={()=>curtir()} data-test="like-post" style={{color:color}} ></ion-icon>
                        <ion-icon name={props.acoes.chatbuble}></ion-icon>
                        <ion-icon name={props.acoes.plane}></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={salvo} onClick={()=>salvar()} data-test="save-post"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.curtidas.img} alt={props.curtidas.alt} />
                    <div class="texto">
                        Curtido por <strong>{props.curtidas.alt} </strong> e <strong >outras <span data-test="likes-number">{numero}</span> pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}