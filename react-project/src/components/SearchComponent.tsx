import { useSelector,useDispatch } from "react-redux"
import { Rootstate,dispatch } from "../Redux Store/store"
import { ChangeEvent, useState } from "react";
import { user } from "../Interface/interface";

export default function SearchComponent() {
    const users = useSelector((state:Rootstate)=>state.api.queries['getusers(undefined)']?.data) as user[];
    const [filtereduser,setfiltereduser] = useState<user[]>();
    const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
        const name = e.target.value;
        const user = users.filter((item)=>item.name==name);
        setfiltereduser(user)
     
    }
    
  return (
    <div style={{margin:"2px", padding:"10px"}}>
      <input type="text" onChange={handleChange}/>
      <div>
      <table border={1} key={Math.random()+22} style={{margin:"10px"}}>
      {filtereduser?.map((item)=>{
        return  <tr><td>{item.name} </td><td>{item.age}</td><td> {item.occupation}</td></tr>
      })}
      </table>
      </div>
    </div>
  )
}
