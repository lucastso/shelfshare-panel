'use client'

import Image from 'next/image'
import { ChangeEvent, useState } from 'react'

const ProfileChangeInfo = async ({
  image,
  name,
  email,
  plan,
}: {
  image: string
  name: string
  email: string
  plan: string
}) => {
  const [formData, setFormData] = useState({
    image: image,
    name: name,
    email: email,
    password: '',
  })

  const [formValid, setFormValid] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
    })

    const isFormValid = Object.values({
      ...formData,
      [name]: value,
    }).every((field) => {
      if (typeof field === 'string') {
        return field.trim() !== ''
      }
      return false
    })

    setFormValid(isFormValid)
  }

  return (
    <div className="space-y-8">
      <div className="flex gap-4 items-center">
        <Image
          src={image as string}
          alt=""
          width={512}
          height={256}
          className="w-14 rounded-full"
        />
        <span className="h-fit px-3 py-2 rounded-md text-zinc-600 bg-zinc-950 border border-zinc-800 w-fit flex items-center gap-2 cursor-pointer text-sm">
          Edit
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm">Your Plan</span>
        {plan == 'free' ? (
          <span className="px-4 py-2 rounded-md w-fit flex items-center gap-2 cursor-pointer bg-green-950 text-green-400">
            Free
          </span>
        ) : (
          <span className="px-4 py-2 rounded-md w-fit flex items-center gap-1 cursor-pointer bg-indigo-950 text-indigo-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-star"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" />
            </svg>
            <span>Paid</span>
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className="rounded-md border border-zinc-900 bg-black px-2 py-2 focus:border-zinc-800 focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm">
          E-mail:
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your best e-mail"
          className="rounded-md border border-zinc-900 bg-black px-2 py-2 focus:border-zinc-800 focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm">
          Password:
        </label>
        <input
          type="text"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Your password"
          className="rounded-md border border-zinc-900 bg-black px-2 py-2 focus:border-zinc-800 focus:outline-none"
        />
      </div>

      <button className="bg-zinc-900 text-zinc-400 text-sm px-4 py-3 rounded-md flex items-center cursor-pointer gap-2 relative">
        Send
      </button>
    </div>
  )
}

export default ProfileChangeInfo
