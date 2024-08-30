import { useSelector } from "react-redux";
import { RootState } from "../ReduxStore/store";
import { Card } from "antd";
import '../Styeles/CompletedTaskDesign.css';

export default function CompletedTask() {
  const Todos = useSelector((state: RootState) => state.todo);

  return (
    <div className="completed-task-container">
      <Card
        className="main-card"
        title="Completed Tasks"
        bordered={false}
      >
        {Todos.filter(item => item.completed).map((item) => (
          <Card
            key={item.id}
            className="task-card"
            type="inner"
            title={item.title}
          >
            <div className="task-content">
              <span className="description">{item.description}</span>
              <div className="status">
                <span className="completed-status">Completed</span>
              </div>
            </div>
          </Card>
        ))}
      </Card>
    </div>
  );
}
