import * as React from 'react';
import NavLink from 'src/components/Header/NavLink';

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
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button 
                    className="navbar-toggler"
                    type="button"
                    onClick={((event: React.FormEvent<EventTarget>) => this.toggleHeader())}
                >
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className={'collapse navbar-collapse' + (this.state.toggle ? ' show' : '')} id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink href="/users">Users</NavLink>
                    </ul>
                </div>
                </nav>
        );
    }
}

export default Header;
