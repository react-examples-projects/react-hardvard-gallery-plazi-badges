import React, { Component } from 'react';

import LogoHeader from '../images/badge-header.svg';


//css
import '../styles/Badge.css';

class Badge extends Component{
    render(){
        const { name, 
                lastname, 
                jobtitle, 
                twitter, 
                avatarUrl } = this.props;

        return(
            <div className="Badge">
                <div className="Badge__header">
                    <img src={LogoHeader} alt="Logo"/>
                </div>
                
                <div className="Badge__section-name">
                    <img src={avatarUrl} alt="Avatar"
                    className="Badge__avatar"
                    />
                    <h1>{name} <br/> {lastname}</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>
                        {jobtitle}
                    </h3>
                    <div>
                        @{twitter}
                    </div>
                </div>
                
                <div className="Badge__footer">
                    #myHashtag
                </div>
            </div>
        )
    }
}

export default Badge; 