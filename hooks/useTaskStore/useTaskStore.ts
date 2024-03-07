import { create } from 'zustand'
import { createTasksSlice, TasksState } from '@/stores/tasks'
import { createNewTaskSlice, NewTaskState } from '@/stores/newTask'

const useTaskStore = create<TasksState & NewTaskState>((...a) => ({
  ...createTasksSlice(...a),
  ...createNewTaskSlice(...a),
}))

export default useTaskStore