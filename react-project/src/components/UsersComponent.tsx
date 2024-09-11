import React, { Fragment } from "react";
import { useGetusersQuery } from "../services/api";

export default function UsersComponent() {
  const { data, isLoading, isError, isSuccess } = useGetusersQuery();
  return (
    <div>
      <table border={2}>
        <th>name</th>
        <th>age</th>
        <th>occupation</th>
    
      {data?.map((user) => {
        return (
          <Fragment key={Math.random() + 22}>
            <tr>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.occupation}</td>
            </tr>
          </Fragment>
        );
      })}
        </table>
    </div>
  );
}
