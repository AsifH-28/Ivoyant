import { useSelector } from "react-redux";
import { RootState } from "../ReduxStore/store";
import { Card } from "antd";
import "../Styeles/CompletedTaskDesign.css";
import EmptyState from "./DefaultComponent";

export default function CompletedTask() {
  const Todos = useSelector((state: RootState) => state.todo);
  const formatDate =(item:any) =>{
    const date = new Date(item?.dueDate);
    const formattedDate = date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return formattedDate;
  }

  return (
    <div className="completed-task-container">
      {Todos.length > 0 ? (
        <>
          <Card className="main-card" title="Completed Tasks" bordered={false}>
            {Todos.filter((item) => item.completed).map((item) => (
              <Card
                key={item.id}
                className="task-card"
                type="inner"
                title={item.title}
              >
                <div className="task-content">
                  <span className="description">{item.description}</span>
                  <div className="status">
                    <span></span>
                    <span>DeadLine For This Task {formatDate(item)}</span>
                    <span className="completed-status">Completed</span>
                  </div>
                </div>
              </Card>
            ))}
          </Card>
        </>
      ) : (
        <EmptyState message="None of your tasks are completed" />
      )}
    </div>
  );
}
