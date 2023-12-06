import { create } from 'zustand'

interface userState {
  name: string
  token: string
  role: string
  isAuth: boolean,
}

export const userStore = create<userState>()((set) => ({
  name: '',
  role: '',
  token: '',
  isAuth: false,
  userLogin:({name, token, role }:{ name: string, token: string, role: string})=> 
  set({name, token, role , isAuth: true})
}))