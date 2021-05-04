import React from 'react'
import SideBar from './component/Sidebar/SideBar'
import {BrowserRouter} from 'react-router-dom'
import Header from './component/Header/Header'
import HomeScreen from './component/HomeScreen/HomeScreen'
import Main from './Main/Main'

function App() {
    return (
        <BrowserRouter>
        <SideBar />
        <Header />
        <Main />
        </BrowserRouter>
    )
}

export default App
