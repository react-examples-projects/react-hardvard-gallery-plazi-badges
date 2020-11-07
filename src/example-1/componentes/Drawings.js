import React, {Fragment} from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

// componentes
import Drawing from './Drawing';

function Drawings(props){
    return (
        <Fragment>
            <div className="justify-content-start display-flex margin-top-2 overflow-hidden drawings">
                <Drawing />
                <Drawing />
                <Drawing />
            </div>
            <BrowserRouter>
                <Link to='#' className='text-decoration-none'>
                    <button className="btn-see-more margin-top-1 background-blue border-width-0">
                        <span style={{
                            marginRight : "5px"
                        }}>Ver todo</span> <i className="fa fa-eye"></i>
                    </button>
                </Link>
            </BrowserRouter>
        </Fragment>
    );
}

export default Drawings;