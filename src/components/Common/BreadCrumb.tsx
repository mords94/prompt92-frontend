import * as React from 'react';

interface BreadCrumbProps {
    page: string;
}

export default (props: BreadCrumbProps) => {
    return (
        <nav aria-label="breadcrumb" className="mt-3">
            <ol className="breadcrumb">
                <li className="breadcrumb-item " >Home</li>
                <li className="breadcrumb-item active" aria-current="page">{props.page}</li>
            </ol>
        </nav>
    );
};
