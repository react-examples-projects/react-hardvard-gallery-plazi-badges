import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//Components
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import Home from '../pages/Home.js';
import NotFound from '../pages/NotFound.js'
import Layout from './Layout';

function App (){
   return (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/badges" component={Badges}/>
                <Route exact path="/badges/new" component={BadgeNew}/>
                <Route exact path="/" component={Home}/>
                <Route component={NotFound}/>
            </Switch>
        </Layout>
    </BrowserRouter>
   );
}

export default App;

