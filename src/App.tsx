import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {ActionsTypes, PostType, RootStateType, StoreType} from "./redux/state";

type PropsType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}

function App(props: PropsType) {
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path={'/dialogs'}
                       render={() => <Dialogs state={props.state}/>}/>
                <Route path={'/profile'}
                       render={() => <Profile
                           state={props.state}
                           dispatch={props.dispatch}/>}/>
            </div>
        </div>

    );
}


export default App;
