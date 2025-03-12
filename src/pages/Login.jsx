import React, {useState, useEffect} from 'react';
import {useLocation, useNavigate, Link} from 'react-router-dom';

export default function Login(props){
    const auth = props.props.auth;
    const isAuth = props.props.isAuth;
    const saveToLocal = props.props.saveToLocal;
    const authUsers = props.props.authUsers;
    const setCurrentUser = props.props.setCurrentUser;
    const currentUser = props.props.currentUser;
    const navigate = useNavigate();
    
    
    
    const [tryAgain, isTryAgain] = useState(false);
    const location = useLocation();
    const message = location.state;
    
    const goto = location.state?.goto || '/host';
    
    const [loginData, setLoginData] = useState({
        emailInput: '',
        password: '',
    })
    
    function updateEmail(event){
        setLoginData((prevState) => {
            return {...prevState, emailInput: event.target.value}
        })
    }
    
      function updatePassword(event){
        setLoginData((prevState) => {
            return {...prevState, password: event.target.value}
        })
    }
    
   function logIn(){
    isAuth(true);
    saveToLocal('loggedin', true);
   }
   
  
   function updateCurrentUser(name){
    let capName = name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase();
   
    setCurrentUser(capName);
    saveToLocal('currentUser', capName)
   }
    
   function authenticateUser(event){
     event.preventDefault();
    let isExists = authUsers.some((user) => {
      
      loginData.emailInput === user.email && loginData.password === user.password && updateCurrentUser(user.firstName)
        
      return loginData.emailInput === user.email && loginData.password === user.password 
     })
     
     isExists ? logIn() : isTryAgain(true);
     
   }
   
   useEffect(() => {
     auth === true && navigate(goto, {replace: true }); 
    
   }, [auth])
   
 
    return <> 
            <div className='login-container'>
                <div className='login-header-container'>
                 {message === null ? '' : <p className='login-first-text'>{message.message}</p>}
                    <h1 className='login-header'>Sign in to your Account</h1>
                </div>
                
                <div className='login-input-container'>
                    <input type='email' placeholder='email'className='user-input' onChange={(event) => updateEmail(event)} value={loginData.emailInput} id='email' name='email' autoComplete='true' />
                    <input type='password' placeholder='password'className='user-input' onChange={(event) => updatePassword(event)} value={loginData.password} id='password' name='password' autoComplete='true'/>
                </div>
                 <div className='login-button-container'>
                    <button type='submit' className='login-button' onClick={(event) => {authenticateUser(event)}} id='login-button' name='login-button' >Sign in</button> 
                 </div> 
                 <div className='login-create-acc-div'>
                 <p className='create-account-text'>{`Don't have an account?`}<span className='create-account-span'><Link to='/sign-up' className='create-account-link'> Create one now!</Link></span> </p>
                 
                  {tryAgain && <p className='login-first-text'>The password or email address you entered is not correct. Please try again.</p>}
                 </div>
                 
            </div>
          </>
}

