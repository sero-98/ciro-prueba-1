import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../../actions/userActions.js';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import './login.css';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo, loading, error } = userLogin;
  const dispatch = useDispatch();

  useEffect(() => {
    if(userInfo){
      props.history.push('/seed');
    }
  }, [props.history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  }

  return (
    <div>
      <img className="wave" src="assets/img/wave.png" alt="wave"/>
      <div className="container">
        <div className="img">
          <img src="assets/img/bg.svg" alt="bg"/>
        </div>
        <div className="login-content">

          <form className="form" onSubmit={submitHandler}>
            <img src="assets/img/avatar.svg" alt="avatar"/>
            <h2 className="title">Welcome</h2>
            {
              loading && <LoadingBox></LoadingBox>
            }
            {
              error && <MessageBox variant="danger">{error}</MessageBox>
            }
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <input 
                  type="email" 
                  id="email"
                  placeholder="Enter email"
                  required
                  onChange={(e) => setEmail(e.target.value)}  
                />
              </div>
            </div>

            <div className="input-div pass">
              <div className="i"> 
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <input 
                  type="password" 
                  id="password"
                  placeholder="Enter password"
                  required
                  onChange={(e) => setPassword(e.target.value)}  
                />
              </div>
            </div>

            <a href="/seed">Forgot Password?</a>
            <button type="submit" className="btn">Sign In</button>  
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;