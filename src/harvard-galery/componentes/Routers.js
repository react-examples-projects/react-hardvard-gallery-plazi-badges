import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// componentes
import Gallery from "./Gallery";
import PicturePage from './PicturePage';
import NotFound from './NoFound';

const Routers = () => (
    <Fragment>
        <nav className='navbar navbar-fixed navbar-expand-lg bg-primary justify-content-center'>
            <h1 className='navbar-brand text-white m-0 p-0 py-3'>Harvard Gallery</h1>
        </nav>
        <Router>
            <Switch>
                <Route exact path="/" >
                    <Gallery />
                </Route>

                <Route exact path="/picture-page/:id" >
                    <PicturePage />
                </Route>

                <Route>
                    <NotFound />
                </Route>     
            </Switch>
        </Router>
    </Fragment>
)

export default Routers;