import React from "react";
import faker from "faker";
import { useEffect, useState } from "react";
import Story from "./Story/Story";
import styles from "./Story.module.css";

const Stories = () => {
  const [suggestionList, setSuggestionList] = useState([]);
  useEffect(() => {
    const suggestionList = [...Array(50)]?.map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestionList(suggestionList);
  }, []);
  return (
    <div
      className={`flex items-center space-x-4 p-6  border rounded bg-white my-6 overflow-x-scroll ${styles.storyWrapper}`}
    >
      {suggestionList?.map((user) => (
        <Story key={user?.id} avatar={user?.avatar} userName={user?.name} />
      ))}
    </div>
  );
};

export default Stories;
