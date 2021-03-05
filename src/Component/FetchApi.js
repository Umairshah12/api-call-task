import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function FetchApi() {
  const [list, setList] = useState([]);
  useEffect(async () => {
    try {
      let res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      let data = await res.json();
      setList(data);
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  return (
    <div>
      <h1>USET DATA LIST</h1>
      <div style={{ float: "left" }}></div>
      {list.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#id</th>
              <th>name</th>
              <th>city</th>
              <th>suit</th>
              <th>street</th>
              <th>zipcode</th>
              <th>company</th>
              <th>email</th>
              <th>phone</th>
              <th>username</th>
              <th>website</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => {
              console.log(item);
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.address.city}</td>
                  <td>{item.address.suite}</td>
                  <td>{item.address.street}</td>
                  <td>{item.address.zipcode}</td>
                  <td>{item.company.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.username}</td>
                  <td>{item.website}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <div class="spinner-border text-primary" role="status"></div>
      )}
    </div>
  );
}

export default FetchApi;
