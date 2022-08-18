import useTodo from "hooks/useTodo";
import React from "react";

const tabs: { title: string; index: 0 | 1 }[] = [
  {
    title: "To do",
    index: 0,
  },
  {
    title: "Done",
    index: 1,
  },
];

function TodoTabs() {
  const { tab, setTab } = useTodo();

  return (
    <nav className="flex">
      {tabs.map((T) => (
        <button
          type="button"
          onClick={() => setTab(T.index)}
          key={T.index}
          className={`${
            T.index !== tab && "text-gray-400"
          } flex items-center justify-center flex-1 text-xl font-primary`}
        >
          {T.title}
        </button>
      ))}
    </nav>
  );
}

export default TodoTabs;
