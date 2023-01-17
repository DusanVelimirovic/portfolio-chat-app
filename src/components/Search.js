import React from 'react'

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder='find a user'/>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/14455734/pexels-photo-14455734.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt=""/>
        <div className="userChatInfo">
          <span> Jane </span>
        </div>
      </div>
    </div>
  )
}

export default Search