import React from 'react'
import '../styles/UserRecord.css'

interface UserData {
    phone?: string,
    name: string,
    nickname: string,
    email?: string,
    position?: string,
    photo: string
}
export default function UserRecord(props: UserData) {
  return (
    <div className='user-container'>
        <div className='photo'>
            <img alt='avatar' className='avatar' src={'../img/' + props.photo} /> 
        </div>
        <div className='name'>
            <p>{props.name}</p>
            <p>{props.nickname}</p>
        </div>
        <div className="view">
            <button className='btn-view'>View</button>
        </div>
    </div>
  )
}
