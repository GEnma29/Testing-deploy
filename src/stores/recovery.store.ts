import { create } from 'zustand'

export enum Steps {
    'Email',
    'Code',
}
interface recoveryState {
  code: string,
  current_step: Steps
  nextStep: (step: Steps) => void
  prevStep: (Step: Steps) => void
  removeSteps: () => void
}

export const recoveryStore  = create<recoveryState>()((set) => ({
    code: '',
    current_step: Steps.Email,
    nextStep: (newStep: Steps) => set(() => ({ current_step:newStep })),
    prevStep: (newStep: Steps) => set(() => ({ current_step: newStep })),
    removeSteps: () => set({ current_step: Steps.Email }),
}))