import stories from "./storiesprops"
import ConstroiStorie from "./storydiv"

export default function Stories(){
return (
<div class="stories">
    {stories.map((story)=><ConstroiStorie img={story.img} alt={story.alt} user={story.user}/>)}
    

    <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
    </div>
</div>
)
}