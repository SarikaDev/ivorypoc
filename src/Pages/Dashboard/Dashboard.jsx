import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../../utils/constants';
const Dashboard = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={()=>navigate(PATHS.login)}>Lsadfgh</button>
    </div>
  )
}

export default Dashboard
