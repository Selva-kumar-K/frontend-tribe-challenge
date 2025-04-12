import { twMerge } from "tailwind-merge";
import { Star, Trash2 } from "lucide-react";
import { useState } from "react";

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

export default function TaskCard({ todosData, title }) {
  const [todos, setTodos] = useState(todosData);
  return (
    <div className="mt-10">
      <h1 className="text-lg text-zinc-900">{title}</h1>
      <div className="mt-4">
        {/* Task */}
        {todos.map((todo) => {
          return (
            <div key={todo.id} className="py-4 border-b border-zinc-300">
              <div className="flex justify-between items-center">
                <label
                  className="flex gap-3"
                  onClick={() =>
                    setTodos((prev) => {
                      return prev.map((t) =>
                        t.id === todo.id ? { ...t, completed: !t.completed } : t
                      );
                    })
                  }
                >
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() =>
                      setTodos((prev) =>
                        prev.map((t) =>
                          t.id === todo.id
                            ? { ...t, completed: !t.completed }
                            : t
                        )
                      )
                    }
                  />
                  <span
                    className={twMerge(
                      "text-sm",
                      todo.completed && "line-through"
                    )}
                  >
                    {todo.text}
                  </span>
                </label>
                <div className="flex gap-3">
                  <Star
                    size={20}
                    className={twMerge(
                      "stroke-zinc-400",
                      todo.important && "stroke-pink-500 fill-pink-500",
                      todo.completed && "opacity-70 "
                    )}
                  />
                  <Trash2 size={20} className={"stroke-zinc-400"} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
