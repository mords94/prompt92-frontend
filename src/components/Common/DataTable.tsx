import * as React from 'react';
import DataTablePaginator from 'src/components/Common/DataTablePaginator';

export interface DataTableHeader {
    id: string;
    label: string;
}

export interface DataTableProps {
    headers: DataTableHeader[];
    data: Object[];
}

class DataTable extends React.Component<DataTableProps> {
    render() {
        const {headers, data} = this.props;
        return (
            <div className="container-fluid">
            <DataTablePaginator/>
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
