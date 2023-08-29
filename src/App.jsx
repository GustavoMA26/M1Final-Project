import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { RoutesApp } from "./routes/index"
import { AppProvider } from './context/index'

function App() {

  return (
    <BrowserRouter>
      <AppProvider>
        <RoutesApp />
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
