import React from 'react'

function ProfileImage(props) {
  return (
    <div>
    {
      props.profileImage 
        ? <img src={props.profileImage} alt="" />
        : <p>Unable To Load The Image</p>
    }
    </div>
  )
}

export default ProfileImage
