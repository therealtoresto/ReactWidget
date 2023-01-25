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
      <UserRecord name={user.name} nickname={user.nickname} photo={user.photo} />
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

  const showAll = () => {
    // let visibled = false
    // if (renderedUsers.length > 3 && !visibled) {
    //   for (let i = 4; i < renderedUsers.length; i++) {
    //     renderedUsers[i].style.display = ''
    //   }
    //   visibled = true
    // } else if (renderedUsers.length > 3 && visibled) {
    //   for (let i = 4; i < renderedUsers.length; i++) {
    //     renderedUsers[i].style.visible = 'none'
    //   }
    //   visibled = false
    // }
    

  }
  return (
    <div className='list-container'>
      { showMore ? renderedUsers : renderedSomeUsers(3) }
      <button className='btn-view-all' onClick={() => setShowMore(!showMore)}>
        {showMore ? 'View all': 'View less'}
      </button>
    </div>
  )
}
