import { useState } from 'react'
import Routes from './routes'
import AppContext from './contexts/app-context'

function App() {

  const [user, setUser] = useState(null);

  return (
    <AppContext.Provider value={{user, setUser}}>
      <Routes />
    </AppContext.Provider>
  )
}

export default App
