import myPic from "@assets/images/dummyUser.jpg";
import Image from "next/image";
const Story = ({ avatar, userName }) => {
  return (
    <div>
      <img
        src={
          "https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"
        }
        alt={userName}
        className="w-18 h-18 p-[1.5px]  border-2 border-red-500 object-cover cursor-pointer hover:scale-110  transition-all ease-out"
        style={{ borderRadius: "50%" }}
      />
      <p className="truncate text-xs w-14 text-center">{userName}</p>
    </div>
  );
};

Story.defaultProps = {
  userName: "@johnDoe",
  src: myPic,
};
export default Story;
