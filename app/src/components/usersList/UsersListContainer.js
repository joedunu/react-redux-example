'use strict'

import { connect } from 'react-redux'
import UsersList from './UsersList'

import { actions as usersActions } from '../../reducers/users/Users'
import { fetchAccountRequest } from '../../reducers/account'
import {setEditingUser} from '../../reducers/appReducer'

const mapStateToProps = ({users}) => {
  return {
    users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUserClick: (id) => {
      dispatch(setEditingUser(id))
    },
    fetchAllUsers: () => {
      dispatch(usersActions.fetchUsersRequest())
    },
    fetchAccounts: () => {
      dispatch(fetchAccountRequest())
    },
    onDelete: (id) => {
      dispatch(usersActions.deleteUserRequest(id))
    }
  }
}

const UsersListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList)

export default UsersListContainer
