import './App.css';
import {UserForm, Users} from "./components";
import {useEffect, useState} from "react";
import {usersService} from "./services";

function App() {
  const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers([...data]))
    }, [])

    console.log(users)
  return (
    <div className="App">
        <UserForm setUsers={setUsers}/>
        <Users users={users}/>
    </div>
  );
}

export default App;
