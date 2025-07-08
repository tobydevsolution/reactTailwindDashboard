import React from "react";
import {
  PencilSquareIcon,
  TagIcon,
  CodeBracketIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";

const courseData = [
  {
    id: 1,
    icon: PencilSquareIcon,
    progress: "2/8 watched",
    title: "UI/UX Design",
    iconBgColor: "bg-indigo-100",
    iconTextColor: "text-indigo-600",
    borderColor: "border-indigo-200",
  },
  {
    id: 2,
    icon: TagIcon,
    progress: "3/8 watched",
    title: "Branding",
    iconBgColor: "bg-pink-100",
    iconTextColor: "text-pink-600",
    borderColor: "border-pink-200",
  },
  {
    id: 3,
    icon: CodeBracketIcon,
    progress: "6/12 watched",
    title: "Front End",
    iconBgColor: "bg-blue-100",
    iconTextColor: "text-blue-600",
    borderColor: "border-blue-200",
  },
];

const CourseProgressCards = () => {
  return (
    <div className="p-4 sm:p-6 bg-gray-50 rounded-xl">
      {" "}
      {/* Removed fixed height, adjusted padding */}
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
        {" "}
        {/* Responsive font size */}
        Course Progress
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {" "}
        {/* Adjusted grid for responsiveness */}
        {courseData.map((course) => (
          <div
            key={course.id}
            className={`flex items-center p-3 sm:p-4 rounded-4xl shadow-md h-24 bg-white border ${course.borderColor}`}
          >
            {/* Circular Icon Container */}
            <div
              className={`flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full ${course.iconBgColor} mr-3 sm:mr-4`}
            >
              <course.icon
                className={`h-6 w-6 sm:h-6 sm:w-6 ${course.iconTextColor}`}
              />{" "}
              {/* Responsive icon size */}
            </div>

            {/* Course Details */}
            <div className="flex-grow">
              <p className="text-xs sm:text-sm text-gray-500 font-medium">
                {" "}
                {/* Responsive text size */}
                {course.progress}
              </p>
              <h3 className="text-base text-[.8rem] font-semibold text-gray-800">
                {" "}
                {/* Responsive text size */}
                {course.title}
              </h3>
            </div>

            {/* Three-dot Menu Icon */}
            <button className="p-1 sm:p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300">
              {" "}
              {/* Responsive button padding */}
              <EllipsisVerticalIcon className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseProgressCards;
