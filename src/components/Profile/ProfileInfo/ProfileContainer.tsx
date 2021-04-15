import React from 'react';
import Profile, {ProfileType} from "../Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';

type PathParamsType = {
    userId: string
}

type mapStateToPropsType = {
    profile: null | ProfileType
    isAuth: boolean
}
type mapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
}

export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        // if(!userId) {
        //     userId = '2';
        // }
        this.props.getUserProfile(+userId);
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'} />;

        return <Profile {...this.props} profile={this.props.profile}/>
    }
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);