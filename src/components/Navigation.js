import { Link } from "react-router-dom";

function Navigation({ active }) {
  return (
    <>
      <nav className="w-full bg-VDarkBlueMain flex justify-between items-center px-3 py-2 text-white">
        <div className="mx-3 font-bold text-lg">LOGO</div>
        <div className="mx-3 flex justify-between items-center">
          {active === "home" ? (
            <Link to="/">
              {" "}
              <div className="mx-1 bg-LightPurple rounded-md px-2 py-1">
                Home
              </div>
            </Link>
          ) : (
            <Link to="/">
              <div className="mx-1 hover:bg-slate-700 rounded-md px-2 py-1 bg-opacity-25">
                Home
              </div>
            </Link>
          )}

          {active === "edit" ? (
            <Link to="/edit">
              <div className="mx-1 bg-LightPurple rounded-md px-2 py-1">
                Edit
              </div>
            </Link>
          ) : (
            <Link to="/edit">
              <div className="mx-1 hover:bg-slate-700 rounded-md px-2 py-1 bg-opacity-25">
                Edit
              </div>
            </Link>
          )}

          {active === "create" ? (
            <Link to="/create">
              <div className="mx-1 bg-LightPurple rounded-md px-2 py-1">
                Create
              </div>
            </Link>
          ) : (
            <Link to="/create">
              <div className="mx-1 hover:bg-slate-700 rounded-md px-2 py-1 bg-opacity-25">
                Create
              </div>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navigation;
