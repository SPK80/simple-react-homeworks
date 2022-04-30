import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

const messageData = {
  avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
  name: 'Some Name',
  message: 'some text',
  time: '22:00',
}

const alternativeMessageData = {
  avatar: 'https://avatars.githubusercontent.com/u/36849366?s=100',
  name: 'SPK80',
  message: `How do? <^_^>
    It\`s me`!,
  time: '02:00',
}


function HW1() {
  return (
    <div>
      <hr/>
      homeworks 1
      
      {/*should work (должно работать)*/}
      
      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />
      
      <hr/>
      {/*для личного творчества, могу проверить*/}
      <AlternativeMessage
        avatar={alternativeMessageData.avatar}
        name={alternativeMessageData.name}
        message={alternativeMessageData.message}
        time={alternativeMessageData.time}/>
      <hr/>
    </div>
  );
}

export default HW1
