import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
import axios from 'axios';
import {
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate(); 
  // const [state, setState] = useState({
  //   name: "",
  //   email: "",
  //   date: "",
  //   phone: ""
  // });
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')

  const handleEmailChange = (e) =>{ 
    
    setEmail(e.target.value)}
    const handleNameChange = (e) =>{ 
    
      setName(e.target.value)}
      const handlePhoneChange = (e) =>{ 
    
        setPhone(e.target.value)}
        const handleDateChange = (e) =>{
            
          setDate(e.target.value)}


  const isError = email === ''|| name === '' || phone === '' || date === '';



  // const handleInputChange = (event) => {
  //   console.log(event.target.value);
  //   const { name, value } = event.target;
  //   setState((prevProps) => ({
  //     ...prevProps,
  //     [name]: value
  //   }));
    
  // };

  const handleSubmit =async(event) => {
    event.preventDefault();
     console.log(email, name, typeof
       phone, date);
       const dob = new Date(date)
        const today = new Date()
        const age = today.getFullYear() - dob.getFullYear()
        if(age < 18){
          alert('You are not eligible to apply')
          return
        }
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!email.match(validRegex)) {
    alert('Please enter a valid email address');
    return;
  }
       const data = {
          email, name, phone, date
        }
        const respone=  await axios.post('http://localhost:8800/api/posts', data)
        console.log(respone)
        if(respone.data.msg){
          alert(respone.data.msg)
        }else{
          //use navigate to redirect to another page

          navigate('/display')

        }
  };
  return (
    <div className='form'>
      <h1 className='heading'>Form</h1>
     <FormControl isInvalid={isError}>
      <FormLabel className='label'>Email</FormLabel>
      <Input type='email' value={email} onChange={handleEmailChange} />
      <FormLabel className='label' htmlFor='name'>Name</FormLabel>
      <Input type='text' value={name} onChange={handleNameChange} />
      <FormLabel className='label' htmlFor='phone'>Phone</FormLabel>
      <Input type='number' value={phone} onChange={handlePhoneChange} />
      <FormLabel className='label' htmlFor='date'>Date</FormLabel>
      <Input type='date' value={date} onChange={handleDateChange} />
      {!isError ? (
        <button className='btn' onClick={handleSubmit}>Submit</button>
      ) : (
        <button className='btn' onClick={()=>{
          alert('Please fill all the fields')
        }}>Submit</button>
      )}
    </FormControl>
     </div>
  )
}

export default Form