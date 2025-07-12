// src/components/MainContent.jsx
import React from "react";
import SearchInput from "./SearchInput";
import CourseProgressCards from "./CourseProgressCards";
import ContinueWatchingCards from "./ContinueWatchingCards";
import LessonTable from "./LessonTable";
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const allContinueWatchingData = [
  {
    id: 1,
    image:
      "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg",
    categoryIcon: "CodeBracketIcon",
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
    categoryIcon: "PencilSquareIcon", // Use string for icon name
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
      "https://tse2.mm.bing.net/th/id/OIP.oByECaX0BkiXuTy96HUpqgHaEv?pid=Api&P=0&h=220.jpg",
    categoryIcon: "TagIcon",
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
    categoryIcon: "CodeBracketIcon", // Use string for icon name
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
      "https://tse3.mm.bing.net/th/id/OIP.ZD9jkCl2dSXq8IQcpZUMDwHaEK?pid=Api&P=0&h=220.jpg",
    categoryIcon: "BookmarkIcon",
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
      "https://tse1.mm.bing.net/th/id/OIP.yOiYDUU1PoqSMdR3saNd2QHaEK?pid=Api&P=0&h=220.jpg",
    categoryIcon: "PencilSquareIcon",
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

const MainContent = ({
  searchQuery,
  setSearchQuery,
  showAllLessons,
  setShowAllLessons,
}) => {
  const filteredContinueWatchingData = allContinueWatchingData.filter(
    (course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructorName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#f2f2f2] min-h-full flex flex-col p-4 sm:p-6 lg:p-5 min-w-0 space-y-6 sm:space-y-8">
      <SearchInput
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="rounded-3xl w-full bg-[#6E62E5] p-3 sm:p-6 lg:p-5 text-white min-h-[150px] sm:min-h-[200px] flex flex-col justify-center">
        <h2 className="text-xs sm:text-sm uppercase font-semibold mb-2 sm:mb-3">
          ONLINE COURSE
        </h2>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
          Sharpen Your Skills with <br /> Professional Online Courses
        </h1>
        <button className="bg-[#000] rounded-full px-6 py-3 mt-7 self-start hover:bg-gray-800 transition flex items-center justify-between space-x-2">
          <span>Join Now</span>
          <span className="bg-white p-1 rounded-full flex items-center justify-center">
            <ChevronRightIcon className="h-4 w-4 text-[#000]" />
          </span>
        </button>
      </div>

      <CourseProgressCards />
      <ContinueWatchingCards
        continueWatchingData={filteredContinueWatchingData}
      />
      <LessonTable
        showAllLessons={showAllLessons}
        setShowAllLessons={setShowAllLessons}
      />
    </div>
  );
};

export default MainContent;
