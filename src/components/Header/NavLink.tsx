import * as React from 'react';
import { Link } from 'react-router-dom';

export interface NavLinkProps {
    href: string;
    children: any;
}

class NavLink extends React.Component<NavLinkProps> {
    render() {
        const {href, children} = this.props;

        return (
            <li className="nav-item active">
                <Link to={href}>{children}</Link>
            </li>
        );
    }
}

export default NavLink;
