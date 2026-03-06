import { useState, useEffect } from "react";

const Test = () => {
  const [usering, setUsering] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsering(data);
        console.log(data);

      })
      .catch((err) => console.log("error in getting api", err));
    },[])

    return (
        <>
        <h1>data here </h1>
        
        <ul>
            {usering.map((user, index)=>(
                <li key={index}>
                    <p><strong>Username:</strong>{user.users.name}</p>
                    <p><strong>Email:</strong>{user.email}</p>
                    <p><strong>Phone:</strong>{user.phone}</p>
                </li>
            ))}
        </ul>
        </>
    )
  };


export default Test;
