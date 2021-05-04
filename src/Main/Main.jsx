import React from 'react'
import ComputerScreen from '../component/ComputerScreen/ComputerScreen'
import {Route} from "react-router-dom"
import HomeScreen from '../component/HomeScreen/HomeScreen'
import MobileScreen from '../component/MobileScreen/MobileScreen'
import GrorcyScreen from '../component/GrocryScreen/GrorcyScreen'
import WomenScreen from '../component/WomenScreen/WomenScreen'
import MenScreen from '../component/MenScreen/MenScreen'
import MedicineScreen from '../component/Medicine/MedicineScreen'
import ElectronicScreen from '../component/ElectronicScreen/ElectronicScreen'
import Kitchen from '../component/Kitchen/Kitchen'
import BuynowScreen from '../component/BuynowScreen/BuynowScreen'
import ContactForm from '../component/ContactForm/ContactForm'
import AboutScreen from '../component/AboutScreen/AboutScreen'

function Main() {
    return (
        <>
        <Route exact path="/" component={HomeScreen}></Route>
        <Route path="/computers" component={ComputerScreen}></Route>
        <Route path="/mobiles" component={MobileScreen}></Route>
        <Route path="/grorcy" component={GrorcyScreen}></Route>
        <Route path="/women" component={WomenScreen}></Route>
        <Route path="/men" component={MenScreen}></Route>
        <Route path="/medicine" component={MedicineScreen}></Route>
        <Route path="/electronic" component={ElectronicScreen}></Route>
        <Route path="/kitchen" component={Kitchen}></Route>
        <Route path="/buynow" component={BuynowScreen}></Route>
        <Route path="/contact" component={ContactForm}></Route>
        <Route path="/about" component={AboutScreen}></Route>
        </>
    )
}

export default Main
