import posts from "./postsprops"
import CriaPost from "./Post"

export default function Posts(){
    return(
<div class="posts">

    {posts.map((pst)=><CriaPost  topo={pst.topo} conteudo={pst.conteudo} acoes={pst.acoes} curtidas={pst.curtidas}/>)}
    
</div>
)
}