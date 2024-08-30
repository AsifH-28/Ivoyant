import { Link } from "react-router-dom";

interface BreadCrumParams{
    path:string,
    label:string,
}
export type items ={
    items:BreadCrumParams[];
}

export default function BreadCrum({items}:items) {
    console.log(items)
  return (
<nav>
    <div style={{display:"flex",justifyContent:"flex-start",alignItems:"flex-start", flexDirection:"column"}}>
        {items.map((i:BreadCrumParams)=>{
            return(<Link style={{margin:"10px"}} key={Math.random()+23} to={i.path}>{i.label}</Link>
            )
        })}
    </div>
</nav>
  )
}
