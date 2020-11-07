import React, {Fragment} from 'react';

//files
import confLogo from '../images/badge-header.svg';

function NotFound(){
    return (
        <Fragment>
            <div className="Badges">
                <div className="Badges__hero">
                    <div className="Badges__container">
                        <img src={confLogo} alt="Logo" className="Badges_conf-logo"/>
                    </div>
                </div>
            </div>
            <h1 className='text-center mt-5'>Al parecer estás navegando en un lugar desconocido :/</h1>
            <h3 className='text-center'>La ruta a la que intentas acceder no existe</h3>
        </Fragment>
    )
}

export default NotFound;