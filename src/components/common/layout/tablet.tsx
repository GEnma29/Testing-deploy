import { classNames } from "@/utilities"
import React from "react"

const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  // More people...
]



export default function TableLayout({ filters, table, isLoading }: { filters: React.ReactNode, table: React.ReactNode, isLoading: boolean }) {
  return (
    <div className="flex flex-col over-flow-x overscroll-y-none px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          {filters}
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="mt-8  flow-root">
        <div className=" -my-2 overflow-x-auto overscroll-y-none lg:overflow-x-auto sm:-mx-6  lg:-mx-4">
          <div className="flex lg:border  rounded-lg  inline-block  w-[300px] lg:w-[1200px]  align-middle">
            {isLoading ? <p>loading</p> : <>{table}</>}
          </div>
        </div>
      </div>
    </div>
  )
}
