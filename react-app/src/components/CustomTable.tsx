import { Table } from 'react-bootstrap'
import type { ReactNode } from 'react'

export type Column<T> = {
    key: string
    header: string
    field?: keyof T
    render?: (row: T) => ReactNode
}

type Props<T> = {
    columns: Column<T>[],
    rows: T[]
    rowKey: (row: T) => string | number
}

function CustomTable<T>({
    columns,
    rows,
    rowKey
}: Props<T>) {
    return (
        <Table bordered striped responsive  hover >
            <thead>
                <tr>
                    {columns.map(
                        column => <th key={column.key}>{column.header}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                {rows.length === 0 ? (
                    <tr>
                        <td colSpan={columns.length} className='text-muted text-center'>No users found, add someone!</td>
                    </tr>
                ) : (
                    rows.map(row => (
                        <tr key={rowKey(row)}>
                            {columns.map(column => (
                                <td key={column.key}>
                                    {column.render ? column.render(row) : String(row[column.field!] ?? '-')}
                                </td>
                            ))}

                        </tr>
                    ))

                )}
            </tbody>
        </Table>
    )
}

export default CustomTable