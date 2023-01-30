import React from 'react'
import '../styles/UserProfile.css'

interface UserData {
  name: string,
  nickname: string,
  phone?: string,
  email?: string,
  position?: string,
  photo: string
}

interface Props {
  userData: UserData
  show: boolean
  onClose: React.MouseEventHandler
  
}

export default function UserProfile( props: Props ) {
  // const [showMore, setShowMore] = useState(false);
  if (!props.show) {
    return null
  }

  return (
    <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
      <div className='modal-content' onClick={e => e.stopPropagation()}>
        <div className='modal-header'>
          <div className='btn-close-modal-container'>
            <button className='btn-close-modal' onClick={props.onClose}>{'✕'}</button>
          </div>
          <div className="profile-photo-container">
            <img alt='avatar' className='profile-photo' src={'../img/' + props.userData.photo} />
          </div>
          <div className="profile-name">
            {props.userData.name}
          </div>
          <div className="profile-position">
            {props.userData.position}
          </div>
        </div>
        <div className='modal-body'>

          <div className="field-names">
            <p>Phone</p>
            <p>URL</p>
            <p>Email</p>
          </div>

          <div className="field-data">
            <p>{props.userData.phone}</p>
            <p>
              <a href={'https://example.com/' + props.userData.nickname}>{'https://example.com/' + props.userData.nickname}</a>
            </p>
            <p>
              <a href={props.userData.email}>{props.userData.email}</a>
            </p>
          </div>
        </div>
        <div className='modal-footer'>
          <button className='btn-send-msg'>Send message</button>
        </div>
      </div>
    </div>
  )
}
