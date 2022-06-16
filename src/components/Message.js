import React from 'react'

const Message = (props) => {
  return (
    <div className={props.modalState.visible===false ? " ":"hide"} onClick={()=>{
      props.onHide()
    }}>
<br/>
            <div className="message" >
                <div className="message-container">{props.modalState.msg}</div>
            </div>
    
        </div>
  )
}

export default Message
