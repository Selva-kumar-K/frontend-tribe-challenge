import { twMerge } from "tailwind-merge";
import { Star, Trash2 } from "lucide-react";

export default function TaskCard({ todosData, title, setTodos }) {
  return (
    <div className="mt-10">
      <h1 className="text-lg text-zinc-900 dark:text-zinc-100">{title}</h1>
      <div className="mt-4">
        {/* Task */}
        {todosData.length === 0 && <p className="text-zinc-500">No tasks</p>}
        {todosData.map((todo) => {
          return (
            <div
              key={todo.id}
              className={twMerge(
                "py-4 border-b border-zinc-300 dark:border-zinc-700",
                todo.completed && "opacity-50"
              )}
            >
              <div className="flex justify-between items-center">
                <label className="flex gap-3">
                  <input
                    type="checkbox"
                    className=""
                    checked={todo.completed}
                    onChange={() => {
                      setTodos?.((prev) => {
                        return prev.map((todos) =>
                          todos.id === todo.id
                            ? { ...todos, completed: !todos.completed }
                            : todos
                        );
                      });
                    }}
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
                    onClick={() =>
                      setTodos?.((prev) => {
                        return prev.map((todos) =>
                          todos.id === todo.id
                            ? { ...todos, important: !todos.important }
                            : todos
                        );
                      })
                    }
                    size={20}
                    className={twMerge(
                      "stroke-zinc-400 cursor-pointer",
                      todo.important && "stroke-pink-500 fill-pink-500"
                    )}
                  />
                  <Trash2
                    size={20}
                    className="stroke-zinc-400 cursor-pointer hover:stroke-zinc-500"
                    onClick={() =>
                      setTodos?.((prev) => {
                        return prev.filter((todos) => todos.id !== todo.id);
                      })
                    }
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
