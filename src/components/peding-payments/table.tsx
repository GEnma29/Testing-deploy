import { useState, useMemo } from "react";
import dayjs from "dayjs";
import useSWR from "swr";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { ordersFetcher } from "@/services";
import { DatePickerWithRange, } from "@/components/common";
import { DateRange } from "react-day-picker";
import TableLayout from "../common/layout/tablet";
import PaginationTable from "../common/pagination-table.component";
import { useNavigate } from "react-router-dom";

const TablePendingPayment = () => {

    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(2023, 10, 20),
        to: dayjs(new Date(2023, 10, 20)).add(20, 'days').toDate(),
    })
    const navigate = useNavigate()

    const gotTo = (route: string) => {
        navigate(`/private/payments/${route}`, { replace: true })

    }

    const [page, setPage] = useState<number>(1)
    const [limit, setLimit] = useState<number>(10)

    const nextPage = () => {
        setPage((prev) => page + 1)
    }
    const prevPage = () => {
        setPage((prev) => prev > 0 ? page - 1 : prev)
    }

    const key = useMemo(() => {
        return `/payments?sort=created_at&limit=${limit}&page=${page}&status=pending&start_date=${dayjs(date?.from).format()}&end_date=${dayjs(date?.to).format()}`;
    }, [page, date, limit]);



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
            cell: (info: any) => {
                return <p onClick={() => gotTo(info.getValue())} className="underline cursor-pointer text-center">{'ver'}</p>

            }


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
            cell: (info: any) => dayjs(info.getValue()).format('DD/MM/YYYY')
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
                <div className="flex w-full">
                    <DatePickerWithRange
                        date={date}
                        setDate={setDate}
                    />


                </div>
            } table={
                <>
                    {isLoading ? <p>Loading</p> :
                        <table className="min-w-full divide-y divide-gray-100  ">
                            <thead className="rounded-lg bg-[#EBEBEB]">
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
                            <tbody className="divide-y divide-gray-100 bg-transpatent">
                                {
                                    table.getRowModel().rows.map((row) => {
                                        return (
                                            <tr key={row.id} className=" hover:bg-[#EBEBEB]">
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

                </>
            }
            pagination={
                <PaginationTable
                    totalPages={10}
                    currentPage={page}
                    nextPage={nextPage}
                    prevPage={prevPage}
                    limit={limit}
                    setLimit={setLimit}
                />
            }
        />
    )
}
export default TablePendingPayment;