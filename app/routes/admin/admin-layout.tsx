import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <aside>Sidebar</aside>
      <aside className="children">
        <Outlet />
      </aside>
    </div>
  );
};

export default AdminLayout;
