import React from 'react'
import Home from './Home'
import Main from './Main'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import {stateContext} from './StateContex'
import {useReducer} from 'react'
import {initialstate,stateReducer} from './reducer'
function App() {
  const [state,dispatch]=useReducer(stateReducer,initialstate);
  return (
    <div>
    <stateContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    <ul><li><Link to="./">Home</Link></li>
    <li><Link to="/Main">Main</Link></li>
    </ul>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Main' element={<Main/>}></Route>
    </Routes>
    </BrowserRouter>
    </stateContext.Provider>
    </div>
  )
}

export default App