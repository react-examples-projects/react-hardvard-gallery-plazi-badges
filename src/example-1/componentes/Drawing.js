import React from 'react';

// archivos
import img1 from "./../images/post-image6.jpg";

function Drawing(props){
    return(
        <div className="row height-90 cursor-pointer" style={{
                boxShadow: "0 0 9px rgba(0, 0, 0, 0.11)"
            }}>
            <img src={img1} alt="" className="display-block width-100"/>
            <h3 className="margin-top-1 line-normal padding-left-1">Título aquí</h3>
            <p className="padding-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Iure suscipit quas, pariatur veniam recusandae at animi 
                ipsum vitae dolor doloribus.
            </p>
        </div>
    );
}

export default Drawing;