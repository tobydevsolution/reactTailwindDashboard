import React, { useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HeartIcon,
  CodeBracketIcon,
  PencilSquareIcon,
  TagIcon, // Added TagIcon for new categories
  BookmarkIcon, // Added BookmarkIcon for new categories
} from "@heroicons/react/24/outline";

const continueWatchingData = [
  {
    id: 1,
    image:
      "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg",
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
    image:
      "https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg",
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
  {
    id: 3,
    image:
      "https://cdn.pixabay.com/photo/2017/08/01/08/33/man-2562325_1280.jpg",
    categoryIcon: TagIcon,
    categoryName: "BRANDING",
    categoryIconColor: "text-purple-600",
    categoryBgColor: "bg-purple-100",
    title: "Crafting a Memorable Brand Identity from Scratch",
    progress: 85,
    instructorAvatar: "https://placehold.co/40x40/FFD1DC/881337?text=PS",
    instructorName: "Padhang Satrio",
    instructorRole: "Mentor",
  },
  {
    id: 4,
    image:
      "https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327_1280.jpg",
    categoryIcon: CodeBracketIcon,
    categoryName: "BACK END",
    categoryIconColor: "text-green-600",
    categoryBgColor: "bg-green-100",
    title: "Node.js and Express: Building RESTful APIs",
    progress: 60,
    instructorAvatar: "https://placehold.co/40x40/CCE0FF/0B3E6E?text=LS",
    instructorName: "Leonardo Samsul",
    instructorRole: "Mentor",
  },
  {
    id: 5,
    image:
      "https://cdn.pixabay.com/photo/2016/09/01/10/23/computer-1635293_1280.jpg",
    categoryIcon: BookmarkIcon,
    categoryName: "DATA SCIENCE",
    categoryIconColor: "text-red-600",
    categoryBgColor: "bg-red-100",
    title: "Introduction to Python for Data Analysis",
    progress: 30,
    instructorAvatar: "https://placehold.co/40x40/A78BFA/FFFFFF?text=JR",
    instructorName: "Jason Ranti",
    instructorRole: "Mentor",
  },
  {
    id: 6,
    image:
      "https://cdn.pixabay.com/photo/2017/03/10/18/31/phone-2134599_1280.jpg",
    categoryIcon: PencilSquareIcon,
    categoryName: "MOBILE DEV",
    categoryIconColor: "text-yellow-600",
    categoryBgColor: "bg-yellow-100",
    title: "Flutter Basics: Building Cross-Platform Apps",
    progress: 95,
    instructorAvatar: "https://placehold.co/40x40/FFD1DC/881337?text=BS",
    instructorName: "Bayu Saito",
    instructorRole: "Mentor",
  },
];

const ContinueWatchingCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the starting index of visible cards
  const cardsPerPage = 2; // Number of cards to show at once on larger screens

  const handleNext = () => {
    // Calculate the maximum possible index to prevent going out of bounds
    const maxIndex = Math.max(0, continueWatchingData.length - cardsPerPage);
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + cardsPerPage, maxIndex)
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - cardsPerPage));
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 rounded-xl overflow-hidden">
      {" "}
      {/* Added overflow-hidden */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-0">
          Continue Watching
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0} // Disable prev button at the start
            className="p-2 rounded-full bg-white shadow-sm border border-gray-200 hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeftIcon className="h-5 w-5 text-gray-600" />
          </button>
          <button
            onClick={handleNext}
            disabled={
              currentIndex >= continueWatchingData.length - cardsPerPage
            } // Disable next button at the end
            className="p-2 rounded-full bg-indigo-600 text-white shadow-sm hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      {/* Slider Container */}
      <div className="relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex / cardsPerPage) * 100}%)`,
          }} // Adjust for 2 cards per view
        >
          {continueWatchingData.map((course) => (
            <div
              key={course.id}
              className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(70%-12px)] flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 mr-6" // Added mr-6 for gap
            >
              {/* Course Image */}
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 object-cover"
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
    </div>
  );
};

export default ContinueWatchingCards;
