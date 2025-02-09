import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { StartPage } from '../../pages/start-page/start-page'
import { MainPage } from '../../pages/main-page/main-page'

function App() {

  return (
      <BrowserRouter>

      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path='/main' element={<MainPage />} />
      </Routes>

      </BrowserRouter>
  )
}

export default App
