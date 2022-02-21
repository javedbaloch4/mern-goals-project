import React from 'react'
import { useState, useEffect } from 'react' 
import {FaUser} from 'react-icons/fa'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  // Distructure Form Data
  const {email, password} = formData

  // Funcs
  const onSubmit = (e) => {
    e.preventDefault()
  }

  const onChange = (e) => {
    setFormData( ( prevState ) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Login
        </h1>
        <p>Please login to your account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Please enter username"
              id="email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Please enter password"
                id="email"
                value={password}
                onChange={onChange}
              />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Login</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login