import { useEffect, useState } from "react";

const Sonic = () => {
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
        console.log("Error in API:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>...Loading</p>;
  }

  return (
    <div>
      {users.map((user, index) => (
        <li
          key={index}
          style={{
            border: "1px solid #ddd",
            padding: "12px",
            marginBottom: "10px",
            borderRadius: "6px",
            backgroundColor: "#f7f7f7",
          }}
        >
            <p>
              <strong>Name:</strong>{" "}
              {user.firstName} {user.lastName}
            </p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>State:</strong> {user.address.state}</p>
            <p><strong>Country:</strong> {user.address.country}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
        </li>
      ))}
    </div>
  );
};

export default Sonic;
