import React from "react";
import Image from 'next/image';
import { GoComment, GoHeart, GoUpload } from "react-icons/go";
import { LiaRetweetSolid } from "react-icons/lia";

const FeedCard: React.FC =  () => {
    return (
    <div className="border-b-[1px] border-slate-700 p-4 cursor-pointer">
<div className="grid grid-cols-12 gap-3">
    <div className="col-span-1">
        <Image src="https://i.redd.it/iysrp1i7afl31.png" alt="user-image" height={50} width={50} className="rounded-full"/>
    </div>
    <div className="col-span-11">
        <h5>plugpollution</h5>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem aliquam odio eum sint porro nisi similique, laboriosam laborum itaque tenetur earum eligendi vitae quisquam omnis accusamus. Neque ratione nostrum corporis?</p>
        <div className="flex justify-between text-xl items-center p-2 pr-10 w-[90%]">
            <div>
            <GoComment />
            </div>
            <div>
            <LiaRetweetSolid className="text-2xl"/>
            </div>
            <div>
            <GoHeart />
            </div>
            <div>
            <GoUpload />
            </div>
        </div>
    </div>
</div>
    </div>
    )
}

export default FeedCard;