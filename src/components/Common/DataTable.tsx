import * as React from 'react';
import DataTablePaginator from 'src/components/Common/DataTablePaginator';
import { DataTablePaginatorProps } from './DataTablePaginator';

export interface DataTableHeader {
    id: string;
    label: string;
}

export interface DataTableProps {
    headers: DataTableHeader[];
    data: Object[];
    onNextPage: any;
    onPrevPage: any;
    onChangePage: any;
    paginatorProps?: Partial<DataTablePaginatorProps>;
    pagination?: boolean;
    loaded?: false;
}

class DataTable extends React.Component<DataTableProps> {
    render() {
        const {headers, data, paginatorProps, pagination, onPrevPage, onNextPage, onChangePage} = this.props;

        return (
            <div className="">
            {pagination && 
                <DataTablePaginator 
                    {...paginatorProps}
                    onNextPage={onNextPage} 
                    onPrevPage={onPrevPage}
                    onChangePage={onChangePage}
                />
            }
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead className="thead-dark">
                        <tr>
                            {headers.map((header: DataTableHeader, key: number) => <th key={key}>{header.label}</th>)}
                        </tr>
                        </thead>
                        <tbody>
                            {data.map((row: Object, key: number) => <tr key={key}>
                                {headers.map((column: DataTableHeader, columnKey: number) => 
                                <td key={columnKey}>
                                    {row[column.id]}
                                </td>)}
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default DataTable;
