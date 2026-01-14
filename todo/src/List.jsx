import React from "react";

const List = () => {
  const users = [
    { name: "Shivam", age: 20, email: "shivam@gmail.com" },
    { name: "Shivam", age: 20, email: "shivam@gmail.com" },
    { name: "Shivam", age: 20, email: "shivam@gmail.com" },
    { name: "Shivam", age: 20, email: "shivam@gmail.com" },
    { name: "Shivam", age: 20, email: "shivam@gmail.com" },
  ];

  return (
    
    <div className="flex justify-center items-center min-h-screen">
      <h2>List Component</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <p>
              <strong>username:{user.name}</strong>
            </p>
            <hr></hr>
            <p>
              <strong>age:{user.age}</strong>
            </p>
            <hr></hr>
            <p>
              <strong>email:{user.email}</strong>
            </p>
            <hr></hr>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
