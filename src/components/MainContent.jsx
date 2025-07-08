import React from "react";
import SearchInput from "./SearchInput";
import CourseProgressCards from "./CourseProgressCards";
import ContinueWatchingCards from "./ContinueWatchingCards";
// import SearchInputWithIcon from "./SearchInputWithIcon";

const MainContent = () => {
  return (
    <div className="bg-[#f2f2f2] min-h-full flex flex-col space-y-7">
      <SearchInput />
      <div className="rounded-3xl w-full h-[40%] bg-[#6E62E5] p-4 mt-9 text-white">
        <h2 className="text-xs uppercase font-semibold mb-3">ONLINE COURSE</h2>
        <h1 className="text-3xl">
          Sharpen Your Skills with <br /> Professional Online Courses
        </h1>
        <button className="bg-[#000] rounded-4xl p-3 mt-7">Join Now</button>
      </div>
      <CourseProgressCards />
      <ContinueWatchingCards />
    </div>
  );
};

export default MainContent;
