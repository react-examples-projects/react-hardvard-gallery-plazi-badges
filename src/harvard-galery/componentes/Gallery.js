import React, { Component, Fragment } from 'react';

//components
import PicturesList from './PicturesList';

class Gallery extends Component {
    state = { 
        search : '',
        results : [],
        error : false
     }
    
    componentDidMount = () => {
        // comprobar que exista el componente.
        this._existComponent = true;
    }

    componentWillUnmount = () => {
        // evitar perdidas de memoria, cuando el componente se destruya.
        this._existComponent = false;
    }

    handleCaptureSearch = event => {
        const search = event.target.value;
        console.log(search);
        if(search.length > 0 && this._existComponent){
            this.setState({
                search,
                results : [],
                error : false
            }, this.handleResults);
        }
    }

     handleResults = async () => {
        const url = `https://api.harvardartmuseums.org/gallery?q=${this.state.search}&apikey=11c06430-a2ab-11ea-9ce0-85bc651c2a41`;
        try {
            const xhr = await fetch(url);
            const json = await xhr.json();

            if(this._existComponent){
                this.setState({
                    results : json.records,
                    error : false
                }); 
            }
        
        } catch (error) {
            this.setState({
                results : [],
                error : true
            })
        }
    }

    showPictures = () => {
        // comprobamos si hay errores
        if(this.state.error){
            return(
                <div className="alert alert-danger py-2 mt-3 mx-auto w-75 text-center">
                    <p className="mb-0">Hubo un problema de conexión</p>
                </div>
            );
        }

        return (
            this.state.results.length ? 
                <PicturesList pictures={this.state.results}/> : 

            <div className="alert alert-danger py-2 mt-3 mx-auto w-75 text-center">
                <p className="mb-0">No hay resultados</p>
            </div>
        );
    }

    render() { 
        return ( 
            <Fragment>
                <main className='container bg-light p-5 my-5 shadow-sm rounded w-50 border' id="container">
                    <i className="icon-find mb-3 fa fa-search"></i>
                    <h2 className="text-center title">Buscar en galería</h2>
                    <div className="container-fluid row mx-auto px-0">
                        <div className="col-lg-12 px-0">
                            <div className="form-group">
                                <span className="lead d-block my-3 text-center">Nombre</span>
                                
                                <input type="text" onChange={this.handleCaptureSearch} className="form-control mx-auto w-75 shadow-sm" defaultValue="Art" placeholder="Busca..."/>
                            </div>
                        </div>
                    </div>
                    { this.showPictures() }
                </main> 
            </Fragment>
        );
    }
}
 
export default Gallery;