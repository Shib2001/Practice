// import React from "react";

// function Child({ name,email,age }) {
//   return (
//     <div>
//       <p>Username from parent: {name}</p>
//       <p>Email from parent: {email}</p>
//       <p>Age from parent: {age}</p>
//     </div>
//   );
// }

// export default Child;


import React from "react";

function Child({ user }) {
  return (
    <div>
      <h3>Child Component</h3>
      <ol>
      <li><strong>Name:</strong> {user.name}</li>
      <li><strong>Age:</strong> {user.age}</li>
      <li><strong>Email:</strong> {user.email}</li>
      </ol>
    </div>
  );
}

export default Child;
