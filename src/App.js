import React from "react";
import { Route, Switch, NavLink } from 'react-router-dom';

import VaccineSagaPage from "./containers/vaccineSaga";
import NotFoundPage from "./presentation/NotFound";


const App = () => {

    let routes =
        <Switch>
            <Route path="/" exact component={VaccineSagaPage} />
            <Route path="*" component={NotFoundPage} />
        </Switch>

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand"> Tekcasts - Redux Saga</NavLink>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" exact className="nav-link"> Vaccine Saga</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {routes}
        </>
    );
};

export default App;





