import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../UI/Components/Pages/Home/Home';
import Anime from "../UI/Components/Pages/Anime/Anime";
import Documentaries from "../UI/Components/Pages/Documentaries/Documentaries";
import Movies from "../UI/Components/Pages/Movies/Movies";
import Tvshows from "../UI/Components/Pages/TV Shows/Tvshows";
import LoginAndSignup from "../UI/Components/Pages/LoginAndSignup/LoginAndSignup";
import Signup from "../UI/Components/Pages/LoginAndSignup/Signup"

const index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={LoginAndSignup} path={"/"}></Route>
                <Route Component={Signup} path={"/signup"}></Route>
                <Route Component={Home} path={"/home"}></Route>
                <Route Component={Anime} path={"/anime"}></Route>
                <Route Component={Documentaries} path={"/documentaries"}></Route>
                <Route Component={Movies} path={"/movies"}></Route>
                <Route Component={Tvshows} path={"/tv shows"}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default index;