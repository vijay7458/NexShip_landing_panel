import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      This is Dashboard page
      <br />
      <br />
      <Link to="/all-features">All</Link>
    </div>
  )
}

export default Dashboard
