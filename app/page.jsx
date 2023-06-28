async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json();
  return data;
}


async function page() {
  const users = await getUsers();
  
  return (
    <div className="container">
      <div id="title">
        <h1 className="title">Robofriends</h1>
      </div>
      <div className="perfil">
        {users.map((user) => (
          <div key={user.id} className="card">
            <img
              src={`https://robohash.org/${user.id}`}
              alt="robot-pic"
              style={{ width: "200px", height: "200px" }}
            ></img>
            <h2>{user.name}</h2>
            <h4>{user.email}</h4>
            <h4>{user.phone}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page

