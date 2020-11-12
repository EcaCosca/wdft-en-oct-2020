const React = require('react');


function UserProfile( props ) {
  /* 
    props = {
      name: "Bill Gates"
      linkedinUrl: "https://www.linkedin.com/in/williamhgates/" 
      profilePhoto: "https://i.imgur.com/sSoDxLe.jpg"
    }
  */

  return(
    <section className="user-profile">
      <img src={props.profilePhoto} alt="" />
      <h3>User: {props.name}</h3>
      <a href={props.linkedinUrl} >
        <button>See the profile</button>
      </a>
    </section>
  )

}

module.exports = UserProfile;