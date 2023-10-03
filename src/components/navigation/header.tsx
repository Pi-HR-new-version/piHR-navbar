import { useState } from "react";

import Dropdown from "./dropdown";
import SubModule from "./menu/subModule";

import Logo from "../../assets/icons/logo";
import ArrowDownIcon from "../../assets/icons/arrowDownIcon";
import NotificationIcon from "../../assets/icons/notificationIcon";
import UserProfileIcon from "../../assets/icons/userProfileIcon";

import useOnClickOutsideRef from "../../hooks/useOnClickOutsideRef";

import { getCurrentUser } from "auth/authHelpers";

import { navigationData } from "../../data/navigationData";

export default function Header() {
  const [dropdownShown, setDropdownShown] = useState(false);
  const [mobileMenuShown, setMobileMenuShown] = useState(false);

  const user = getCurrentUser();
  console.log(user);

  const dropdownRef = useOnClickOutsideRef(() => setDropdownShown(false));

  function handleDropdownClick() {
    setDropdownShown((prev) => !prev);
  }

  return (
    <header>
      <div className="flex items-center justify-between p-5 flex-wrap">
        <Logo />

        <div className="hidden md:flex justify-center items-center space-x-4">
          <div>
            <button className="flex justify-center items-center bg-[#F4F7FF] rounded-full h-[36px] w-[36px]">
              <NotificationIcon />
            </button>
          </div>
          <div className="flex justify-center items-center space-x-2">
            {/* <UserProfileIcon /> */}
            <img
              src={
                decodeURIComponent(user?.UserImageUrl) ??
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              }
              alt="profile"
              className="w-9 h-9 rounded-full object-cover"
            />
            <div>
              <div
                ref={dropdownRef}
                onClick={handleDropdownClick}
                className="flex justify-center items-center space-x-2 "
              >
                <div className="inline-flex flex-col items-start relative">
                  <div className=" w-fit font-semibold font-poppins text-black text-[14px] leading-[normal]">
                    {user?.CompanyName}
                  </div>
                  <div className=" w-fit opacity-70 font-normal font-poppins text-black text-[10px] leading-[normal]">
                    {user?.EmployeeName}
                  </div>
                  {dropdownShown && <Dropdown />}
                </div>
                <ArrowDownIcon />
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => setMobileMenuShown((prev) => !prev)}
          className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200"
        >
          <div className="w-5 h-1 bg-gray-600 mb-1"></div>
          <div className="w-5 h-1 bg-gray-600 mb-1"></div>
          <div className="w-5 h-1 bg-gray-600"></div>
        </button>
      </div>

      {/* For mobile devices */}
      <div
        className={`${
          mobileMenuShown ? "flex" : "hidden"
        } md:hidden absolute w-3/5 flex-col justify-between border right-0 top-[75px]`}
      >
        <div className="px-4 py-1">
          <ul className="mt-6 space-y-1">
            {navigationData.map((module) => {
              return <SubModule key={module.SubModuleId} module={module} />;
            })}
          </ul>
        </div>

        <div className="sticky inset-x-0 bottom-0 border border-gray-100 bg-white">
          <a
            href="#"
            className="flex items-center gap-4 p-4 px-8 hover:bg-gray-50"
          >
            <div className="flex items-center justify-center gap-4">
              <div>
                <p className="opacity-70 text-black text-xs font-normal font-poppins">
                  <span className="block font-semibold">VivaSoft</span>
                  <span>Admin</span>
                </p>
              </div>
              <div>
                <UserProfileIcon />
              </div>
            </div>
          </a>
        </div>
      </div>
      {/* */}
    </header>
  );
}
