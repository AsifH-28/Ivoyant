import { useEffect, useState } from "react";
import "./App.css";
import { todos, url, todo } from "./Interface/Interface";
import GetRequestComponent from "./Components/GetRequestComponent"
import PostRequestComponent from "./Components/PostRequestComponent";

function App() {
  const [flag, setFlag] = useState(false);
  const [PutMethodStatus, setPutMethodStatus] = useState(false);
  const Fetch = async () => {
    const queryParams = new URLSearchParams({ id: "1", completed: "false" });
    const formattedQueryParams = queryParams.toString();
    const response = await fetch(`${url}?${formattedQueryParams}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = (await response.json()) as todos;
    console.log(data);
  };
  useEffect(() => {
    Fetch();
  }, []);

  const postData = async () => {
    const bodyData: todo = {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    };
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      });
      response.ok ? setFlag(true) : setFlag(false);
    } catch (err) {
      console.log(err);
    }
  };

  const UpdateDate = async (id: number) => {
    const updatedData = {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: true,
    };
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );

      response.ok ? setPutMethodStatus(true) : setPutMethodStatus(false);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  const Delete = async (id: number) => {
    const response = await fetch(`${url}${id}`, {
      method: "DELETE",
    });
    console.log(response);
  };

  return (
    <>
      <GetRequestComponent />
      <PostRequestComponent />
      <button onClick={postData}>Post Data</button>
      {flag ? <p>U have successfully Added the Data</p> : <p></p>}
      <button
        onClick={() => {
          UpdateDate(1);
        }}
      >
        Update Button
      </button>
      {PutMethodStatus ? (
        <p>U have successfully updated the first todo</p>
      ) : (
        <p></p>
      )}
      <button
        onClick={() => {
          Delete(2);
        }}
      >
        Delete
      </button>
    </>
  );
}

export default App;
