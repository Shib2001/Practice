import { useEffect, useState } from "react";

function UserListFromAPI() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data.users); // 👈 actual array
        setLoading(false);
      })
      .catch(err => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading users...</p>;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2 style={{ textAlign: "center" }}>Users (Public Dummy API)</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map(user => (
          <li
            key={user.id} // ✅ stable unique key from API
            style={{
              border: "1px solid #ddd",
              padding: "12px",
              marginBottom: "10px",
              borderRadius: "6px",
              backgroundColor: "#f7f7f7"
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
      </ul>
    </div>
  );
}

export default UserListFromAPI;
