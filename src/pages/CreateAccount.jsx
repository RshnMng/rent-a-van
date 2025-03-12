import React, { useState, useEffect } from 'react';
import {Navigate, Link } from 'react-router-dom';

export default function CraeteAccount(props){
    let setAuthUsers = props.props.setAuthUsers;
    let authUsers = props.props.authUsers;
    let saveToLocal = props.props.saveToLocal;
    let getFromLocal = props.props.getFromLocal;
    
    
    const [duplicateAccount, setDuplicate] = useState(false);
    const [accountCreated, setAccountCreated] = useState(false);
    const [error, isError] = useState(false);
    const [userInput, setUserInput] = useState({
        firstName : '',
        lastName : '',
        email : '',
        password : '',
        confirmPwd : ''   
    });
    
    function updateInput(event){
        const inputType = event.target.id;
        const inputValue = event.target.value;
        setUserInput((prevState) => {
           return {...prevState, [inputType] : inputValue }
        });
    };
    
    const addNewAccount = () => {
        authUsers.push(userInput);
        setAuthUsers(authUsers);
        saveToLocal('accounts', authUsers);
        setAccountCreated(true);
    }
    
    function seeIfAccountExists(){
      let users = getFromLocal('accounts');
       
       
       let isExists = users.some((user) => {
        return user.email === userInput.email && user.password === userInput.password 
       })
        
        return isExists;
    }
    
    function makeSureAllInputsFilled(){
          userInput.firstName.length > 0 && userInput.lastName.length > 0 && userInput.email.length > 0 && userInput.password.length > 0 && userInput.confirmPwd.length > 0 && userInput.password === userInput.confirmPwd  ? addNewAccount() : isError(true)
    }
    
    function authenticateInputs(event){
        event.preventDefault();
        let isExists = seeIfAccountExists();
        
        !isExists ? makeSureAllInputsFilled() : setDuplicate(true);
    } 
    
    useEffect(() => {
      let users = getFromLocal('accounts');
      setAuthUsers(users)
        
    }, [])
    
    if(accountCreated && !duplicateAccount) {
        return <Navigate to='/login' />
    }
    
    
    return <>
        <div className='create-account-container'>
        <h1 className='create-account-header'>Create An Account</h1>
        
        {error && <h3 className='account-error'>Please make sure all inputs are filled and your passwords match </h3>}
        
        {duplicateAccount && <h3 className='account-error'>It seems you already have an account. <Link to='/login' className='please-login-button'>Please log in </Link> </h3>}
        
        
        
        <form className='sign-in-form'>
        <input className='account-input' type='text' placeholder='First Name' id='firstName' name='first-name' value={userInput.firstName} onChange={(event) => updateInput(event)} autoComplete='true'/>
        <input className='account-input' type='text' placeholder='Last Name' id='lastName' name='last-name' value={userInput.lastName} onChange={(event) => updateInput(event)} autoComplete='true'/>
        <input className='account-input' type='email' placeholder='Email' id='email' name='email' value={userInput.email} onChange={(event) => updateInput(event)} autoComplete='true'/>
        <input className='account-input' type='password' placeholder='Create Password' id='password' name='passwordOne' value={userInput.password} onChange={(event) => updateInput(event)} autoComplete='true'/>
        <input className='account-input' type='password' placeholder='Confirm Password' id='confirmPwd' name='password-confirm' value={userInput.confirmPwd} onChange={(event) => updateInput(event)} autoComplete='true'/>
        <button className='account-input account-button' type='submit' onClick={(event) => authenticateInputs(event)} >Sign up</button>
        </form>
        </div>
    
    </>
}