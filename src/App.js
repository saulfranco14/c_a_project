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

// User
import User           from './components/Users';
import NewUser        from './components/Users/NewUser';
import EditUser       from './components/Users/EditUser';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header/>
        <SideBar/>
        <Routes>
          <Route path="/" element={<Login/>} />

          <Route path='/users'          element={<User/>} />
          <Route path='/new_user'       element={<NewUser/>} />
          <Route path='/user/:id_user'  element={<EditUser/>} />

        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
