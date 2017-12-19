import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/index';


class UsersListPage extends React.Component {
    componentDidMount () {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(user => <li key={user.id}>{user.name}</li>);
    }

    render () {
        return (
            <div>
                List of Users
                <ul>{this.renderUsers()}</ul>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function loadData(store) {
    return store.dispatch(fetchUsers());
}

export default {
    loadData,
    component: connect(mapStateToProps, {fetchUsers})(UsersListPage)
}