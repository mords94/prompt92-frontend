import * as React from 'react';
import { MouseEvent } from 'react';

export interface DataTablePaginatorProps {
    current_page?: number;
    total?: number;
    first_item?: number;
    last_item?: number;
    last_page?: number;
    per_page?: number;
    onPrevPage: any;
    onNextPage: any;
    onChangePage: any;
}

class DataTablePaginator extends React.Component<DataTablePaginatorProps> {
    renderNavigation() {
            const {current_page, last_page, onPrevPage, onNextPage, onChangePage} = this.props;
            return (
                <nav aria-label="Pagination">
                <ul className="pagination">
                    <li className="page-item"><a href="#" className="page-link" onClick={onPrevPage}>Prev</a></li>
                        {Array.from({length: last_page || 0}, (_, key: number) => 
                            <li className="page-item" key={key}>
                                <a 
                                    href="#"
                                    onClick={(event: MouseEvent<HTMLAnchorElement>) => onChangePage(key + 1)}
                                    className={'btn btn-' + (current_page === key + 1 ? 'primary' : 'default')}
                                >
                                    {key + 1}
                                </a>
                            </li>
                        )}
                    <li className="page-item"><a href="#" className="page-link" onClick={onNextPage}>Next</a></li>
                    </ul>
                </nav>
                );
    }
    
    render() {
        const {current_page, total, last_page, per_page} = this.props;
        return (
            <div className="row">
                <div className="col-lg-12">
                    {this.renderNavigation()} 
                </div>
                <div className="col-lg-12">
                    Page {current_page} of {last_page} ({per_page} of total {total} items)
                </div>
            </div>
        );
    }
}

export default DataTablePaginator;
