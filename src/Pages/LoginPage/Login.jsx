import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../../utils/constants';
const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={()=>navigate(PATHS.face)}>Login</button>
    </div>
  )
}

export default Login
