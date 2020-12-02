import React from 'react'

function ContactCard(props) {

  return (
    <tr key={props.contactObj.id}>
      <td>
        <img
          src={props.contactObj.pictureUrl}
          style={{ width: '75px', height: 'auto' }}
        />
      </td>
      <td>{props.contactObj.name}</td>
      <td>{Math.round(props.contactObj.popularity*100)/100}</td>
      <td><button onClick={ () => { props.removeContactFunc(props.contactObj.id) }  }>Delete</button></td>
    </tr>
  )
}

export default ContactCard
