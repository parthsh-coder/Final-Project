import Form from './dashboard-site/form/Form'
import { Route, Routes } from 'react-router-dom'
import MainSite from "./dashboard-site/site/MainSite"
import ProtectedRoutes from './dashboard-site/site/utilize/ProtectedRoutes'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Form />} />

        <Route element={<ProtectedRoutes />}>
          <Route path='/dashboard' element={<MainSite />} />
        </Route>

        <Route path='*' element={<Form/>} />


      </Routes>
    </>
  )
}

export default App