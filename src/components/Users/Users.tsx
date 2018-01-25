import * as React from 'react';
import DataTable from '../Common/DataTable';

const headers = [
    {
        id: 'name',
        label: 'Name',
    },
    {
        id: 'date_of_birth',
        label: 'Birthday',
    }
];

const data = [
    {
        name: 'KISS John',
        date_of_birth: '1994-10-05'
    },
    {
        name: 'KISS John',
        date_of_birth: '1994-10-05'
    },
    {
        name: 'KISS John',
        date_of_birth: '1994-10-05'
    },
    {
        name: 'KISS John',
        date_of_birth: '1994-10-05'
    }
];

class Users extends React.Component {
    render() {
        return (
            <div className="row">
                <h1>Users</h1>
                <DataTable data={data} headers={headers}/>
            </div>
        );
    }
}

export default Users;