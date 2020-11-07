import React, { Component, Fragment } from 'react';

// components
import Picture from './Picture';

const PicturesList = ({pictures}) => (
    pictures.map(picure => {
        return (
            <Picture 
                name={picure.name} 
                lastupdate={picure.lastupdate}
                gallerynumber={picure.gallerynumber}
                key={picure.id}
                id={picure.id}
            >
            </Picture>
        );
    })
);

export default PicturesList;