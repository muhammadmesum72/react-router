import { Link } from "react-router-dom";
import Button from "../ui/Button";

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-900 w-full ">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to={"/"}>
            <h1 className="-m-1.5 p-1.5 text-lg uppercase text-gray-900 dark:text-white font-bold">
              Logo
            </h1>
          </Link>
        </div>
        <div className="hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 dark:text-gray-300"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="flex gap-x-12">
          <Link
            to="/product"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Product
          </Link>
          <Link
            to="/features"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Features
          </Link>
          <Link
            to="/marketplace"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Marketplace
          </Link>
          <Link
            to="/company"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Company
          </Link>
        </div>
        <div className="flex lg:flex-1 lg:justify-end">
          <Link to="/login">
            <Button
              title={"Log in"

              }
              onClick={() => alert("e")}
              primary={false}
              icon={<span aria-hidden="true">&rarr;</span>}
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Header;
