import React, {useState} from 'react'
import axios from 'axios'

const CreateUser = () => {

  const [inputs, setInputs] = useState({});

    const handleChange = event => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({
        ...values, [name]: value
      })) 
    }

    const handleSubmit = event => {
      event.preventDefault();

      axios.post('http://localhost/9-SeptemberProjects/api/user/save', inputs)
      console.log(inputs);

    }

  return (
    <div>
        <h2>Create User</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Name: </label>
          <input type="text" name='name' onChange={handleChange} placeholder='Name' />

          <label htmlFor="">Email: </label>
          <input type="email" name='email' onChange={handleChange} placeholder='Email'/>

          <label htmlFor="">Phone: </label>
          <input type="text" name='mobile' onChange={handleChange} placeholder='Phone number'/>

          <button>Save</button>
        </form>
    </div>
  )
}

export default CreateUser