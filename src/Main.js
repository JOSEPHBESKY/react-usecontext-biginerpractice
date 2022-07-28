import {useContext} from 'react'
import {stateContext} from './StateContex'
function Main() {
    const state=useContext(stateContext)
    console.log('main',state);
  return (
    <div>Main</div>
  )
}

export default Main