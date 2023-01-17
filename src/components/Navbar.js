import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo"> Lama chat </span>
      <div className="user">
        <img src="https://images.pexels.com/photos/14455734/pexels-photo-14455734.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" />
        <span> John </span>
        <button> logout </button>
      </div>
    </div>
  )
}

export default Navbar