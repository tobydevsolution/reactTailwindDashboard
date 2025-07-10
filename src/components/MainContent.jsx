import React from "react";
import SearchInput from "./SearchInput"; // Assuming SearchInput is responsive
import CourseProgressCards from "./CourseProgressCards";
import ContinueWatchingCards from "./ContinueWatchingCards";
import LessonTable from "./LessonTable";
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const MainContent = () => {
  return (
    // Responsive padding and spacing for the entire main content area
    <div className="bg-[#f2f2f2] min-h-full flex flex-col p-4 sm:p-6 lg:p-5 space-y-6 sm:space-y-8">
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
        <button className="bg-[#000] rounded-full px-6 py-3 mt-7 self-start hover:bg-gray-800 transition flex items-center justify-between space-x-2">
          {" "}
          {/* Added flex, items-center, space-x-2 */}
          <span>Join Now</span>
          <span className="bg-white p-1 rounded-full flex items-center justify-center">
            {" "}
            {/* White background for the icon */}
            <ChevronRightIcon className="h-4 w-4 text-[#000]" />{" "}
            {/* Icon with appropriate size and color */}
          </span>
        </button>
      </div>

      <CourseProgressCards />
      <ContinueWatchingCards />
      <LessonTable />
    </div>
  );
};

export default MainContent;
