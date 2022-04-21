import React from "react";
import Stories from "@components/Stories/Stories";
import Posts from "@components/Posts/Posts";
import MiniProfile from "@components/MiniProfile/MiniProfile";
import SuggestionsList from "@components/SuggestionList/SuggestionsList";

const Feeds = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-5xl mx-auto  gap-8 mb-10 md:mb-0">
      <section className="col-span-2">
        <Stories />
        {/* posts */}
        <Posts />
      </section>
      <section className=" hidden md:inline-grid md:col-span-1">
        <div className="fixed w-80">
          <MiniProfile />
          <SuggestionsList />
        </div>
      </section>
    </main>
  );
};

export default Feeds;
