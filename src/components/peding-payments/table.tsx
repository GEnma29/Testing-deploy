import { useState, useMemo } from "react";
import TableLayout from "../common/layout/tablet";
import useSWR from "swr";
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { ordersFetcher } from "@/services";
import dayjs from "dayjs";
import { Button, DatePickerDemo, DatePickerWithRange, } from "@/components/common";
import { DateRange } from "react-day-picker";

const TablePendingPayment = () => {
    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(2023, 10, 20),
        to: dayjs(new Date(2023, 10, 20)).add(20, 'days').toDate(),
    })
    const [page, setPage] = useState<number>(1)

    const nextPage = () => {
        setPage((prev) => page + 1)
    }
    const prevPage = () => {
        setPage((prev) => prev > 0 ? page - 1 : prev)
    }

    const key = useMemo(() => {
        return `/payments?sort=created_at&limit=10&page=${page}&status=pending&start_date=${dayjs(date?.from).format()}&end_date=${dayjs(date?.to).format()}`;
    }, [page, date]);



    const { data, isLoading } = useSWR(key, ordersFetcher)

    console.log(data)
    const columns = [
        {
            header: 'Orden ID',
            accessorKey: 'multi_order_id',

        },
        {
            header: 'Client',
            accessorKey: 'email',

        },
        {
            header: 'Pago',
            accessorKey: 'id',


        },
        {
            header: 'Monto',
            accessorKey: 'amount',

        },
        {
            header: 'Método',
            accessorKey: 'method_id',

        },
        {
            header: 'Fecha',
            accessorKey: 'created_at',
            cell: (info: any) => dayjs(info.value).format('DD/MM/YYYY')

        },
        {
            header: 'Actualizado por',
            accessorKey: 'updated_by_id',
        },
        {
            header: 'Estado',
            accessorKey: 'status',
        }
    ]

    const dataTable = data?.data || []

    const table = useReactTable({ data: dataTable, columns, getCoreRowModel: getCoreRowModel() })
    return (
        <TableLayout
            filters={
                <div>
                    <DatePickerWithRange
                        date={date}
                        setDate={setDate}
                    />


                </div>
            }
            isLoading={isLoading}
            table={
                <div className="flex w-full flex-col">

                    {isLoading ? <p>Loading</p> :
                        <table className="min-w-full divide-y divide-gray-100">
                            <thead className="">
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <tr key={headerGroup.id}>
                                        {headerGroup.headers.map((header, index) => (
                                            <th
                                                key={header.id}
                                                colSpan={header.colSpan}
                                                className="whitespace-nowrap text-center py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                            >
                                                {header.column.columnDef.header?.toString()}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody className="divide-y divide-gray-100 bg-white">
                                {
                                    table.getRowModel().rows.map((row) => {
                                        return (
                                            <tr key={row.id}>
                                                {row.getVisibleCells().map((cell, index) => {
                                                    return (
                                                        <td
                                                            key={index}
                                                            className="whitespace-nowrap text-center px-2 py-2 text-sm text-gray-900"
                                                        >
                                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                        </td>
                                                    )
                                                })}
                                            </tr>
                                        )

                                    })
                                }
                            </tbody>

                        </table>
                    }

                    <nav
                        className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
                        aria-label="Pagination"
                    >
                        <div className="hidden sm:block">
                            <p className="text-sm text-gray-700">
                                Showing <span className="font-medium">{page}</span> to <span className="font-medium">{data?.data.length}</span> of{' '}
                                <span className="font-medium">{data?.data?.total_pages}</span> results
                            </p>
                        </div>
                        <div className="flex flex-1 justify-between sm:justify-end">
                            <a
                                onClick={prevPage}
                                className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                            >
                                Previous
                            </a>
                            <a
                                onClick={nextPage}
                                className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                            >
                                Next
                            </a>
                        </div>
                    </nav>


                </div>
            } />
    )
}
export default TablePendingPayment;