import React, { useState, useEffect } from 'react';

function App() {
    function generateUsers() {
        return [
          "user1",
          "user2",
          "user3",
          "user4",
          "user5",
          "user6",
          "user7",
          "user8",
          "user9",
          "user10",
        ];
      }
      
  const [users, setUsers] = useState(generateUsers());

  function removeRandomUser() {
    const randomIndex = Math.floor(Math.random() * users.length);
    const updatedUsers = [...users];
    updatedUsers.splice(randomIndex, 1);
    setUsers(updatedUsers);
  }

  useEffect(() => {
    document.title = `${users.length} users left`;
  }, [users]);

  return (
    <div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
      <button onClick={removeRandomUser}>Remove random child</button>
    </div>
  );
}

export default App;







