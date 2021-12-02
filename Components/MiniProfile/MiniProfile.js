import profilePic from "@assets/images/dummyUser.jpg";
import Image from "next/image";
const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between space-x-4 mt-10 ">
      <Image src={profilePic} width="60" height="60" className="rounded-full" />
      <div className="flex-1 mx-4">
        <h2 className="font-semibold">Amit Mathur</h2>
        <h3 className="text-gray-400 text-sm truncate font-normal">
          mySelf._.mathur
        </h3>
      </div>
      <button className="font-normal text-sm text-blue-500">logout</button>
    </div>
  );
};

export default MiniProfile;
