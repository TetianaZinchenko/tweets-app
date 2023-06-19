import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';
import { theme } from '../../theme/theme';

import Layout from 'components/Layout';

const HomePage = lazy(() => import('../../pages/Home'));
const TweetsPage = lazy(() => import('../../pages/Tweets'));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="tweets" element={<TweetsPage />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
