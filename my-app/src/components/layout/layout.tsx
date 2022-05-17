import { Outlet } from "react-router-dom";

function Layout(): JSX.Element {
  return (
    <div className="wrapper">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
