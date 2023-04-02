import { Route, Routes } from "react-router-dom"
import { AboutUs } from "./Pages/AboutUs/AboutUs"
import "./App.scss"

export const App = () => {
    return <>
        <Routes>
            <Route path="/" element={<AboutUs />}/>
        </Routes>
    </>
}
