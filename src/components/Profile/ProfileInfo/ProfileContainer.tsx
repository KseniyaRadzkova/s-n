import React from 'react';
import Profile, {ProfileType} from "../Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {RouteComponentProps, withRouter } from 'react-router-dom';

type PathParamsType = {
    userId: string
}

type mapStateToPropsType = {
    profile: null | ProfileType
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        // if(!userId) {
        //     userId = '2';
        // }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);