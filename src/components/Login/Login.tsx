import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunk} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import s from "./../common/FormsControls/FormsControls.module.css"


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"email"} component={Input} placeholder={"Email"}
                       validate={[required]}/>
            </div>
            <div>
                <Field name={"password"} component={Input} placeholder={"Password"}
                       validate={[required]} type={"password"}/>
            </div>
            <div>
                <Field name={"rememberMe"} component={Input} type={"checkbox"}/> remember me
            </div>
            {props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>}

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

type MapStatePropsType = {
    isAuth: boolean
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}
const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login: loginThunk})(Login);