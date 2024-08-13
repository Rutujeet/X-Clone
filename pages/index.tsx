import Image from "next/image"
import { BsTwitterX } from "react-icons/bs"
import { GoHome, GoSearch, GoBell, GoMail, GoChecklist, GoBookmark, GoPeople } from "react-icons/go"
import { FiUser } from "react-icons/fi"
import { CgMoreO } from "react-icons/cg"
import { GoFileMedia } from "react-icons/go";

import FeedCard from "@/components/FeedCard"

import { CredentialResponse, GoogleLogin } from "@react-oauth/google"
import { useCallback } from "react"

import { toast } from "react-hot-toast"
import { graphqlClient } from "@/clients/api"
import { verifyUserGoogleTokenQuery } from "@/graphql/query/user"
import { useCurrentUser } from "@/hooks/user"


// Define the structure of the sidebar button
interface XSidebarButton {
  title: string
  icon: React.ReactNode
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
]

export default function Home() {

  const { user } = useCurrentUser()


  const handleSelectMedia = useCallback(() => {
    const input = document.createElement('input')
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*")
    input.click();
  }, [])

  const handleLoginWithGoogle = useCallback(async (cred: CredentialResponse) => {
    const googleToken = cred.credential
    if (!googleToken) return toast.error(`Google token not found`)
    const { verifyGoogleToken } = await graphqlClient.request(verifyUserGoogleTokenQuery, { token: googleToken })


    toast.success(`verified success`)
    console.log(verifyGoogleToken)

    if (verifyGoogleToken) window.localStorage.setItem('__twitter_token', verifyGoogleToken)

  }, [])
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        {/* Sidebar Section */}
        <div className="col-span-4 pt-8 px-4 ml-28 relative">
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
          {user && (<div className="absolute bottom-16 flex gap-2 bg-slate-800 px-3 py-2 rounded-full">
            {user && user.profileImageUrl && (<Image className="rounded-full" src={user?.profileImageUrl} alt="profile-img" height={50} width={50} />)}
            <h3 className="text-xl">{user.firstName} {user.lastName}</h3>
          </div>)}
        </div>

        {/* Main Content Area */}
        <div className="col-span-5 border-r-[1px] border-l-[1px] border-slate-700 overflow-scroll">
          <div className="border-b-[1px] border-slate-700 p-4">
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-1">


                {user?.profileImageUrl && (<Image src={user?.profileImageUrl} alt="user-image" height={50} width={50} className="rounded-full" />)}
              </div>
              <div className="col-span-11">
                <textarea className="w-full bg-transparent text-2xl px-1 border-b border-slate-700" rows={4} name="" id="" placeholder="what's happening?"></textarea>
                <div className="mt-1 flex justify-between items-center">
                  <GoFileMedia onClick={handleSelectMedia} className="text-xl cursor-pointer" />
                  <button className="bg-sky-500 text-sm px-4 py-2 rounded-full font-bold">Post</button>

                </div>
              </div>

            </div>
          </div>
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
        <div className="col-span-3 p-5">
          {!user && (<div className="border p-5 bg-slate-700 rounded-lg">
            <h1 className="my-2 text-xl">New to X?</h1>
            <GoogleLogin onSuccess={handleLoginWithGoogle} />
          </div>)}
        </div>
      </div>
    </div>
  )
}
