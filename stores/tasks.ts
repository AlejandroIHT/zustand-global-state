import { StateCreator } from "zustand"


interface TaskType {
  title: string,
  description: string,
  shortDescription: string,
  progress: number,
}

export interface TasksState {
  tasks: TaskType[] | [],
  addTask: (task: TaskType) => void,
  removeTask: (task: TaskType) => void,
}

export const createTasksSlice: StateCreator<TasksState, [], [], TasksState> = (set) => ({
  tasks: [{ title: "Task 1", description: "Description 1", shortDescription: "Short Description 1", progress: 33 }, { title: "Task 2", description: "Description 2", shortDescription: "Short Description 2", progress: 67 }, { title: "Task 3", description: "Description 3", shortDescription: "Short Description 3", progress: 11 }, { title: "Task 4", description: "Description 4", shortDescription: "Short Description 4", progress: 99 }, { title: "Task 5", description: "Description 5", shortDescription: "Short Description 5", progress: 50 }, { title: "Task 6", description: "Description 6", shortDescription: "Short Description 6", progress: 25 }],
  addTask: (task: TaskType) => set((state) => ({ tasks: [...state.tasks, task] })),
  removeTask: (task: TaskType) => set((state) => ({ tasks: state.tasks.filter((t) => t !== task) })),
})