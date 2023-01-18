import React from 'react'

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img alt="" src="https://images.pexels.com/photos/14959637/pexels-photo-14959637.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
          <p>Hello</p>
          <img src="https://images.pexels.com/photos/14959637/pexels-photo-14959637.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" />
      </div>
    </div>
  )
}

export default Message