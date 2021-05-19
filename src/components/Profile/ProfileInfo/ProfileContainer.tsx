import React from 'react';
import Profile from "../Profile";
import {connect} from "react-redux";
import {getUserProfile, getStatus, updateStatus, ProfileType} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

type PathParamsType = {
    userId: string
}

type mapStateToPropsType = {
    profile: null | ProfileType
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}


type mapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string | null) => void
}

export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = Number(this.props.match.params.userId);
        if (!userId && this.props.authorizedUserId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push("login")
            }
            this.props.getUserProfile(userId);
            this.props.getStatus(userId);
        }
    }

    render() {
        return <Profile {...this.props}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}/>
    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status ? state.profilePage.status : "",
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
});


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

