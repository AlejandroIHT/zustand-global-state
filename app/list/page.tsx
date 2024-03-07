"use client";

import Task from "@/components/Task";
import NewTask from "@/components/NewTask";
import useTaskStore from "@/hooks/useTaskStore";

const List = () => {
  const { title, description, shortDescription, progress, tasks } =
    useTaskStore((state) => state);

  const shouldShowNewTask =
    title || description || shortDescription || !!progress;

  return (
    <main>
      <h1 className="flex justify-between items-center pl-8 pr-8 font-bold text-2xl w-full h-16 sticky top-0 left-0 right-0 z-10 backdrop-blur-[6px] border-b-[1px] border-white">
        📌 todo/list
        <NewTask />
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] grid-rows-14-r gap-8 p-8">
        {shouldShowNewTask && (
          <Task
            className="bg-purple-100"
            title={title}
            description={description}
            shortDescription={shortDescription}
            progress={progress as number}
          />
        )}
        {tasks.length > 0 &&
          tasks.map(({ title, shortDescription, description, progress }) => (
            <Task
              title={title}
              shortDescription={shortDescription}
              description={description}
              progress={progress as number}
            />
          ))}
      </div>
    </main>
  );
};

export default List;
