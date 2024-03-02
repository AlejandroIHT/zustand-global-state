import { create } from 'zustand'

const useCharacters = create((set) => ({
  characters: null,
  updateCharacters: (characters: any) => set({ characters }),
}))

export default useCharacters