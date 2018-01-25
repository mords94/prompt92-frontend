import * as React from 'react';

interface DataTablePaginatorProps {
    current_page: number;
    total: number;
    first_item: number;
    last_item: number;
    last_page: number;
    per_page: number;
}

class DataTablePaginator extends React.Component<any> {

    public static defaultProps: DataTablePaginatorProps = {
        current_page: 1,
        total: 0,
        first_item: 0,
        last_item: 0,
        last_page: 1,
        per_page: 15,
    };

    renderNavigation() {
            const {current_page, last_page} = this.props;
            return (
                    <div>
                        <a href="#" className="btn">Prev</a>
                            {Array.from({length: last_page}, (v: number, k: number) => 
                                <a href="#" className={'btn' + (current_page === k + 1 ? ' btn-primary' : '')}>
                                    {k + 1}
                                </a>
                            )}
                        <a href="#" className="btn">Next</a>
                    </div>
                    );
    }
    
    render() {
        const {current_page, total, last_page, per_page} = this.props;
        return (
            <div className="row">
                <div className="col-lg-6">
                    Page {current_page} of {last_page} ({per_page} of total {total})
                </div>
                <div className="col-lg-6 text-right">
                    {this.renderNavigation()}
                </div>
            </div>
        );
    }
}

export default DataTablePaginator;
