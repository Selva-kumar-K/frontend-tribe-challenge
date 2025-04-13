import { Search, Sun, Moon } from "lucide-react";

import TaskCard from "./TaskCard";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export const todosData = [
  {
    id: 1,
    text: "Do something nice for someone you care about",
    completed: false,
    important: true,
  },
  {
    id: 2,
    text: "Memorize a poem",
    completed: true,
    important: false,
  },
  {
    id: 3,
    text: "Watch a classic movie",
    completed: true,
    important: false,
  },
  {
    id: 4,
    text: "Watch a documentary",
    completed: false,
    important: true,
  },
  {
    id: 5,
    text: "Invest in cryptocurrency",
    completed: false,
    important: true,
  },
  {
    id: 6,
    text: "Contribute code or a monetary donation to an open-source software project",
    completed: false,
    important: true,
  },
  {
    id: 7,
    text: "Solve a Rubik's cube",
    completed: true,
    important: false,
  },
  {
    id: 8,
    text: "Bake pastries for yourself and neighbor",
    completed: true,
    important: false,
  },
  {
    id: 9,
    text: "Go see a Broadway production",
    completed: false,
    important: true,
  },
  {
    id: 10,
    text: "Write a thank you letter to an influential person in your life",
    completed: true,
    important: true,
  },
  {
    id: 11,
    text: "Invite some friends over for a game night",
    completed: false,
    important: false,
  },
  {
    id: 12,
    text: "Have a football scrimmage with some friends",
    completed: false,
    important: false,
  },
  {
    id: 13,
    text: "Text a friend you haven't talked to in a long time",
    completed: true,
    important: true,
  },
  {
    id: 14,
    text: "Organize pantry",
    completed: false,
    important: false,
  },
  {
    id: 15,
    text: "Buy a new house decoration",
    completed: true,
    important: false,
  },
  {
    id: 16,
    text: "Plan a vacation you've always wanted to take",
    completed: true,
    important: true,
  },
  {
    id: 17,
    text: "Clean out car",
    completed: false,
    important: false,
  },
  {
    id: 18,
    text: "Draw and color a Mandala",
    completed: true,
    important: false,
  },
  {
    id: 19,
    text: "Create a cookbook with favorite recipes",
    completed: true,
    important: true,
  },
  {
    id: 20,
    text: "Bake a pie with some friends",
    completed: false,
    important: false,
  },
  {
    id: 21,
    text: "Create a compost pile",
    completed: false,
    important: false,
  },
  {
    id: 22,
    text: "Take a hike at a local park",
    completed: true,
    important: true,
  },
  {
    id: 23,
    text: "Take a class at local community center that interests you",
    completed: true,
    important: true,
  },
  {
    id: 24,
    text: "Research a topic interested in",
    completed: true,
    important: true,
  },
  {
    id: 25,
    text: "Plan a trip to another country",
    completed: false,
    important: true,
  },
  {
    id: 26,
    text: "Improve touch typing",
    completed: false,
    important: false,
  },
  {
    id: 27,
    text: "Learn React",
    completed: false,
    important: true,
  },
  {
    id: 28,
    text: "Learn calligraphy",
    completed: false,
    important: false,
  },
  {
    id: 29,
    text: "Have a photo session with some friends",
    completed: true,
    important: false,
  },
  {
    id: 30,
    text: "Go to the gym",
    completed: true,
    important: true,
  },
];
export default function TaskList() {
  const [darkMode, setDarkMode] = useState(false);
  const [todos, setTodos] = useState(todosData);
  const [newTask, setNewTask] = useState("");

  const importantTodos = todos.filter(
    (todo) => todo.important && !todo.completed
  );
  const notImportantTodos = todos.filter(
    (todo) => !todo.important && !todo.completed
  );
  const completedTodos = todos.filter((todo) => todo.completed);

  const addNewTask = () => {
    if (newTask) {
      const newTodo = {
        id: todos.length + 1,
        text: newTask,
        completed: false,
        important: false,
      };

      setTodos((prev) => [...prev, newTodo]);
      setNewTask("");
    }
  };

  const handleSearch = (value) => {
    if (value) {
      const filteredTodos = todos.filter((todo) => todo.text.includes(value));
      setTodos(filteredTodos);
    } else {
      setTodos(todosData);
    }
  };

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
              onChange={(e) => handleSearch(e.target.value)}
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
              value={newTask}
              onKeyDown={(e) => e.key === "Enter" && addNewTask()}
              type="text"
              placeholder="Add a new task..."
              className="outline-none w-[320px]"
              onChange={(e) => setNewTask(e.target.value)}
            />
          </div>
        </div>

        {/* Important Tasks */}
        <TaskCard
          todosData={importantTodos}
          setTodos={setTodos}
          title="Important"
        />

        {/* Not Important */}
        <TaskCard
          todosData={notImportantTodos}
          title="Everything Else"
          setTodos={setTodos}
        />

        {/* Completed */}
        <TaskCard todosData={completedTodos} title="Completed" />
      </div>
    </div>
  );
}
