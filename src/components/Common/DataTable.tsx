import * as React from 'react';
import { Table } from 'react-bootstrap';

interface DataTableHeader {
    key: string;
    label: string;
}

interface DataTableProps {
    headers: DataTableHeader[];
    data: Object[];
}

class DataTable extends React.Component<DataTableProps> {
    render() {
        const {headers, data} = this.props;
        return (
            <Table striped={true} bordered={true} condensed={true} hover={true}>
                <thead>
                <tr>
                    {headers.map((header: DataTableHeader, key: number) => <th key={key}>{header.label}</th>)}
                </tr>
                </thead>
                <tbody>
                <tr>
                    {data.map((row: Object, key: number) => <td key={key}>rwa</td>)}
                </tr>
                </tbody>
            </Table>
        );
    }
}

export default DataTable;
