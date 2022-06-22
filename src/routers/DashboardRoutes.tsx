import { Route, Routes } from 'react-router-dom';
import { DashboardPage } from '../pages/DashboardPage';

export const DashboardRoutes = () => (
  <>
    {/* Here goes the bottom menu */}
    <div>
      <Routes>
        <Route path='/' element={<DashboardPage />} />
      </Routes>
    </div>
  </>
);
