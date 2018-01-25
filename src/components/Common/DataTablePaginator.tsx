import * as React from 'react';
import { Button } from 'react-bootstrap';


interface DataTablePaginatorProps {
    current_page: number;
    total: number;
    first_item: number;
    last_item: number;
    last_page: number;
    per_page: number;
    has_more_pages: number;
}

class DataTablePaginator extends React.Component<DataTablePaginatorProps> {
    render() {
        return (
            <div>
                <Button></Button>
            </div>
        );
    }
}

export default DataTablePaginator;
