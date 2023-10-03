import { useState } from "react";

import MenuItem from "./menu/menuItem";
import SubMenuItem from "./menu/subMenuItem";

import { navigationData } from "../../data/navigationData";

import useOnClickOutsideRef from "../../hooks/useOnClickOutsideRef";

export default function HeaderMenu() {
  const [subMenuItems, setSubMenuItems] = useState(null);

  const subMenuRef = useOnClickOutsideRef(() => {
    setSubMenuItems(null);
  });

  return (
    <div className="flex-col">
      <div
        ref={subMenuRef}
        className="relative hidden md:flex items-center justify-start space-x-[30px] bg-gray-50 p-4 flex-nowrap"
      >
        {navigationData.map((module) => {
          return (
            <MenuItem
              key={module.SubModuleId}
              module={module}
              onChangeSubMenuItems={(items) => setSubMenuItems(items)}
            />
          );
        })}
      </div>
      <div>
        {subMenuItems && (
          <div className="hidden md:flex flex-wrap items-stretch relative justify-start space-x-4 bg-gray-50 px-2 text-sm">
            {subMenuItems.map((section) => {
              return <SubMenuItem key={section.SectionId} section={section} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
