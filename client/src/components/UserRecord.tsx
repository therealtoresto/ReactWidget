import React, { useState } from 'react'
import '../styles/UserRecord.css'
import UserProfile from './UserProfile'

interface UserData {
    phone?: string,
    name: string,
    nickname: string,
    email?: string,
    position?: string,
    photo: string
}
export default function UserRecord(props: UserData) {
  const [data, setData] = useState(props)
  const [show, setShow] = useState(false)
  
  const runState = () => {
    setData(props)
    setShow(true)
  }
  return (
    <div className='user-container'>
        <div className='avatar-container'>
            <img alt='avatar' className='avatar' src={'./img/' + props.photo} /> 
        </div>
        <div className='name-container'>
            <span className='name'>{props.name}</span>
            <span className='nickname'>{props.nickname}</span>
        </div>
        <div className="view-container">
          {/* <Link to={`/profile/${props.nickname}`}> */}
            <button onClick={() => runState()} className='btn-view'>View</button>
            <UserProfile
              show={show}
              onClose={() => setShow(false)}
              userData={data}
            />
        </div>
    </div>
  )
}
