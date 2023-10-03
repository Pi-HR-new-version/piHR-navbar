import { removeToken } from "auth/authHelpers";
import { useNavigate } from "react-router-dom";

export default function Dropdown() {
  const navigate = useNavigate();
  function handleLogout() {
    removeToken();
    navigate("/");
  }
  return (
    <div
      className="absolute -right-6 top-11 z-10 mt-2 w-40 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
      role="menu"
    >
      <div className="p-2">
        <a
          href="#"
          className="block rounded-lg px-4 py-2 text-sm text-left text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          role="menuitem"
        >
          Profile
        </a>
      </div>

      <div className="p-2">
        <div>
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
            role="menuitem"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
