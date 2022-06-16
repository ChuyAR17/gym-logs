import { Route, Routes } from "react-router-dom"
import { DashboardPage } from "../pages/DashboardPage"
import { LoginPage } from '../pages/LoginPage';

export const DashboardRoutes = () => {
  return (
    <>
      {/* Here goes the bottom menu */}
      <div>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={<DashboardPage />} />
        </Routes>
      </div>
    </>
  )
}
