import { useEffect, useState } from "react";
import faker from "faker";
import Image from "next/image";
const SuggestionsList = () => {
  const [suggestionList, setSuggestionList] = useState([]);
  useEffect(() => {
    const suggestionList = [...Array(5)]?.map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestionList(suggestionList);
  }, []);
  return (
    <div className="mt-5">
      <div className="flex justify-between items-center">
        <h2 className="text-gray-400 font-semibold">Suggestions For You</h2>
        <h3 className="font-semibold cursor-pointer text-sm">See All</h3>
      </div>

      <div className="h-76 overflow-y-auto ">
        {suggestionList?.map((user) => (
          <div
            className="flex items-center justify-between   mt-3 px-1"
            key={user?.id}
          >
            {/* {user?.avatar && (
              <Image
                src={user?.avatar}
                width="40"
                height="40"
                className="rounded-full"
              />
            )} */}
            <img
              src={user?.avatar}
              alt={user?.name}
              className=" h-10 w-10 p-[1.5px] rounded-full border-2 border-red-500 object-cover cursor-pointer hover:scale-110 transition-all ease-out"
            />
            <div className="flex-1 mx-4">
              <h2 className="font-semibold hover:underline cursor-pointer  ">
                {user?.name}
              </h2>
              <h3 className="text-gray-400 text-sm truncate font-normal">
                Suggested for you
              </h3>
            </div>
            <button className="font-normal text-xs text-blue-500">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestionsList;
