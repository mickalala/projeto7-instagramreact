import RetornaUser from "./User"
import userinfo from "./userprops"

export default function Usuario() {
  return (
    <>
    {userinfo.map((u)=> <RetornaUser img={u.img} alt={u.alt} name={u.name}/>)}
    </>
  )
}