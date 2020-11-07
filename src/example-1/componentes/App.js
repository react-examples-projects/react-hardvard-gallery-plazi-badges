import React, {Fragment} from 'react';

// Componentes
import Header from './Header';
import Content from './Content';

// import files
import "./../css/libCSS.css";
import "./../css/app.css";
import "./../css/css/all.min.css";

function App(){

    
    return (
        <Fragment>
            <Header />
            <Content />
        </Fragment>
    );
}

export default App;