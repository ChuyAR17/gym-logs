import { useReducer } from 'react';
import { AuthContext } from './auth/authContext';
import { authReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter';

const init = () => {
  const localSt = localStorage.getItem('user');
  return localSt ? JSON.parse(localSt) : { logged: false };
}

export const App = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
      <div className='App'>
        <AppRouter />
      </div>
    </AuthContext.Provider>
  );
}
