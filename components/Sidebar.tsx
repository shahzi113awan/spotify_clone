"use client";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
type Props = {
  children: React.ReactNode;
};

const Sidebar = (props: Props) => {
  const pathName = usePathname();
  const routes = useMemo(
    () => [
      {
        label: "Home",
        icon: HiHome,
        active: pathName !== "/search",
        href: "/",
      },
      {
        label: "Search",
        icon: BiSearch,
        active: pathName === "/search",
        href: "/search",
      },
    ],
    [pathName]
  );
  return (
    <div>
      <div className="h-full">
        <div className="md-flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
          <Box ><div className="flex flex-col gap-y-4 px-5 py-4">{routes.map((_)=>{
            return(<SidebarItem Icon={_.icon} href={_.href} label={_.label}/>)
          })}</div></Box>
          <Box className="overflow-y-auto h-full">sidebar 1</Box>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
