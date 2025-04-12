import { Search, Sun, Moon } from "lucide-react";

import TaskCard, { todosData } from "./TaskCard";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function TaskList() {
  const [darkMode, setDarkMode] = useState(false);
  const importantTodos = todosData.filter(
    (todo) => todo.important && !todo.completed
  );
  const notImportantTodos = todosData.filter(
    (todo) => !todo.important && !todo.completed
  );
  const completedTodos = todosData.filter((todo) => todo.completed);

  return (
    <div
      className={twMerge(
        "px-4 py-10 font-poppins dark:bg-zinc-800 dark:text-zinc-100",
        darkMode && "dark"
      )}
    >
      <div className="max-w-[672px] mx-auto">
        {/* Search Bar */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search todos..."
              className="outline-none"
            />
          </div>
          <div className="rounded-full p-1 bg-zinc-100 flex gap-1 dark:bg-zinc-900">
            <div
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full flex justify-center items-center w-8 h-8 cursor-pointer bg-white dark:text-zinc-500 dark:bg-transparent"
            >
              <Sun size={20} />
            </div>
            <div
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full flex justify-center items-center w-8 h-8 cursor-pointer dark:bg-zinc-700"
            >
              <Moon size={20} />
            </div>
          </div>
        </div>

        {/* Add Task */}
        <h1
          className={`text-4xl font-bold mt-12 ${darkMode && "text-zinc-100"}`}
        >
          You’ve got <span className="text-pink-500">5 important tasks</span>{" "}
          left
        </h1>
        <div className="mt-4 flex gap-3">
          <input type="checkbox" />
          <div className="px-4 border-2 border-[#D4D4D8] py-2 dark:border-zinc-600">
            <input
              type="text"
              placeholder="Add a new task..."
              className="outline-none w-[320px]"
            />
          </div>
        </div>

        {/* Important Tasks */}
        <TaskCard todosData={importantTodos} title="Important" />

        {/* Not Important */}
        <TaskCard todosData={notImportantTodos} title="Everything Else" />

        {/* Completed */}
        <TaskCard todosData={completedTodos} title="Completed" />
      </div>
    </div>
  );
}
