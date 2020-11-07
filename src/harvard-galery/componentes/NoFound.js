import React from 'react';
import notFound from '../images/404.jpg';

const NotFound = () =>  (
    <main className='container bg-light p-5 my-5 shadow-sm rounded w-50 border' id="container">
        <img className="img-fluid w-75 d-block mx-auto shadow-sm" src={notFound}/>
        <h2 className="mt-5 text-center title">Lo que buscas no se encuentra aquí.</h2>
    </main>
)

export default NotFound;