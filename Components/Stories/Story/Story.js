import myPic from "@assets/images/mypic.jpg";
const Story = ({ avatar, userName }) => {
  return (
    <div>
      <img
        src={avatar}
        alt={userName}
        className="w-18 h-18 p-[1.5px] rounded-full border-2 border-red-500 object-cover cursor-pointer hover:scale-110 transition-all ease-out"
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
