import React from 'react'
import { httpRequest } from '../../store/actions/asyncActions';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from '../pure/LoginForm'

const LoginFormContainer = () => {
    const dispatch = useDispatch();
    const loged = useSelector(state => state.userState.loged);
    const fetching = useSelector(state => state.userState.fetching);
  
    const handleLogin = (email, password) => {
      const data = {
        email: email,
        password: password,
      };

      const url = 'https://reqres.in/api/login';
      dispatch(httpRequest('post', url, data));
      
    };
  
    return <LoginForm loged={loged} onLogin={handleLogin} fetching={fetching}/>;
  };
  
  export default LoginFormContainer;