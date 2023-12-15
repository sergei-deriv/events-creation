import NewTodoForm from '@/components/Todo/NewTodoForm';
import React from 'react';

const DashboardLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <h1>DASHBOARD LAYOUT</h1>
      <div><NewTodoForm /></div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
