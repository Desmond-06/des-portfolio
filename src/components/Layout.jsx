import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="App flex flex-col h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Container for elements visible on larger screens */}
      <div className="hidden md:block relative flex-1">
        <span className="tags top-tags text-blue-600 opacity-60 absolute top-8 left-12 text-xl font-title">
          &lt;body&gt;
        </span>

        <Outlet />

        <span className="tags bottom-tags text-blue-600 opacity-60 absolute bottom-20 left-12 text-xl font-title">
          &lt;/body&gt;
        </span>
        <br />
        <span className="bottom-tag-html text-blue-600 opacity-60 absolute left-12 bottom-10 text-xl font-title">
          &lt;/html&gt;
        </span>
      </div>

      {/* Container for elements visible on mobile screens */}
      <div className="block md:hidden relative flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
