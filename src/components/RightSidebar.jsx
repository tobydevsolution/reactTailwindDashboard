import React from "react";
import {
  EnvelopeIcon, // For Mail icon
  BellIcon, // For Notification icon
  EllipsisVerticalIcon, // For three-dot menu
  PlusCircleIcon, // For add mentor icon
  UserPlusIcon, // For follow button icon
} from "@heroicons/react/24/outline"; // Using outline style for consistency

const RightSidebar = () => {
  // Sample data for the bar chart
  const chartData = [
    { label: "1-10 Aug", value: 45 },
    { label: "11-20 Aug", value: 60 },
    { label: "21-30 Aug", value: 30 },
  ];

  // Sample data for mentors
  const mentorData = [
    {
      id: 1,
      name: "Padhang Satrio",
      role: "Mentor",
      avatar: "https://placehold.co/40x40/FFD1DC/881337?text=PS",
    },
    {
      id: 2,
      name: "Zakir Horizontal",
      role: "Mentor",
      avatar: "https://placehold.co/40x40/D1D5DB/1F2937?text=ZH",
    },
    {
      id: 3,
      name: "Leonardo Samsul",
      role: "Mentor",
      avatar: "https://placehold.co/40x40/CCE0FF/0B3E6E?text=LS",
    },
  ];

  return (
    <div className="p-6 bg-white rounded-xl shadow-md min-h-screen">
      {/* Top Header: Mail, Notification, Profile */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex space-x-4">
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <EnvelopeIcon className="h-6 w-6 text-gray-500" />
          </button>
          <button className="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <BellIcon className="h-6 w-6 text-gray-500" />
            <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src="https://placehold.co/40x40/A78BFA/FFFFFF?text=JR" // Placeholder for Jason Ranti
            alt="Jason Ranti"
            className="h-10 w-10 rounded-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/40x40/D1D5DB/1F2937?text=User";
            }}
          />
          <span className="font-semibold text-gray-800">Jason Ranti</span>
        </div>
      </div>

      {/* Statistic Section */}
      <div className="bg-gray-50 rounded-xl p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Statistic</h3>
          <button className="p-1 rounded-full hover:bg-gray-200">
            <EllipsisVerticalIcon className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* User Profile with Progress Circle */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative h-28 w-28 mb-4">
            {/* Outer circle (background for progress) */}
            <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
            {/* Inner circle (actual progress, simplified) */}
            {/* This is a visual approximation. A real progress circle would use SVG/Canvas. */}
            <div
              className="absolute inset-0 rounded-full border-4 border-indigo-500"
              style={{
                clipPath: "polygon(50% 0%, 50% 50%, 100% 50%, 100% 0%)",
              }} // Simplified 32% visual
            ></div>
            <img
              src="https://placehold.co/100x100/A78BFA/FFFFFF?text=JR" // Placeholder for Jason Ranti
              alt="Jason Ranti"
              className="absolute inset-2 rounded-full object-cover border-2 border-white"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/100x100/D1D5DB/1F2937?text=User";
              }}
            />
            <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-indigo-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              32%
            </span>
          </div>
          <h2 className="text-xl font-bold text-gray-800">
            Good Morning Jason 🔥
          </h2>
          <p className="text-sm text-gray-500">
            Continue your learning to achieve your target!
          </p>
        </div>

        {/* Bar Chart (Simplified Visual) */}
        <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
          <div className="flex items-end justify-around h-40">
            {chartData.map((data, index) => (
              <div key={index} className="flex flex-col items-center mx-1">
                {/* Bar */}
                <div
                  className={`w-8 rounded-t-lg bg-indigo-500 relative`}
                  style={{ height: `${data.value * 1.5}px` }} // Scale height for visual representation
                >
                  {index === 1 && ( // Add red dot for the second bar (11-20 Aug)
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 block h-3 w-3 rounded-full bg-red-500"></span>
                  )}
                </div>
                {/* Value (optional, uncomment if needed) */}
                {/* <span className="text-xs text-gray-600 mt-1">{data.value}</span> */}
                {/* Label */}
                <span className="text-xs text-gray-500 mt-2">{data.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Your Mentor Section */}
      <div className="bg-gray-50 rounded-xl p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Your mentor</h3>
          <button className="p-1 rounded-full bg-indigo-100 hover:bg-indigo-200 transition">
            <PlusCircleIcon className="h-5 w-5 text-indigo-600" />
          </button>
        </div>

        {/* Mentor List */}
        <div className="space-y-4">
          {mentorData.map((mentor) => (
            <div key={mentor.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={mentor.avatar}
                  alt={mentor.name}
                  className="h-10 w-10 rounded-full mr-3 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/40x40/D1D5DB/1F2937?text=User";
                  }}
                />
                <div>
                  <p className="font-medium text-gray-800">{mentor.name}</p>
                  <p className="text-sm text-gray-500">{mentor.role}</p>
                </div>
              </div>
              <button className="flex items-center px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold hover:bg-indigo-200 transition">
                <UserPlusIcon className="h-4 w-4 mr-1" /> Follow
              </button>
            </div>
          ))}
        </div>
        <button className="mt-6 w-full py-2 bg-indigo-50 text-indigo-600 rounded-full font-semibold hover:bg-indigo-100 transition">
          See All
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
