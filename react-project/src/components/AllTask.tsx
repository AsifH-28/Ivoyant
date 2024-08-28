import { useSelector } from "react-redux";
import { RootState } from "../ReduxStore/store";
import { Card, Checkbox } from "antd";
import "../Styeles/Card.scss";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CompleteTodo } from "../features/Todo";



export default function AllTask() {
  const dispatch = useDispatch()
  const [checked,setChecked] = useState<boolean>(false);
  const Todos = useSelector((state: RootState) => state.todo);
  const handleChange =(id:string) =>{
    setChecked(!checked)
    dispatch(CompleteTodo([id,checked]))
    

  }
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
    <Card
      style={{
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        margin: "50px",
        width:'60%',

      }}
      title="All Task"
      className="container"
    >
      <div style={{ padding: "20px", display:"flex",flexDirection:"column-reverse" }}>
        {Todos.map((item) => (
          <Card
            key={item.id}
            type="inner"
            className={"cardOuter"}
            title={item.title}
            extra={<>
             <EditModal id={item.id}/>
             <DeleteModal id={item.id}/>
            </>
            
            }
          >
            <div className={"cardInner"}>
              <span className={"description"}>{item.description}</span>
              <div className={"deadlineInfo"}>
                <span className={"deadlineLabel"}>Deadline:</span>
                <span className={"deadlineDate"}>
                  {item.dueDate?.toString().slice(0, 10)}
                </span>
                <span className={"time"}>{item.time}</span>
              </div>
              <Checkbox checked={item.completed} onChange={()=>{
                handleChange(item.id)
              }}></Checkbox>
            </div>
          </Card>
        ))}
      </div>
    </Card></div>
  );
}
