import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import UserRecord from './UserRecord'
import '../styles/UserList.css'


interface UserData {
  phone?: string,
  name: string,
  nickname: string,
  email?: string,
  position?: string,
  photo: string
}

export default function UserList() {
  const users = useSelector((state: any) => state.users)
  const renderedUsers = users.map((user: UserData) => (
      <UserRecord 
        key={user.nickname} 
        name={user.name} 
        nickname={user.nickname} 
        photo={user.photo} 
        email={user.email}
        position={user.position}
        phone={user.phone}  
      />
    )
  )
  const renderedSomeUsers = (count: number) => {
    const rendered = []
    if (count > renderedUsers.length) return
    for (let i = 0; i < count; i++) {
      rendered[i] = renderedUsers[i]
    }
    return rendered;
  }
  const [showMore, setShowMore] = useState(false);

  return (
    <div className='list-container'>
      { showMore ? renderedUsers : renderedSomeUsers(3) }
      <button className='btn-view-all' onClick={() => setShowMore(!showMore)}>
        {showMore ? 'View less' : 'View all'}
      </button>
    </div>
  )
}
