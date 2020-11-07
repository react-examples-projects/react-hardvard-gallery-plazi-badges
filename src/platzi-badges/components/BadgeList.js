import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//files
import avatarUrlLocal from  '../images/avatar.jpg';
import '../styles/BadgesList.css';

class BadgeList extends Component{

    render(){
        const badges = this.props.badges;

        return (
            <div className="BadgesList">
                <ul className="list-unstyled BadgesList">
                {
                    badges.map(badge => {
                        return (
                            <li key={badge.id} className='BadgesListItem'>

                                <div className="w-100">
                                    <img src={avatarUrlLocal}  alt="Profile pic" className="BadgesListItem__avatar"/>

                                    <div className="BadgeList__info">
                                        <b>{badge.firstName + ' ' + badge.lastName}</b>
                                        <Link to='#' className="mt-2">
                                            @{badge.twitter}
                                        </Link>
                                    </div>
                                </div>

                                <span className="mt-2">
                                    {badge.jobTitle}
                                </span>
                            </li> 
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}

export default BadgeList;