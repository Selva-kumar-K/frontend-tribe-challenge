import { Search, Sun, Moon } from "lucide-react";

import TaskCard from "./TaskCard";

export default function TaskList() {
  return (
    <div className="px-4 py-10 font-poppins max-w-[672px] mx-auto">
      {/* Search Bar */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Search />
          <input
            type="text"
            placeholder="Search todos..."
            className="outline-none"
          />
        </div>
        <div className="rounded-full p-1 bg-zinc-100 flex gap-1">
          <div className="bg-white rounded-full flex justify-center items-center w-8 h-8">
            <Sun size={20} />
          </div>
          <div className="rounded-full flex justify-center items-center w-8 h-8">
            <Moon size={20} />
          </div>
        </div>
      </div>

      {/* Add Task */}
      <h1 className="text-4xl font-bold mt-12">
        You’ve got <span className="text-pink-500">5 important tasks</span> left
      </h1>
      <div className="mt-4 flex gap-3">
        <input type="checkbox" />
        <div className="px-4 border-2 border-[#D4D4D8] py-2">
          <input
            type="text"
            placeholder="Add a new task..."
            className="outline-none w-[320px]"
          />
        </div>
      </div>

      {/* Important Tasks */}
      <TaskCard important={true} title="Important" completed={false} />

      {/* Not Important */}
      <TaskCard important={false} title="Everything Else" completed={false} />

      {/* Completed */}

      <TaskCard title="Completed" completed={true} />

      {/* <div className="mt-10">
        <h1 className="text-lg text-zinc-900">Everything Else</h1>
      </div> */}
    </div>
  );
}
