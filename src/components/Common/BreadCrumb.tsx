import * as React from 'react';

interface BreadCrumbProps {
    page: string;
    arrow?: boolean;
}

export default ({arrow = true, page}: BreadCrumbProps) => {
    return (
        <nav aria-label="breadcrumb" className="mt-3">
            <ol className={'breadcrumb ' + (arrow ? 'breadcrumb-arrow' : '')}>
                <li className="breadcrumb-item " >Home</li>
                <li className="breadcrumb-item active" aria-current="page">{page}</li>
            </ol>
        </nav>
    );
};
