import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
    follow, requestUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow,
    UserType
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/users-selectors";


type UserPropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    // setUsers: (users: Array<UserType>) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (pageNumber: number) => void
    // setTotalUsersCount: (totalCount: number) => void
    isFetching: boolean
    // toggleIsFetching: (isFetching: boolean) => void
    followingInProgress: Array<number>
    toggleFollowingProgress: (followingInProgress: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<UserPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

// type MapDispatchPropsType = {
//     followSuccess: (userId: number) => void
//     unFollowSuccess: (userId: number) => void
//     setUsers: (users: Array<UserType>) => void
//     setCurrentPage: (pageNumber: number) => void
//     setTotalUsersCount: (totalCount: number) => void
//     toggleIsFetching: (isFetching: boolean) => void
//     toggleFollowingProgress: (followingInProgress: boolean, userId: number) => void
// }


// let mapStateToProps = (state: AppStateType): MapStatePropsType => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export default compose<React.ComponentType>(
    // withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers: requestUsers})
)(UsersContainer)