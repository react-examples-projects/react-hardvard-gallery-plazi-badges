import React, { Component } from 'react';
import imgMantenimiento from '../images/1097.jpg';

class PicturePage extends Component{
    state = {};
    render(){
        return (
            <main className='container bg-light p-5 my-5 shadow-sm rounded w-50 border' id="container">
                <img className="img-fluid w-75 d-block mx-auto shadow-sm" src={imgMantenimiento}/>
                <h2 className="mt-5 text-center title">Esta sección está en construcción.</h2>
            </main> 
        )
    }
}

export default PicturePage