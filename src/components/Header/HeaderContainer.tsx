import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData, logout} from "../../redux/auth-reducer";

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchPropsType = {
    getAuthUserData: () => void
    logout: () => void
}

export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {getAuthUserData: getAuthUserData, logout})(HeaderContainer);