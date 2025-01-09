import './App.css';
import React from "react"
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Content/Profile/Profile";
import Dialogs from "./Components/Content/Dialogs/Dialogs";
import {Route, Routes,} from "react-router-dom";
import Users from "./Components/Content/Users/Users";
import Music from "./Components/Content/Music/Music";
import News from "./Components/Content/News/News";
import Settings from "./Components/Content/Settings/Settings";
import Friends from "./Components/Content/Friends/Friends";




const App = (props) => {
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar state={props.state}/>
            <div className="App-wrapper-content">
                <Routes>
                    <Route path='/profile' element={<Profile
                        state={props.state}
                       dispatch={props.dispatch}/>}/>
                    <Route path='/dialogs/*' element={<Dialogs
                        state={props.state}
                        dispatch={props.dispatch}/>}/>
                    <Route path='/users' element={<Users/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/News' element={<News/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/friends' element={<Friends/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
