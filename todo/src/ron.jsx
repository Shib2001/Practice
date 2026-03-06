import React from "react";
import { useState,useEffect } from "react";

const Ron = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        console.log(data.users)
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error is in Api", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              border: "1px solid #ddd",
              padding: "12px",
              marginBottom: "10px",
              borderRadius: "6px",
              backgroundColor: "#f7f7f7"
            }}
          >
            <p><strong>{user.name}</strong></p>
            <p><strong>{user.email}</strong></p>
            <p><strong>{user.phone}</strong></p>
            <p><strong>{user.address.city}</strong></p>
            <p><strong>{user.address.zipcode}</strong></p>
            <p><strong>{user.gender}</strong></p>



          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ron;
