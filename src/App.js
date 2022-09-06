import './App.css';

// Redux
import { Provider }   from 'react-redux';
import store          from './store/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <div>
          <h1>Login c&a</h1>
        </div>
      </Provider>
    </>
  );
}

export default App;
