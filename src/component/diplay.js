import React from 'react'

const diplay = (props) => {
  return (
    <tr>
        <td>{props.sNo}</td>
        <td><img src={props.profile_pic} alt='img'/></td>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.gender}</td>
        <td>{props.email}</td>
        <td>{props.userName}</td>
        <td>{props.domain}</td>
        <td>{props.ip}</td>
        <td>{props.university}</td>
    </tr>
  )
}

export default diplay
