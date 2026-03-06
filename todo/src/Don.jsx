// import { useEffect, useState } from "react";

// function UserListFromAPI() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://dummyjson.com/users")
//       .then(res => res.json())
//       .then((data) => {
//         setUsers(data.users); // 👈 actual array
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error("API Error:", err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <p style={{ textAlign: "center" }}>Loading users...</p>;
//   }

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h2 style={{ textAlign: "center" }}>Users (Public Dummy API)</h2>

//       <ul style={{ listStyle: "none", padding: 0 }}>
//         {users.map(user => (
//           <li
//             key={user.id} // ✅ stable unique key from API
//             style={{
//               border: "1px solid #ddd",
//               padding: "12px",
//               marginBottom: "10px",
//               borderRadius: "6px",
//               backgroundColor: "#f7f7f7"
//             }}
//           >
//             <p>
//               <strong>Name:</strong>{" "}
//               {user.firstName} {user.lastName}
//             </p>
//             <p><strong>Phone:</strong> {user.phone}</p>
//             <p><strong>State:</strong> {user.address.state}</p>
//             <p><strong>Country:</strong> {user.address.country}</p>
//             <p><strong>Gender:</strong> {user.gender}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default UserListFromAPI;

import { useState, useEffect } from "react";

const Apix = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Errror in laodinh apai", err);
        setLoading(false);
      });
  }, []);

     if(loading){
        return <p style={{textAlign:"center", fontSize:"85px"}}> ...Loading </p>
     }


     return(
        <>
        <div style={{margin: "0px", padding: "0px", boxSizing: "border-box"}}>
            {users.map((user,index)=>(
                <li key={index} style={{border:"1px solid #ddd", display:"flex", justifyContent:"center", alignItems:"center" ,padding:"50px",background:"#f7f7f7" }}>
                    <p style={{marginRight:"12px"}}><strong>ID:</strong>{user.id}</p>
                    <p style={{marginRight:"12px"}}><strong>Name:</strong>{user.firstName}</p>
                    <p style={{marginRight:"12px"}}><strong>Last Name:</strong>{user.lastName}</p>
                    <p style={{marginRight:"12px"}}><strong>Phone:</strong>{user.phone}</p>
                    <p style={{marginRight:"12px"}}><strong>State:</strong>{user.address.state}</p>
                    <p style={{marginRight:"12px"}}><strong>Country:</strong>{user.address.country}</p>
                    <p style={{marginRight:"12px"}}><strong>Gender:</strong>{user.gender}</p>
                </li>
            ))}
        </div>
        </>
     )
};

export default Apix;
