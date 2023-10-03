export default function SubMenuItem({ section }) {
  return (
    <>
      <div className="group relative inline-block">
        <button className="outline-none focus:outline-none px-3 py-1  rounded-sm flex gap-1 items-center min-w-[7rem]">
          <span className="hover:font-semibold  text-left py-2">
            {section.SectionName}
          </span>
          <span>
            <svg
              className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </button>
        <ul className="bg-white border z-10 top-11 max-h-[15rem]  overflow-y-scroll-auto overflow-y-auto rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top">
          {section.Screens.map((screen) => {
            return (
              <li
                key={screen.ScreenId}
                className="rounded-sm px-3 py-1 hover:bg-gray-100 hover:font-semibold"
              >
                <button className="text-left w-max min-w-[103px]">
                  {screen.ScreenName}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
