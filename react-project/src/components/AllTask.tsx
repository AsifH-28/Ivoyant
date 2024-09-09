import { useSelector } from "react-redux";
import { RootState } from "../ReduxStore/store";
import { Card } from "antd";
import "../Styeles/Card.scss";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CompleteTodo } from "../features/Todo";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import EmptyState from "./DefaultComponent";

export default function AllTask() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [checked, setChecked] = useState<boolean>(false);
  const Todos = useSelector((state: RootState) => state.todo);
 const newTodos = Todos.slice().reverse()

  const handleChange = (id: string) => {
    const newChecked = !checked;
    setChecked(newChecked);
    dispatch(CompleteTodo([id, newChecked]));
    if (newChecked) {
      notification.open({
        message: "Marked As Completed",
        description: "Click to see",
        onClick: () => {
          navigate("/completed-tasks");
        },
      });
    } else {
      notification.open({
        message: "Removed From Completed List",
        description: "Click to see",
        onClick: () => {
          navigate("/completed-tasks");
        },
      });
    }
  };

  function convertToDays(
    hours: number,
    minutes: number,
    seconds: number
  ): string {
    const days: number = Math.floor(hours / 24);
    const remainingHours: number = hours % 24;

    let result: string = "";

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

    return convertToDays(hours, minutes, seconds);
  };

  return (
    <div className="all-task-container">
      <Card className="main-card" title="All Tasks" bordered={false}>
        {newTodos.length>0?<><div className="task-list">
          {newTodos.map((item) => (
            <Card
              key={item.id}
              type="inner"
              className="task-card"
              title={item.title}
              extra={
                <>
                  <EditModal id={item.id} />
                  <DeleteModal id={item.id} />
                </>
              }
            >
              <div className="task-content">
                <span className="description">{item.description}</span>
                <div className="deadline-info">
                  <span className="deadline-label">Remaining Time:</span>
                  <span className="deadline-date">
                    {CalculateTime(item.dueDate as Date)}
                  </span>
                </div>
                <input 
                type="checkbox"
                  checked={item.completed}
                  onChange={() => handleChange(item.id)}
                />
              </div>
            </Card>
          ))}
        </div></> :<EmptyState message=""/>}
        
      </Card>
    </div>
  );
}
