import * as React from 'react';
import NavLink from 'src/components/Header/NavLink';
import './Header.css';

export interface HeaderState {
    toggle: boolean;
}

class Header extends React.Component<{}, HeaderState> {

    state = {
        toggle: false,
    } as HeaderState;

    toggleHeader() {
        this.setState({toggle: !this.state.toggle});
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="#">P92</a>
                <button 
                    className="navbar-toggler"
                    type="button"
                    onClick={((event: React.FormEvent<EventTarget>) => this.toggleHeader())}
                >
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className={'collapse navbar-collapse' + (this.state.toggle ? ' show' : '')}>
                    <ul className="navbar-nav">
                        <NavLink href="/users">Users</NavLink>
                        <NavLink href="/users/new">New user</NavLink>
                    </ul>
                </div>
                </nav>
        );
    }
}

export default Header;
