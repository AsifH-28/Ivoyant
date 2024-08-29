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
  const dispatch = useDispatch();
  const [checked, setChecked] = useState<boolean>(false);
  const Todos = useSelector((state: RootState) => state.todo);
  const handleChange = (id: string) => {
    setChecked(!checked);
    dispatch(CompleteTodo([id, checked]));
  };
  function convertToDays(hours: number, minutes: number, seconds: number): string {
    
    const days: number = Math.floor(hours / 24);
    const remainingHours: number = hours % 24;
  
  
    let result: string = '';
  
    if (days > 0) {
      result += `${days} days, `;
    }
    result += `${remainingHours} hours, ${minutes} minutes, ${seconds} seconds`;
  
    return result;
  }

  const CalculateTime = (inputTime: Date) => {
    const date = new Date(inputTime);
    const BrowserTime = new Date();
    const differenceInMs = date.getTime() - BrowserTime.getTime();

    const hours = Math.floor(differenceInMs / (1000 * 60 * 60));
    const minutes = Math.floor(
      (differenceInMs % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((differenceInMs % (1000 * 60)) / 1000);
    console.log(hours);
    console.log(minutes);
    setTimeout(()=>{
      console.log("Time Up");
    },differenceInMs)
   

    return  convertToDays(hours,minutes,seconds);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          margin: "50px",
          width: "60%",
        }}
        title="All Task"
        className="container"
      >
        <div
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column-reverse",
          }}
        >
          {Todos.map((item) => (
            <Card
              key={item.id}
              type="inner"
              className={"cardOuter"}
              title={item.title}
              extra={
                <>
                  <EditModal id={item.id} />
                  <DeleteModal id={item.id} />
                </>
              }
            >
              <div className={"cardInner"}>
                <span className={"description"}>{item.description}</span>
                <div className={"deadlineInfo"}>
                  <span className={"deadlineLabel"}>Deadline:</span>
                  <span className={"deadlineDate"}>
                    {CalculateTime(item.dueDate as Date)}
                  </span>
                </div>
                <Checkbox
                  checked={item.completed}
                  onChange={() => {
                    handleChange(item.id);
                  }}
                ></Checkbox>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}
