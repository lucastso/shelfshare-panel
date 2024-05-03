'use client'

import { api } from '@/lib/axios'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import { HexColorPicker } from 'react-colorful'

const CategoryAddInfo = ({ userId }: { userId: string }) => {
  const router = useRouter()
  const [error, setError] = useState<string>('')
  const [textColor, setTextColor] = useState<string>('')
  const [backgroundColor, setBackgroundColor] = useState<string>('')
  const [formData, setFormData] = useState({
    creatorId: userId,
    name: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = () => {
    const data = {
      creatorId: userId,
      name: formData.name,
      backgroundColor: backgroundColor,
      textColor: textColor,
    }

    if (Object.values(data).every((value) => value !== '')) {
      api.post('/categories', data).then(() => {
        setError('')
        router.push('/categories/add')
      })
    } else {
      setError('All fields are required!')
    }
  }

  return (
    <div className="space-y-8 w-full">
      <strong className="text-red-500">{error}</strong>
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
          placeholder="Category name"
          className="rounded-md border border-zinc-900 bg-black px-2 py-2 focus:border-zinc-800 focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm">
          Background Color:
        </label>
        <HexColorPicker color={backgroundColor} onChange={setBackgroundColor} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm">
          Text Color:
        </label>
        <HexColorPicker color={textColor} onChange={setTextColor} />
      </div>

      <button
        onClick={() => handleSubmit()}
        className="bg-zinc-900 text-zinc-400 text-sm px-4 py-3 rounded-md flex items-center cursor-pointer gap-2 relative"
      >
        Send
      </button>
    </div>
  )
}

export default CategoryAddInfo
