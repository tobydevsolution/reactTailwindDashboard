import React, { useState, useEffect } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HeartIcon,
  CodeBracketIcon,
  PencilSquareIcon,
  TagIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";

const iconComponents = {
  CodeBracketIcon,
  PencilSquareIcon,
  TagIcon,
  BookmarkIcon,
};

const ContinueWatchingCards = ({ continueWatchingData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(1);

  // Update cards per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1); // Mobile: 1 full-width card
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2); // Tablet: 2 cards
      } else {
        setCardsPerPage(3); // Desktop: 3 cards
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    const maxIndex = Math.max(0, continueWatchingData.length - cardsPerPage);
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 rounded-xl overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-0">
          Continue Watching
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-2 rounded-full bg-white shadow-sm border border-gray-200 hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeftIcon className="h-5 w-5 text-gray-600" />
          </button>
          <button
            onClick={handleNext}
            disabled={
              currentIndex >= continueWatchingData.length - cardsPerPage
            }
            className="p-2 rounded-full bg-indigo-600 text-white shadow-sm hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(calc(-${
              currentIndex * (100 / cardsPerPage)
            }% - ${currentIndex * 12}px))`,
          }}
        >
          {continueWatchingData.map((course) => {
            const CategoryIcon = iconComponents[course.categoryIcon];
            return (
              <div
                key={course.id}
                className={`
                  flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200
                  ${
                    cardsPerPage === 1
                      ? "w-full"
                      : cardsPerPage === 2
                      ? "w-full md:w-[calc(50%-12px)]"
                      : "w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-12px)]"
                  }
                  mr-3
                `}
              >
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-40 sm:h-48 object-cover"
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

                <div className="p-4">
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${course.categoryBgColor} ${course.categoryIconColor} mb-2`}
                  >
                    {CategoryIcon && <CategoryIcon className="h-4 w-4 mr-1" />}
                    {course.categoryName}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-tight">
                    {course.title}
                  </h3>

                  <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
                    <div
                      className="bg-indigo-600 h-1.5 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>

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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContinueWatchingCards;
