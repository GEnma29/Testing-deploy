import { classNames } from "@/utilities"
import React from "react"

const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  // More people...
]



export default function TableLayout({ filters, table, pagination }: { filters: React.ReactNode, table: React.ReactNode, pagination: React.ReactNode }) {
  return (
    <div className="flex flex-col over-flow-x overscroll-y-none px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="mt-8 sm:flex-auto">
          {filters}
        </div>
      </div>
      <div className="mt-8  flow-root">
        <div className=" -my-2 overflow-x-auto overscroll-y-none lg:overflow-x-auto sm:-mx-6  lg:-mx-4">
          <div className="flex flex-col rounded-lg   w-[20rem] md:w-[] lg:w-[1200px]  align-middle ">
            {table}
            {pagination}
          </div>
        </div>
      </div>
    </div>
  )
}
