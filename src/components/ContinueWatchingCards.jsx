import React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HeartIcon,
  CodeBracketIcon,
  PencilSquareIcon,
  //   TagIcon,
} from "@heroicons/react/24/outline";

const continueWatchingData = [
  {
    id: 1,
    image: "https://placehold.co/400x225/E0E7FF/3730A3?text=Front+End",
    categoryIcon: CodeBracketIcon,
    categoryName: "FRONT END",
    categoryIconColor: "text-blue-600",
    categoryBgColor: "bg-blue-100",
    title: "Beginner's Guide to Becoming a Professional Front-End Developer",
    progress: 70,
    instructorAvatar: "https://placehold.co/40x40/D1D5DB/1F2937?text=LS",
    instructorName: "Leonardo samsul",
    instructorRole: "Mentor",
  },
  {
    id: 2,
    image: "https://placehold.co/400x225/FCE7F3/BE185D?text=UI/UX+Design",
    categoryIcon: PencilSquareIcon,
    categoryName: "UI/UX DESIGN",
    categoryIconColor: "text-pink-600",
    categoryBgColor: "bg-pink-100",
    title: "Optimizing User Experience with the Best UI/UX Design",
    progress: 40,
    instructorAvatar: "https://placehold.co/40x40/D1D5DB/1F2937?text=BS",
    instructorName: "Bayu Saito",
    instructorRole: "Mentor",
  },
  //   {
  //     id: 3,
  //     image: "https://placehold.co/400x225/FEE2E2/EF4444?text=Branding",
  //     categoryIcon: TagIcon,
  //     categoryName: "BRANDING",
  //     categoryIconColor: "text-purple-600",
  //     categoryBgColor: "bg-purple-100",
  //     title: "Reviving and Refreshing Your Company Image",
  //     progress: 90,
  //     instructorAvatar: "https://placehold.co/40x40/D1D5DB/1F2937?text=PS",
  //     instructorName: "Padhang Satrio",
  //     instructorRole: "Mentor",
  //   },
];

const ContinueWatchingCards = () => {
  return (
    <div className="p-4 sm:p-6 bg-gray-50 rounded-xl">
      {" "}
      {/* Removed fixed height, adjusted padding */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        {" "}
        {/* Adjusted for small screens */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-0">
          {" "}
          {/* Responsive font size and margin */}
          Continue Watching
        </h2>
        <div className="flex space-x-2">
          <button className="p-2 rounded-full bg-white shadow-sm border border-gray-200 hover:bg-gray-100 transition">
            <ChevronLeftIcon className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-2 rounded-full bg-indigo-600 text-white shadow-sm hover:bg-indigo-700 transition">
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      {/* Responsive grid for cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {continueWatchingData.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
          >
            {/* Course Image */}
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover" // Fixed height for consistent image size
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/400x225/E0E7FF/3730A3?text=Image+Error";
                }}
              />
              <button className="absolute top-3 right-3 p-2 rounded-full bg-white bg-opacity-75 hover:bg-opacity-100 transition">
                <HeartIcon className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            {/* Course Content */}
            <div className="p-4">
              {/* Category */}
              <div
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${course.categoryBgColor} ${course.categoryIconColor} mb-2`}
              >
                <course.categoryIcon className="h-4 w-4 mr-1" />
                {course.categoryName}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-tight">
                {course.title}
              </h3>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
                <div
                  className="bg-indigo-600 h-1.5 rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>

              {/* Instructor */}
              <div className="flex items-center">
                <img
                  src={course.instructorAvatar}
                  alt={course.instructorName}
                  className="h-8 w-8 rounded-full mr-2 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/40x40/D1D5DB/1F2937?text=User";
                  }}
                />
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {course.instructorName}
                  </p>
                  <p className="text-xs text-gray-500">
                    {course.instructorRole}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatchingCards;
