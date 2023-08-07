"use client";
import React, { useState } from 'react'

const Login = () => {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  })

  const onChangeHandler = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
    console.log(login);

  }

  const addTodoos = () => {
    let todos = localStorage.getItem("todos");
    if (todos) {
    const  todoJson = JSON.parse(todos);
    if(todoJson.filter(value=>value.email == login.email).length > 0){
      alert(" Email is already exists")
    }
    else{
      todoJson.push(login);
      localStorage.setItem("todos", JSON.stringify(todoJson));
      alert("Email has been added.")
      setLogin({
        email: '',
        password: '',
      })
    }
      
    }
    else{
      localStorage.setItem("todos", JSON.stringify([login]));

    }
  }

  return (
    <div>
      <div className='w-full mt-32 h-[80vh]  md:px-0 lg:px-0 md:w-[75%] md:mx-auto lg:w-[50%] '>

        <div className='flex flex-col mt-10'>
          <label htmlFor="email" className='text-2xl'>Email</label>
          <input type="text" name="email" id="email" value={login.email} placeholder=' email ' className='bg-fuchsia-100 py-2 placeholder:ps-2 placeholder:uppercase placeholder:text-red-300 focus:outline-red-500 focus:bg-white ' onChange={onChangeHandler}  required />
        </div>
        <div className='flex flex-col mt-10'>
          <label htmlFor="password" className='text-2xl'>Password</label>
          <input type="password" name="password" value={login.password} id="password" placeholder='password' className='bg-fuchsia-100 py-2 placeholder:ps-2 placeholder:uppercase placeholder:text-red-300 focus:outline-red-500 focus:bg-white' onChange={onChangeHandler} required />
        </div>
        <button  onClick={addTodoos} type="submit" className='px-8 rounded-s text-white text-lg  py-2 bg-red-600 mt-5 '>Submit</button>
      </div>
    </div>


  )
}

export default Login
