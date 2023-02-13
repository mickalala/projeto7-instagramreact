
export default function ConstroiSugestão(props){
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.img} alt={ props.alt} />
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">{props.razao}</div>
                </div>
            </div>

            <div class="seguir">{props.seguir}</div>
        </div>
    )
}
