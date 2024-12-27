import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/logo.svg";

const RootLayout = () => {
  return (
    <div>
      <header>
        <Link to="/">
          <img src={logo} alt="" />
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
