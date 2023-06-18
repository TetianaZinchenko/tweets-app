import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Layout from 'components/Layout';

const HomePage = lazy(() => import('../../pages/Home'));
const TweetsPage = lazy(() => import('../../pages/Tweets'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="tweets" element={<TweetsPage />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Route>
    </Routes>
  );
};

export default App;
