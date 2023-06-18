import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
}
