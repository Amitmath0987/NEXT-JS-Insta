import React from "react";
import TabItem from "./TabItem/TabItem";
import {
  SearchIcon,
  HomeIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
} from "@heroicons/react/outline";
const TabItems = () => {
  const tabitemsObj = [
    {
      icon: <HomeIcon className="footerBtn" />,
      redirectPath: "/",
    },
    {
      icon: (
        <div className="relative">
          <PaperAirplaneIcon className="footerBtn rotate-45" />
          <div className="  absolute -top-2 -right-1 bg-red-400  rounded-full w-5 h-5 flex items-center justify-center text-white animate-ping">
            3
          </div>
        </div>
      ),
      redirectPath: "/",
    },
    {
      icon: (
        <PlusCircleIcon
          className="footerBtn"
          //   onClick={() => setShowUploadPost(true)}
        />
      ),
      redirectPath: "/",
    },
    {
      icon: <UserGroupIcon className="footerBtn" />,
      redirectPath: "/",
    },
    {
      icon: <HeartIcon className="footerBtn" />,

      redirectPath: "/",
    },
  ];
  return (
    <div className="flex justify-between items-center space-x-2 w-full">
      {tabitemsObj.map((tab, index) => (
        <TabItem icon={tab.icon} redirectPath={tab.redirectPath} key={index} />
      ))}
    </div>
  );
};

export default TabItems;
