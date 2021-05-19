import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {logout} from "../../redux/auth-reducer";

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchPropsType = {
    logout: () => void
}

export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {

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

export default connect(mapStateToProps, {logout})(HeaderContainer);