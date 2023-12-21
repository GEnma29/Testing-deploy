import { getCoreRowModel, useReactTable, flexRender } from '@tanstack/react-table';
import type { ColumnDef } from '@tanstack/react-table';
import LoadingTable from './Loading';

interface ReactTableProps<T extends object> {
    data: T[];
    columns: ColumnDef<T>[];
    isLoading: boolean;

}

export const Table = <T extends object>({ data, columns, isLoading }: ReactTableProps<T>) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <>
            {isLoading ?
                <LoadingTable />
                :
                <table className="payment_table min-w-full divide-y divide-gray-100  ">
                    <thead className=" bg-[#EBEBEB]">
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
                    <tbody className="divide-y  divide-gray-100 bg-transpatent">
                        {
                            data.length === 0 ?
                                <tr>
                                    <td colSpan={columns.length} className="text-center">
                                        <div className='flex w-full justify-center items-center'>
                                            <p>No hay Datos</p>
                                        </div>
                                    </td>
                                </tr> :
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

    );
};