// import React, { useState } from "react";
// import Child from "./Child";

// function Parent() {
//   const [username, setUsername] = useState("Shiv");
//   const [email, setEmail] = useState("shiv@gmail.com");
//   const [age, setAge] = useState(21);

//   return (
//     <div>
//       <h2>Parent Component</h2>
//       <Child name={username} email={email} age={age} />
//     </div>
//   );
// }

// export default Parent;



import React from "react";
import Child from "./Child";

function Parent() {
  const users = [
    { name: "Shiv", age: 23, email: "shiv@gmail.com" },
    { name: "Akash", age: 45, email: "akash@gmail.com" },
    { name: "Rajesh", age: 67, email: "rajesh@gmail.com" },
    { name: "Niggesh", age: 78, email: "niggesh@gmail.com" },
    { name: "Lokesh", age: 22, email: "lokesh@gmail.com" }
  ];

  return (
    <div>
      <h2>Parent Component</h2>
      <ol>
      {users.map((user, index) => (
        <li key={index}>
        <Child user={user} />
        </li>
      ))}
      </ol>
    </div>
  );
}

export default Parent;
