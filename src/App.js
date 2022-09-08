import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <div className="App">
      <h2>React CRUD operations using PHP API and MySQL</h2>
      <BrowserRouter>
        <nav>
          <ul className='menu'>
            <li><Link to="/">List Users</Link></li>
            <li><Link to="/user/create">Create User</Link></li>
            <li><Link to="/user/edit">Edit User</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListUser />}/>
          <Route path="user/create" element={<CreateUser />}/>
          <Route path="user/edit" element={<EditUser />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
