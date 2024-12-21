'use client'
import { Separator } from '@/components/ui/separator'
import { useQueryAutomation } from '@/hooks/user-queries'
import { FaInstagram } from "react-icons/fa6";
import Image from 'next/image'
import React from 'react'
import { IoWarning } from "react-icons/io5";

type Props = {
  id: string
}

const PostNode = ({ id }: Props) => {
  const { data } = useQueryAutomation(id)

  return (
    data?.data &&
    data.data.posts.length > 0 && (
      <div className="w-10/12 lg:w-8/12 relative xl:w-4/12 p-6 rounded-2xl flex flex-col bg-gradient-to-br from-[#2D2D2D] to-[#1D1D1D] gap-y-4 shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className="absolute h-20 left-1/2 bottom-full flex flex-col items-center z-50">
          <span className="h-[12px] w-[12px] bg-connector/20 rounded-full shadow-glow" />
          <Separator
            orientation="vertical"
            className="bottom-full flex-1 border-[1.5px] border-connector/20"
          />
          <span className="h-[12px] w-[12px] bg-connector/20 rounded-full shadow-glow" />
        </div>
        <div className="flex items-center gap-x-3 text-lg font-medium text-gray-200">
          <IoWarning className="text-amber-500 text-xl animate-pulse" />
          If they comment on...
        </div>
        <div className="bg-[#2A2A2A] p-4 rounded-xl flex flex-col gap-y-3 backdrop-blur-sm border border-gray-700/30">
          <div className="flex gap-x-3 items-center">
            <FaInstagram className="text-2xl text-gradient-to-r from-purple-500 to-pink-500" />
            <p className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              These posts
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-4">
            {data.data.posts.map((post) => (
              <div
                key={post.id}
                className="relative aspect-square rounded-xl cursor-pointer overflow-hidden group transform hover:scale-105 transition-transform duration-300"
              >
                <Image
                  fill
                  sizes="100vw"
                  src={post.media}
                  alt="post image"
                  className="object-cover group-hover:brightness-110 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  )
}

export default PostNode
