import { StateCreator } from "zustand"

export interface NewTaskState {
  title: string,
  description: string,
  shortDescription: string,
  progress: string | number | readonly string[] | undefined,
  updateTitle: (title: string) => void,
  updateDescription: (description: string) => void,
  updateShortDescription: (shortDescription: string) => void,
  updateProgress: (progress: number) => void,
}

export const createNewTaskSlice: StateCreator<NewTaskState, [], [], NewTaskState> = (set) => ({
  title: '',
  description: '',
  shortDescription: '',
  progress: 0,
  updateTitle: (title: string) => set(() => ({ title })),
  updateDescription: (description: string) => set(() => ({ description })),
  updateShortDescription: (shortDescription: string) => set(() => ({ shortDescription })),
  updateProgress: (progress: number) => set(() => ({ progress })),
})