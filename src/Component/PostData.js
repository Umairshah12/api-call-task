import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
function PostData() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [post, setPost] = useState("");
  const [success, setSuccess] = useState([]);
  const [error, setError] = useState();

  console.log("succes", success);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: firstName,
        lastname: lastName,
        email: email,
        post: post,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(
        (json) => setSuccess(json),
        setFirstName(""),
        setLastName(""),
        setEmail(""),
        setPost("")
      )
      .catch((err) => {
        setError(err);
      });
  };
  return (
    <div>
      <div className="container">
        <div className="col-md-12">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    type="text"
                    name="name"
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    placeholder="last Name"
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Enter email"
                    type="email"
                    name="email"
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    value={post}
                    onChange={(e) => {
                      setPost(e.target.value);
                    }}
                    placeholder="Post"
                    type="text"
                    name="Post"
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <Button type="submit" variant="outline-success">
                  Add User Detail
                </Button>
              </div>
            </div>
          </form>
          <br />
        </div>
      </div>

      <div>
        <h1>SUCCESS DATA</h1>
        <p>First Name:{success.name}</p>
        <p>Last Name:{success.lastname}</p>
        <p>Email:{success.email}</p>
        <p>Post:{success.post}</p>
      </div>
    </div>
  );
}

export default PostData;
