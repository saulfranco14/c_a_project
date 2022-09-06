import './css/global.css'
// Redux
import { Provider }   from 'react-redux';
import store          from './store/store';

import Header         from './components/Header'
import Login          from './components/Login'

function App() {
  return (
    <>
      <Provider store={store}>
        <Header/>
        <Login/>
      </Provider>
    </>
  );
}

export default App;
