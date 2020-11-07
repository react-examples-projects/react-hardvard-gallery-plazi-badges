import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// components
import App from './platzi-badges/components/App';



ReactDOM.render(<App />, document.getElementById('root'),
            ()=>{
                console.log('Componentes renderizados');
            });

serviceWorker.unregister();
