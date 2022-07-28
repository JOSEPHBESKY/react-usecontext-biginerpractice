//import {useState} from 'react'
import Cart from './Cart'

function Profile(props) {
//  const [name,setname]=useState('ract')
  return (
    <div>Profile <Cart name={props.name} /></div>
  )
}

export default Profile