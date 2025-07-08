import React from "react";
import { Sparkle } from "lucide-react";
import {
  HomeIcon, // Equivalent to Home
  InboxIcon, // Equivalent to Inbox
  BookOpenIcon, // Equivalent to BookOpen
  CheckCircleIcon, // Good replacement for Checklist (ChecklistIcon doesn't exist)
  UsersIcon,
  Cog6ToothIcon,
  ArrowRightEndOnRectangleIcon, // Equivalent to Users
} from "@heroicons/react/24/outline"; // For 24x24 outline icons

const Sidebar = () => {
  const navItems = [
    {
      name: "Dashboard",
      icon: <HomeIcon className="h-5 w-5 text-[#6E62E5]" />,
      active: true,
    },
    { name: "Inbox", icon: <InboxIcon className="h-5 w-5 text-gray" /> },
    { name: "Lesson", icon: <BookOpenIcon className="h-5 w-5 text-gray" /> },
    { name: "Task", icon: <CheckCircleIcon className="h-5 w-5 text-gray" /> },
    { name: "Group", icon: <UsersIcon className="h-5 w-5 text-gray" /> },
  ];

  const friendItems = [
    {
      name: "Bagas Multiple",
      status: "Friend",
      avatar:
        "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
    },
    {
      name: "Sir Dandy",
      status: "Online",
      avatar:
        "https://cdn.pixabay.com/photo/2016/06/20/04/30/asian-man-1468032_1280.jpg",
    },
    {
      name: "Jhon Tosan",
      status: "Offline",
      avatar:
        "https://cdn.pixabay.com/photo/2024/11/08/05/28/man-9182458_1280.jpg",
    },
  ];
  return (
    <section>
      <div className="bg-white h-[100vh] flex flex-col justify-between items-center">
        <div className="coursue-logo flex items-center justify-center mb-[50px] mt-[30px]">
          <span className="rounded-full border-[#6E62E5] border-4 mr-2">
            <Sparkle className="w-5 h-5 text-[#6E62E5]" />
          </span>
          <h2>Coursue</h2>
        </div>

        <nav className="mb-8">
          <h2 className="text-xs text-gray-400 uppercase font-semibold mb-3">
            Overview
          </h2>
          <ul>
            {navItems.map((item) => (
              <li key={item.name} className="mb-2">
                <a
                  href="#"
                  className={`flex items-center p-3 text-[.9rem] rounded-lg ${
                    item.active
                      ? "bg-primary text-gray shadow-md"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.icon}
                  <span className="ml-3 font-medium">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Friends Section */}
        <div className="mb-8 text-[.7rem]">
          <h2 className="text-xs text-gray-400 uppercase font-semibold mb-3">
            Friends
          </h2>
          <ul>
            {friendItems.map((friend) => (
              <li key={friend.name} className="mb-3">
                <a href="#" className="flex items-center">
                  <img
                    src={friend.avatar}
                    alt={friend.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{friend.name}</p>
                    <p className="text-sm text-gray-500">{friend.status}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-[200px]">
          <h2 className="text-xs text-gray-400 uppercase font-semibold mb-3">
            Settings
          </h2>
          <ul>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                <Cog6ToothIcon className="h-5 w-5" />
                <span className="ml-3 font-medium">Setting</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-3 rounded-lg text-red-500 hover:bg-red-50 hover:text-red-600"
              >
                <ArrowRightEndOnRectangleIcon className="h-5 w-5" />
                <span className="ml-3 font-medium">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
