import { useState, useEffect } from "react";

const Jon = () => {
  const [users, setUsers] = useState("");
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
        console.log("Error in loading the data", err);
        setLoading(false);
      });
  }, []);


    if (loading) {
    return <p>...Loading</p>;
  }

  return (
    <>
      <div
        style={{
          margin: "0px",
          padding: "0px",
          boxSizing: "border-box",
          
        }}
      >
          {users.map((user, index) => (
            <li key={index} style={{display:"flex", border:"1px solid black", background:"#f7f7f7", color:"black", padding:"48px", margin:"48px" }}>
              <p style={{marginRight:"48px"}}>
                <strong>Name:</strong> {user.firstName} {user.lastName}
              </p>
              <p style={{marginRight:"48px"}}>
                <strong>Phone:</strong> {user.phone}
              </p>
              <p style={{marginRight:"48px"}}>
                <strong>State:</strong> {user.address.state}
              </p>
              <p style={{marginRight:"48px"}}>
                <strong>Country:</strong> {user.address.country}
              </p>
              <p style={{marginRight:"48px"}}>
                <strong>Gender:</strong> {user.gender}
              </p>
            </li>
          ))}
      </div>
    </>
  );
};

export default Jon;
