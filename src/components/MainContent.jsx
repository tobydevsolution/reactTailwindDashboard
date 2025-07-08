import React from "react";
import SearchInput from "./SearchInput"; // Assuming SearchInput is responsive
import CourseProgressCards from "./CourseProgressCards";
import ContinueWatchingCards from "./ContinueWatchingCards";
import LessonTable from "./LessonTable";

const MainContent = () => {
  return (
    // Responsive padding and spacing for the entire main content area
    <div className="bg-[#f2f2f2] min-h-full flex flex-col p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
      <SearchInput />

      <div className="rounded-3xl w-full bg-[#6E62E5] p-3 sm:p-6 lg:p-5 text-white min-h-[150px] sm:min-h-[200px] flex flex-col justify-center">
        {" "}
        <h2 className="text-xs sm:text-sm uppercase font-semibold mb-2 sm:mb-3">
          ONLINE COURSE
        </h2>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
          {" "}
          {/* Responsive font sizes */}
          Sharpen Your Skills with <br /> Professional Online Courses
        </h1>
        <button className="bg-[#000] rounded-full px-5 py-2 sm:px-6 sm:py-3 mt-5 sm:mt-7 self-start hover:bg-gray-800 transition">
          {" "}
          {/* Changed to rounded-full, added responsive padding, self-start for alignment */}
          Join Now
        </button>
      </div>

      <CourseProgressCards />
      <ContinueWatchingCards />
      <LessonTable />
    </div>
  );
};

export default MainContent;
