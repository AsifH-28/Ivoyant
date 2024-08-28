import { useSelector } from "react-redux";
import { RootState } from "../ReduxStore/store";

export default function CompletedTask() {
    const Todos = useSelector((state: RootState) => state.todo);
  return (
    <div>
      {Todos.map((item)=>{
        return(<>
        <span>
            {item.completed?<>
            <div style={{margin:"10px"}}>
            <span>
                {item.title}
            </span>
            <span>
                {item.description}
            </span></div>
            </>:<></>}
        </span>
        </>)
      })}
    </div>
  )
}
