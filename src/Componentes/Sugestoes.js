import sugestaoprops from "./sugestaoprops"
import ConstroiSugestão from "./Sugestao"

export default function Sugestoes(){
  return(
<div class="sugestoes">
  <div class="titulo">
    Sugestões para você
    <div>Ver tudo</div>
  </div>
{sugestaoprops.map((sugestao)=> <ConstroiSugestão img={sugestao.img} alt={sugestao.alt} nome={sugestao.nome} razao={sugestao.razao} seguir={sugestao.seguir}/>)}
</div>
)
}