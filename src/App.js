import './css/global.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Redux
import { Provider }   from 'react-redux';
import store          from './store/store';

// Header
import Header         from './components/Header';

// Login
import Login          from './components/Login';

// Sidebar
import SideBar        from 'components/Sidebar';

// ROUT PRIVATE
import RouterUsers              from './components/Routes/RouteUser';
import RouterRole               from './components/Routes/RouteRole';

// User
import User           from './components/Users';
import NewUser        from './components/Users/NewUser';
import EditUser       from './components/Users/EditUser';

// Role
import Role           from './components/Roles';
import NewRole        from './components/Roles/NewRole';
import EditRole       from './components/Roles/EditRole';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header/>
        <SideBar/>
        <Routes>
          <Route path="/" element={<Login/>} />

          <Route          element={<RouterUsers/> }>
            <Route path='/users'          element={<User/>} />
            <Route path='/new_user'       element={<NewUser/>} />
            <Route path='/user/:id_user'  element={<EditUser/>} />
          </Route>

          <Route          element={<RouterRole/> }>
            <Route path='/roles'          element={<Role/>} />
            <Route path='/new_role'       element={<NewRole/>} />
            <Route path='/role/:id_role'  element={<EditRole/>} />
          </Route>

        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
