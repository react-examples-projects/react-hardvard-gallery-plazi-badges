import React, {Fragment} from 'react';

//components
import Navbar from '../components/Navbar';

function Layout(props) {
    const elements = props.children;
    return(
        <Fragment>
            <Navbar />
            {elements}
        </Fragment>
    )
}

export default Layout;