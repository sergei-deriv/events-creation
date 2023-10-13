import React from 'react';

const DashboardLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <h1>DASHBOARD LAYOUT</h1>
      {children}
    </div>
  );
};

export default DashboardLayout;
