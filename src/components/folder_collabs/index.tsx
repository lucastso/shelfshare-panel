'use client'

import { api } from '@/lib/axios'
import { UserProps } from '@/types/user_props'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const FolderCollabs = ({
  folderId,
  userId,
}: {
  folderId: number
  userId: string
}) => {
  const [data, setData] = useState<UserProps[]>()

  useEffect(() => {
    api.get(`/folders/collabs/${folderId}`).then((response) => {
      setData(response.data.filter((user: UserProps) => user.id !== userId))
    })
  }, [])

  return (
    <div className="flex items-center -space-x-2">
      {data?.slice(0, 3).map((user) => {
        return (
          <Image
            src={user.photo}
            alt=""
            width={512}
            height={256}
            className="w-8 h-8 rounded-full object-cover border border-zinc-800"
            key={user.id}
          />
        )
      })}
      {data !== undefined && data?.length > 3 && (
        <div className="rounded-full w-8 h-8 bg-zinc-800 border border-zinc-700 text-zinc-400 flex items-center justify-center text-xs">
          +{data?.slice(3, data.length).length}
        </div>
      )}
    </div>
  )
}

export default FolderCollabs
