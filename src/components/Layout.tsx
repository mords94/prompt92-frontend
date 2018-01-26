import * as React from 'react';
import Header from './Header/Header';

export class Layout extends React.Component<{}, {}> {
    public render() {
        return <div className="App">
            <div>
                <Header />
                {this.props.children}
            </div>
        </div>
    }
}
