import { Link, useNavigate, NavLink } from "react-router-dom";
import {
  Disclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Dashboard", href: "/dashboard", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      navigate("/login");
    }
  };

  return (
    <Disclosure as="nav" className="bg-gray-800 fixed w-full top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center max-[500px]:flex hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-between">
                <div className="flex flex-shrink-0 items-center max-[500px]:hidden">
                  <NavLink to="/" className="text-white text-xl font-bold">
                    AuthApp
                  </NavLink>
                </div>

                {/* Centered Logo for mobile */}
                <div className="hidden max-[500px]:flex flex-1 justify-center items-center">
                  <NavLink to="/" className="text-white text-xl font-bold">
                    AuthApp
                  </NavLink>
                </div>

                {/* All Navigation Links Centered */}
                <div className="max-[500px]:hidden flex-1">
                  <div className="flex items-center justify-center space-x-4">
                    {!isAuthenticated ? (
                      <>
                        <NavLink
                          to="/login"
                          className={({ isActive }) =>
                            `text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
                              isActive ? "bg-gray-900 text-white" : ""
                            }`
                          }
                        >
                          Login
                        </NavLink>
                        <NavLink
                          to="/register"
                          className={({ isActive }) =>
                            `text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
                              isActive ? "bg-gray-900 text-white" : ""
                            }`
                          }
                        >
                          Register
                        </NavLink>
                      </>
                    ) : (
                      <>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            `text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
                              isActive ? "bg-gray-900 text-white" : ""
                            }`
                          }
                        >
                          Home
                        </NavLink>
                        <NavLink
                          to="/dashboard"
                          className={({ isActive }) =>
                            `text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
                              isActive ? "bg-gray-900 text-white" : ""
                            }`
                          }
                        >
                          Dashboard
                        </NavLink>
                        <NavLink
                          to="/profile"
                          className={({ isActive }) =>
                            `text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
                              isActive ? "bg-gray-900 text-white" : ""
                            }`
                          }
                        >
                          Profile
                        </NavLink>
                        <button
                          onClick={handleLogout}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                        >
                          Logout
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {/* Empty div to maintain spacing */}
                <div className="hidden sm:block w-[120px]"></div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="max-[500px]:block hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {!isAuthenticated ? (
                <>
                  <NavLink
                    to="/login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                  >
                    Register
                  </NavLink>
                </>
              ) : (
                <>
                <NavLink
                    to="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/dashboard"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                  >
                    Dashboard
                  </NavLink>
                  <NavLink
                    to="/profile"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                  >
                    Profile
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium w-full text-left"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
