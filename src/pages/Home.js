import React, { useState } from "react";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";
import "./Home.css";

const Home = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [refresh, setRefresh] = useState(false);

  return (
    <div>
<h1>User Management Dashboard</h1>
<UserForm selectedUser={selectedUser} onSave={() => setRefresh(!refresh)} />
      <UserList key={refresh} onEdit={setSelectedUser} />
    </div>
  );
};

export default Home;
