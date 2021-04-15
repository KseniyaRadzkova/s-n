import React from 'react';
import Profile, {ProfileType} from "../Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

type PathParamsType = {
    userId: string
}

type mapStateToPropsType = {
    profile: null | ProfileType
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
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);