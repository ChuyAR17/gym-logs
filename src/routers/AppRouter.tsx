import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={
        <PublicRoutes >
          <LoginPage />
        </PublicRoutes>
      } />
      <Route path='/*' element={
        <PrivateRoutes>
          <DashboardRoutes />
        </PrivateRoutes>
      } />
    </Routes>
  </BrowserRouter>
);
