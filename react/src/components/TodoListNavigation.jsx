const todoLists = [
  {
    title: "Home",
    stroke: "#3B82F6",
    todos: 12,
  },
  {
    title: "Today",
    stroke: "#EBB731",
    todos: 7,
  },
  {
    title: "Personal",
    stroke: "#AA6FF8",
    todos: 8,
  },
  {
    title: "Work",
    stroke: "#5EC65F",
    todos: 5,
  },
  {
    title: "Errands",
    stroke: "#ED5899",
    todos: 2,
  },
  {
    title: "Road Trip",
    stroke: "#F57328",
    todos: 3,
  },
];

export default function TodoListNavigation() {
  return (
    <div className="h-screen bg-[#F5F5F5] p-8">
      <div className="rounded-2xl p-8 max-w-[384px]  bg-white">
        {todoLists.map((todoList) => (
          <div className="p-4 flex justify-between" key={todoList.title}>
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke={todoList.stroke}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-squircle-icon lucide-squircle"
              >
                <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9" />
              </svg>
              <span className="font-semibold">{todoList.title}</span>
            </div>
            <div className="px-1.5 py-0.5 rounded-md bg-[#F5F5F5] flex justify-center items-center">
              <span className="text-[#6B7280] text-[12px] font-medium">
                {todoList.todos}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
