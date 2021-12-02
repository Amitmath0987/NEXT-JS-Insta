import { useState } from "react";
import Image from "next/image";
import instaTextLogo from "@assets/images/instaText.png";
import instaLogo from "@assets/images/instagram-logo.png";
import myPic from "@assets/images/mypic.jpg";
import {
  SearchIcon,
  HomeIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import UploadPost from "../UploadPost/UploadPost";
import Drawer from "@components/Drawer/Drawer";
const Header = () => {
  const [showUploadPost, setShowUploadPost] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <div className="shadow bg-white border-b sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-5 lg:mx-auto">
        <div className="cursor-pointer">
          <div className="relative h-24 w-24 hidden lg:inline-grid">
            <Image
              src={instaTextLogo}
              alt="Instagram"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative h-10 w-10 lg:hidden flex-shrink-0 text-pink-500">
            <Image
              src={instaLogo}
              alt="Instagram"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        {/* Search input */}
        <div className="relative p-3 rounded-md">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="search"
            className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
          />
        </div>

        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <div className="relative">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="hidden md:inline-flex  absolute -top-2 -right-1 bg-red-400  rounded-full w-5 h-5 flex items-center justify-center text-white animate-ping">
              3
            </div>
          </div>
          <PlusCircleIcon
            className="navBtn"
            onClick={() => setShowUploadPost(true)}
          />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          {/* <img
          src={myPic}
          alt="profile-pic"
          className="h-10 rounded-full cursor-pointer"
        /> */}
          <div className="cursor-pointer h-10 w-10   hover:scale-110 transition-all duration-150 ease-in-out ">
            <Image
              src={myPic}
              alt="profile-pic"
              objectFit="cover"
              width="60"
              height="60"
              className="rounded-full"
            />
          </div>
          <MenuIcon
            className="h-7 md:hidden cursor-pointer"
            onClick={() => setShowDrawer(!showDrawer)}
          />
        </div>
      </div>
      <UploadPost
        showUploadPost={showUploadPost}
        setShowUploadPost={setShowUploadPost}
      />
      <Drawer
        showDrawer={showDrawer}
        onClose={() => setShowDrawer(!showDrawer)}
      >
        <div className="grid place-items-center">
          <div className="relative h-60 w-60  ">
            <Image
              src={instaTextLogo}
              alt="Instagram"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <button
            type="button"
            class="text-white w-full py-3 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:opacity-75  rounded-lg"
          >
            Logout
          </button>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
