// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <input type='text' placeholder='Enter user Name' name="username"/>
//   <p>First React Test Case</p>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import UserList from './Components/UserList';
import UserForm from './Components/UserForm';
const App = () => {
    const [selectedUser, setSelectedUser] = useState(null);

    const handleUserSelect = (user) => {
        setSelectedUser(user);
    };

    const handleUpdateComplete = () => {
        setSelectedUser(null);
    };

    return (
        <div>
            <h1>User Management</h1>
            <UserForm existingUser={selectedUser} onUpdateComplete={handleUpdateComplete} />
            <UserList onUserSelect={handleUserSelect} />
        </div>
    );
};

export default App;
