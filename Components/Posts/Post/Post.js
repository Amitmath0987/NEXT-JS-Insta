import {
  BookmarkIcon,
  BookOpenIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

const Post = ({ id, userImage, userName, img, caption }) => {
  return (
    <div className="bg-white rounded my-7 shadow">
      {/* header */}
      <div className="flex items-center p-5">
        {/* <img
          src={userImage}
          alt="img"
          className="rounded-full h-12 w-12 object-contain"
        /> */}
        <Image
          src={userImage}
          width="50"
          height="50"
          className="rounded-full"
        />

        <p className="flex-1 ml-4 font-bold">{userName}</p>
        <div>
          <DotsHorizontalIcon className="h-5 cursor-pointer" />
        </div>
      </div>

      {/* image */}
      <Image
        src={userImage}
        width=""
        height=""
        objectFit="cover"
        className="w-full"
      />
      {/* Buttons */}
      <div className="flex items-center justify-between p-5">
        <div className="flex space-x-3 ">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      {/* caption */}

      <p className="px-5 truncate">
        <span className="font-bold mr-1">{userName}</span>
        {caption}
      </p>

      {/*input comment */}

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="btn" />
        <input
          placeholder="enter comment..."
          className="flex-1 mx-1 outline-none focus:ring-0"
        />
        <button className="text-blue-400 font-semibold">Post</button>
      </form>
    </div>
  );
};

export default Post;
