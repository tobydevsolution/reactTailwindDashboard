import React from "react";
import {
  ArrowUpRightIcon,
  PencilSquareIcon,
  CodeBracketIcon,
  TagIcon,
} from "@heroicons/react/24/outline";

const lessonData = [
  {
    id: 1,
    mentorAvatar: "https://placehold.co/40x40/FFD1DC/881337?text=PS",
    mentorName: "Padhang Satrio",
    mentorDate: "2/16/2004",
    typeIcon: PencilSquareIcon,
    typeName: "UI/UX DESIGN",
    typeIconColor: "text-pink-600",
    typeBgColor: "bg-pink-100",
    description: "Understand Of UI/UX Design",
  },
  {
    id: 2,
    mentorAvatar: "https://placehold.co/40x40/D1D5DB/1F2937?text=ZH",
    mentorName: "Zakir Horizontal",
    mentorDate: "3/01/2004",
    typeIcon: CodeBracketIcon,
    typeName: "FRONT END",
    typeIconColor: "text-blue-600",
    typeBgColor: "bg-blue-100",
    description: "Mastering React Hooks",
  },
  {
    id: 3,
    mentorAvatar: "https://placehold.co/40x40/CCE0FF/0B3E6E?text=LS",
    mentorName: "Leonardo Samsul",
    mentorDate: "4/22/2004",
    typeIcon: TagIcon,
    typeName: "BRANDING",
    typeIconColor: "text-purple-600",
    typeBgColor: "bg-purple-100",
    description: "Building a Strong Brand Identity",
  },
  {
    id: 4,
    mentorAvatar: "https://placehold.co/40x40/A78BFA/FFFFFF?text=JR",
    mentorName: "Jason Ranti",
    mentorDate: "5/10/2004",
    typeIcon: PencilSquareIcon,
    typeName: "UI/UX DESIGN",
    typeIconColor: "text-pink-600",
    typeBgColor: "bg-pink-100",
    description: "Advanced Prototyping Techniques",
  },
  {
    id: 5,
    mentorAvatar: "https://placehold.co/40x40/D1D5DB/1F2937?text=AM",
    mentorName: "Alice Miller",
    mentorDate: "6/05/2004",
    typeIcon: CodeBracketIcon,
    typeName: "BACK END",
    typeIconColor: "text-green-600",
    typeBgColor: "bg-green-100",
    description: "Introduction to Node.js",
  },
  {
    id: 6,
    mentorAvatar: "https://placehold.co/40x40/FFD1DC/881337?text=KB",
    mentorName: "Kevin Brown",
    mentorDate: "7/12/2004",
    typeIcon: TagIcon,
    typeName: "MARKETING",
    typeIconColor: "text-orange-600",
    typeBgColor: "bg-orange-100",
    description: "Digital Marketing Strategies",
  },
];

const LessonTable = ({ showAllLessons, setShowAllLessons }) => {
  const displayedLessons = showAllLessons ? lessonData : lessonData.slice(0, 3); // Show first 3 by default

  const handleToggleLessons = () => {
    setShowAllLessons(!showAllLessons);
  };

  return (
    <div className="p-6 bg-gray-50 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Your Lesson</h2>
        {lessonData.length > 3 && ( // Only show "See all/less" if there are more than 3 lessons
          <button
            onClick={handleToggleLessons}
            className="text-indigo-600 hover:underline text-sm font-semibold"
          >
            {showAllLessons ? "See less" : "See all"}
          </button>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow-sm">
          <thead>
            <tr className="bg-gray-100 text-left text-xs font-semibold uppercase text-gray-600 tracking-wider">
              <th className="py-3 px-4 rounded-tl-xl">Mentor</th>
              <th className="py-3 px-4">Type</th>
              <th className="py-3 px-4">Desc</th>
              <th className="py-3 px-4 rounded-tr-xl text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-[.8rem]">
            {displayedLessons.map((lesson) => (
              <tr
                key={lesson.id}
                className="border-b border-gray-200 last:border-b-0"
              >
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <img
                      src={lesson.mentorAvatar}
                      alt={lesson.mentorName}
                      className="h-10 w-10 rounded-full mr-3 object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://placehold.co/40x40/D1D5DB/1F2937?text=User";
                      }}
                    />
                    <div>
                      <p className="font-medium text-gray-800">
                        {lesson.mentorName}
                      </p>
                      <p className="text-sm text-gray-500">
                        {lesson.mentorDate}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${lesson.typeBgColor} ${lesson.typeIconColor}`}
                  >
                    {/* Render the icon component dynamically */}
                    {React.createElement(lesson.typeIcon, {
                      className: "h-4 w-4 mr-1",
                    })}
                    {lesson.typeName}
                  </div>
                </td>
                <td className="py-3 px-4 text-gray-700">
                  {lesson.description}
                </td>
                <td className="py-3 px-4 text-center">
                  <button className="p-2 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition">
                    <ArrowUpRightIcon className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LessonTable;
