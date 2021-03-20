import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {ActionsTypes, AppStateType} from "./redux/redux-store";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";

type PropsType = {
    state: AppStateType
    dispatch: (action: ActionsTypes) => void
}

function App(props: PropsType) {
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path={'/dialogs'}
                       render={() => <DialogsContainer />}/>
                <Route path={'/profile'}
                       render={() => <ProfileContainer />}/>
                <Route path={'/users'}
                render={() => <UsersContainer />}/>
            </div>
        </div>

    );
}


export default App;
