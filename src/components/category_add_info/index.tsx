"use client";

import { api } from "@/lib/axios";
import { ChangeEvent, useState } from "react";

const CategoryAddInfo = ({ userId }: { userId: string }) => {
  const [error, setError] = useState<string>("");
  const [textColor, setTextColor] = useState<string>("");
  const [backgroundColor, setBackgroundColor] = useState<string>("");
  const [formData, setFormData] = useState({
    creatorId: userId,
    name: "",
    backgroundColor: "",
    textColor: "",
  });

  const colors = [
    "rgb(226 232 240)",
    "rgb(203 213 225)",
    "rgb(148 163 184)",
    "rgb(100 116 139)",
    "rgb(71 85 105)",
    "rgb(51 65 85)",
    "rgb(30 41 59)",
    "rgb(15 23 42)",
    "rgb(2 6 23)",
    "rgb(254 202 202)",
    "rgb(252 165 165)",
    "rgb(248 113 113)",
    "rgb(239 68 68)",
    "rgb(220 38 38)",
    "rgb(185 28 28)",
    "rgb(153 27 27)",
    "rgb(127 29 29)",
    "rgb(69 10 10)",
    "rgb(254 215 170)",
    "rgb(253 186 116)",
    "rgb(251 146 60)",
    "rgb(249 115 22)",
    "rgb(234 88 12)",
    "rgb(194 65 12)",
    "rgb(154 52 18)",
    "rgb(124 45 18)",
    "rgb(67 20 7)",
    "rgb(253 230 138)",
    "rgb(252 211 77)",
    "rgb(251 191 36)",
    "rgb(245 158 11)",
    "rgb(217 119 6)",
    "rgb(180 83 9)",
    "rgb(146 64 14)",
    "rgb(120 53 15)",
    "rgb(69 26 3)",
    "rgb(254 240 138)",
    "rgb(253 224 71)",
    "rgb(250 204 21)",
    "rgb(234 179 8)",
    "rgb(202 138 4)",
    "rgb(161 98 7)",
    "rgb(133 77 14)",
    "rgb(113 63 18)",
    "rgb(66 32 6)",
    "rgb(217 249 157)",
    "rgb(190 242 100)",
    "rgb(163 230 53)",
    "rgb(132 204 22)",
    "rgb(101 163 13)",
    "rgb(77 124 15)",
    "rgb(63 98 18)",
    "rgb(54 83 20)",
    "rgb(26 46 5)",
    "rgb(187 247 208)",
    "rgb(134 239 172)",
    "rgb(74 222 128)",
    "rgb(34 197 94)",
    "rgb(22 163 74)",
    "rgb(21 128 61)",
    "rgb(22 101 52)",
    "rgb(20 83 45)",
    "rgb(5 46 22)",
    "rgb(167 243 208)",
    "rgb(110 231 183)",
    "rgb(52 211 153)",
    "rgb(16 185 129)",
    "rgb(5 150 105)",
    "rgb(4 120 87)",
    "rgb(6 95 70)",
    "rgb(6 78 59)",
    "rgb(2 44 34)",
    "rgb(153 246 228)",
    "rgb(94 234 212)",
    "rgb(45 212 191)",
    "rgb(20 184 166)",
    "rgb(13 148 136)",
    "rgb(15 118 110)",
    "rgb(17 94 89)",
    "rgb(19 78 74)",
    "rgb(4 47 46)",
    "rgb(165 243 252)",
    "rgb(103 232 249)",
    "rgb(34 211 238)",
    "rgb(6 182 212)",
    "rgb(8 145 178)",
    "rgb(14 116 144)",
    "rgb(21 94 117)",
    "rgb(22 78 99)",
    "rgb(8 51 68)",
    "rgb(186 230 253)",
    "rgb(125 211 252)",
    "rgb(56 189 248)",
    "rgb(14 165 233)",
    "rgb(2 132 199)",
    "rgb(3 105 161)",
    "rgb(7 89 133)",
    "rgb(12 74 110)",
    "rgb(8 47 73)",
    "rgb(191 219 254)",
    "rgb(147 197 253)",
    "rgb(96 165 250)",
    "rgb(59 130 246)",
    "rgb(37 99 235)",
    "rgb(29 78 216)",
    "rgb(30 64 175)",
    "rgb(30 58 138)",
    "rgb(23 37 84)",
    "rgb(199 210 254)",
    "rgb(165 180 252)",
    "rgb(129 140 248)",
    "rgb(99 102 241)",
    "rgb(79 70 229)",
    "rgb(67 56 202)",
    "rgb(55 48 163)",
    "rgb(49 46 129)",
    "rgb(30 27 75)",
    "rgb(221 214 254)",
    "rgb(196 181 253)",
    "rgb(167 139 250)",
    "rgb(139 92 246)",
    "rgb(124 58 237)",
    "rgb(109 40 217)",
    "rgb(91 33 182)",
    "rgb(76 29 149)",
    "rgb(46 16 101)",
    "rgb(233 213 255)",
    "rgb(216 180 254)",
    "rgb(192 132 252)",
    "rgb(168 85 247)",
    "rgb(147 51 234)",
    "rgb(126 34 206)",
    "rgb(107 33 168)",
    "rgb(88 28 135)",
    "rgb(59 7 100)",
    "rgb(245 208 254)",
    "rgb(240 171 252)",
    "rgb(232 121 249)",
    "rgb(217 70 239)",
    "rgb(192 38 211)",
    "rgb(162 28 175)",
    "rgb(134 25 143)",
    "rgb(112 26 117)",
    "rgb(74 4 78)",
    "rgb(251 207 232)",
    "rgb(249 168 212)",
    "rgb(244 114 182)",
    "rgb(236 72 153)",
    "rgb(219 39 119)",
    "rgb(190 24 93)",
    "rgb(157 23 77)",
    "rgb(131 24 67)",
    "rgb(80 7 36)",
    "rgb(254 205 211)",
    "rgb(253 164 175)",
    "rgb(251 113 133)",
    "rgb(244 63 94)",
    "rgb(225 29 72)",
    "rgb(190 18 60)",
    "rgb(159 18 57)",
    "rgb(136 19 55)",
    "rgb(76 5 25)",
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (Object.values(formData).every((value) => value !== "")) {
      api.post("/categories", formData).then(() => {
        setError("");
      });
    } else {
      setError("All fields are required!");
    }
  };

  return (
    <div className="space-y-8 w-full">
      <strong className="text-red-500">{error}</strong>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name:</label>
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
        <label htmlFor="email">Background Color:</label>
        <div className="grid grid-cols-9">
          {colors.map((item) => {
            return (
              <div
                key={item}
                onClick={() => {
                  formData.backgroundColor = item;
                  setBackgroundColor(item);
                }}
                className={`w-full h-10 rounded-md cursor-pointer ${
                  backgroundColor === item ? "border" : ""
                }`}
                style={{
                  background: item,
                }}
              ></div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email">Text Color:</label>
        <div className="grid grid-cols-9">
          {colors.map((item) => {
            return (
              <div
                key={item}
                onClick={() => {
                  formData.textColor = item;
                  setTextColor(item);
                }}
                className={`w-full h-10 rounded-md cursor-pointer font-light text-center flex items-center justify-center ${
                  textColor === item ? "border" : ""
                }`}
                style={{
                  color: item,
                }}
              >
                Text
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={() => handleSubmit()}
        className="bg-zinc-900 text-zinc-400 text-sm px-4 py-3 rounded-md flex items-center cursor-pointer gap-2 relative"
      >
        Send
      </button>
    </div>
  );
};

export default CategoryAddInfo;
