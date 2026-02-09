import React, { useEffect } from 'react';
import './App.css';
import Aquaalert from './component/Aquaalert';
import { selectUser } from './features/userSlice';
import Login from './component/auth/Login'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './features/userSlice';  // Import necessary actions and selectors
import { auth } from './firebase';  // Import Firebase auth
import { Provider } from 'react-redux';
import {store} from './app/store.js'
function App() {
  
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
            photo: authUser.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
      console.log(authUser);
    });
  }, [dispatch]);
  return (
    <Provider store={store}>
      <div className="App">
        {user ? <Aquaalert /> : <Login />}
      </div>
    </Provider>
  );
}

export default App;