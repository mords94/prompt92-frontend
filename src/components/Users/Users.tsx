import * as React from 'react';
import DataTable from '../Common/DataTable';
import { connect } from 'react-redux';
import { getUsers } from 'src/actions/users';
import { USERS_RESET } from 'src/store/usersReducer';
import BreadCrumb from '../Common/BreadCrumb';
import Loader from '../Common/Logo';

interface UsersProps {
    dispatch: any;
    users: object[];
    pagination: any;
    fetched: boolean;
    fetching: boolean;
}

const headers = [
    { id: 'name', label: 'Full name' },
    { id: 'emails', label: 'E-mails' },
];

class Users extends React.Component<UsersProps> {

    handleNextPage() {
        const hasMore = this.props.pagination.has_more_pages; 
        const page = this.props.pagination.current_page;
        const { dispatch } = this.props;

        if (hasMore) {
            dispatch(getUsers(page + 1));
        }
    }

    handlePrevPage() {
        const page = this.props.pagination.current_page; 
        const { dispatch } = this.props;

        if (page !== 1) {
            dispatch(getUsers(page - 1));
        }
    }

    handleChangePage = (page: Number) => {
        const { dispatch } = this.props;
        dispatch(getUsers(page as number));
    }

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch({type: USERS_RESET});
        dispatch(getUsers());
    }

    render() {

        const { fetched, fetching, users, pagination } = this.props;

        if (!fetched && !fetching) {
            return '';
        }

        if (!fetched && fetching) {
            return <Loader/>;
        }

        const data = users.map((user: any) => ({
            name: user.attributes.name,
            emails: user.relationships.emails.data.map((email: any) => email.attributes.address).join(', ')
        }));

        return (
            <div>
                <BreadCrumb page="Users"/>
                {/* <div className="row">
                    <div className="col-lg-12">
                        <Link to="/users/new" className="btn btn-primary mt-2 mb-2">New user</Link>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-lg-12">
                        <DataTable
                            data={data}
                            headers={headers}
                            onPrevPage={() => this.handlePrevPage()}
                            onNextPage={() => this.handleNextPage()}
                            onChangePage={this.handleChangePage}
                            pagination={true}
                            paginatorProps={pagination}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    ...state.user,
});

export default connect(mapStateToProps)(Users);
