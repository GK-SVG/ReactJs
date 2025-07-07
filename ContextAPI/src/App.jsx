import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <div className='text-center text-3xl' >
        <Login />
        <Profile/>
      </div>
    </UserContextProvider>
  )
}

export default App
