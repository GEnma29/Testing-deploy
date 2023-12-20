import { useState, useMemo } from "react";
import dayjs from "dayjs";
import useSWR from "swr";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { ordersFetcher } from "@/services";
<<<<<<< HEAD
import { DatePickerWithRange, } from "@/components/common";
=======
import { DatePickerWithRange, SelectEvent, } from "@/components/common";
>>>>>>> 21d503e7be059d60f83df89b844974c8e4104049
import { DateRange } from "react-day-picker";
import TableLayout from "../common/layout/tablet";
import PaginationTable from "../common/pagination-table.component";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD

const TablePendingPayment = () => {

    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(2023, 10, 20),
        to: dayjs(new Date(2023, 10, 20)).add(20, 'days').toDate(),
=======
import ExchangeRateFilter from "../common/exchange-rate-filter.component";
import { adapterBadged } from "@/utilities/table.utilitites";
import DownloadData from "../common/download-data";


type variant = "pending" | "success" | "reject" | "cancelled" | null | undefined

const TablePendingPayment = () => {
    /// filters 
    const [date, setDate] = useState<DateRange | undefined>({
        from: dayjs(new Date()).subtract(60, 'days').toDate(),
        to: new Date(),
>>>>>>> 21d503e7be059d60f83df89b844974c8e4104049
    })
    const navigate = useNavigate()

    const gotTo = (route: string) => {
        navigate(`/private/payments/${route}`, { replace: true })

    }

    const [page, setPage] = useState<number>(1)
<<<<<<< HEAD
    const [limit, setLimit] = useState<number>(10)
=======
    const [limit, setLimit] = useState<number>(5)
    const [status, setStatus] = useState<variant>('pending')
    const [event, setEvent] = useState<string>('')
>>>>>>> 21d503e7be059d60f83df89b844974c8e4104049

    const nextPage = () => {
        setPage((prev) => page + 1)
    }
    const prevPage = () => {
        setPage((prev) => prev > 0 ? page - 1 : prev)
    }

<<<<<<< HEAD
    const key = useMemo(() => {
        return `/payments?sort=created_at&limit=${limit}&page=${page}&status=pending&start_date=${dayjs(date?.from).format()}&end_date=${dayjs(date?.to).format()}`;
    }, [page, date, limit]);



    const { data, isLoading } = useSWR(key, ordersFetcher)

    console.log(data)
=======
    // url
    const key = useMemo(() => {
        return `/payments?sort=created_at&limit=${limit}&page=${page}&status=${status}&start_date=${dayjs(date?.from).format()}&end_date=${dayjs(date?.to).format()}&extra_1=${event}`;
    }, [page, date, limit, event, status]);


    // fetch data table
    const { data, isLoading } = useSWR(key, ordersFetcher)

    // columns
>>>>>>> 21d503e7be059d60f83df89b844974c8e4104049
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
<<<<<<< HEAD
=======
            cell: (info: any) => { return adapterBadged({ state: info.getValue() }) }
>>>>>>> 21d503e7be059d60f83df89b844974c8e4104049
        }
    ]

    const dataTable = data?.data || []

    const table = useReactTable({ data: dataTable, columns, getCoreRowModel: getCoreRowModel() })
    return (
        <TableLayout
            filters={
<<<<<<< HEAD
                <div className="flex w-full">
                    <DatePickerWithRange
                        date={date}
                        setDate={setDate}
                    />

=======
                <div className="flex align-items justify-between w-full">
                    <div className="flex flex-col lg:w-[18.125rem]">
                        <p className="flex text-blod">Rango de tiempo</p>
                        <DatePickerWithRange
                            className="w-full "
                            date={date}
                            setDate={setDate}
                        />
                    </div>
                    <div className="flex mx-3 flex-col w-32">
                        <p className="flex text-blod">Download Excel</p>
                        <DownloadData />
                    </div>
                    <div className="hidden lg:flex mx-3 flex-col ">
                        <p className="flex text-blod">Evento</p>
                        <SelectEvent className="hidden lg:flex" event={event} setEvent={setEvent} />
                    </div>
                    <div className="hidden w-[18.125rem] lg:flex   flex-col ">
                        <p className="flex text-blod">Tasa</p>
                        <ExchangeRateFilter className="flex w-full" />
                    </div>
>>>>>>> 21d503e7be059d60f83df89b844974c8e4104049

                </div>
            } table={
                <>
                    {isLoading ? <p>Loading</p> :
<<<<<<< HEAD
                        <table className="min-w-full divide-y divide-gray-100  ">
                            <thead className="rounded-lg bg-[#EBEBEB]">
=======
                        <table className="payment_table min-w-full divide-y divide-gray-100  ">
                            <thead className=" bg-[#EBEBEB]">
>>>>>>> 21d503e7be059d60f83df89b844974c8e4104049
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
<<<<<<< HEAD
                            <tbody className="divide-y divide-gray-100 bg-transpatent">
=======
                            <tbody className="divide-y  divide-gray-100 bg-transpatent">
>>>>>>> 21d503e7be059d60f83df89b844974c8e4104049
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