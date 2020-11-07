import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// components
import App from './platzi-badges/components/App';

// css
import  './platzi-badges/css/bootstrap.min.css';
import './platzi-badges/css/global.css';

//files


ReactDOM.render(<App />, document.getElementById('root'),
            ()=>{
                console.log('Componentes renderizados');
            });

serviceWorker.unregister();
