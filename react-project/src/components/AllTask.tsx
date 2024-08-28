import { useSelector } from "react-redux";
import { RootState } from "../ReduxStore/store";
import { Card } from "antd";
import "../Styeles/Card.scss";

export default function AllTask() {
  const Todos = useSelector((state: RootState) => state.todo);
  console.log(Todos);
  return (
    <Card
      style={{
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        margin: "50px",
      }}
      title="All Task"
    >
      {Todos.map((item) => {
        return (
          <div style={{ padding: "20px" }}>
            {Todos.map((item) => (
              <Card
                key={item.id}
                type="inner"
                className={"cardOuter"}
                title={item.title}
                extra={
                  <a href="#" className={"moreLink"}>
                    More
                  </a>
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
                </div>
              </Card>
            ))}
          </div>
        );
      })}
    </Card>
  );
}
