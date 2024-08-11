import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { GoHome, GoSearch, GoBell, GoMail, GoChecklist, GoBookmark, GoPeople } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { CgMoreO } from "react-icons/cg";

import FeedCard from "@/components/FeedCard";


// Define the structure of the sidebar button
interface XSidebarButton {
  title: string;
  icon: React.ReactNode;
}

// Sidebar menu items array
const sidebarMenuItems: XSidebarButton[] = [
  { title: "Home", icon: <GoHome /> },
  { title: "Explore", icon: <GoSearch /> },
  { title: "Notifications", icon: <GoBell /> },
  { title: "Messages", icon: <GoMail /> },
  { title: "Lists", icon: <GoChecklist /> },
  { title: "Bookmarks", icon: <GoBookmark /> },
  { title: "Communities", icon: <GoPeople /> },
  { title: "Profile", icon: <FiUser /> },
  { title: "More", icon: <CgMoreO /> },
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        {/* Sidebar Section */}
        <div className="col-span-3 pt-8 px-4 ml-28">
          {/* Twitter icon */}
          <div className="text-3xl h-fit w-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all">
            <BsTwitterX />
          </div>

          {/* Sidebar Menu */}
          <div className="mt-2 text-2xl font-normal pr-4">
            <ul>
              {sidebarMenuItems.map((item, index) => (
                <li key={index} className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer mt-4">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xl">{item.title}</span>
                </li>
              ))}
            </ul>
            
            {/* Post Button */}
            <div className="mt-5 pr-7 font-semibold">
              <button className="bg-sky-500 text-xl p-4 rounded-full w-full mt-5">Post</button>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="col-span-5 border-r-[1px] border-l-[1px] border-slate-700 overflow-scroll">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>

        {/* Placeholder for Additional Content */}
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
