import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <header>
        <Link to="/">
          <img src="" alt="" />
          <span>Talkify</span>
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
