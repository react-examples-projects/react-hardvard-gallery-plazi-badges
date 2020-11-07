import React, {Fragment, Component} from 'react';
import {Link } from "react-router-dom";

class Picture extends Component{
    constructor(props){
        super(props);
        this.name = props.name;
        this.lastupdate = props.lastupdate;
        this.theme = props.theme;
        this.id = props.id;
        this.state = {
            images : []
        };
        this.getImage();
    }
    
    componentDidMount = () => {
        // comprobar que exista el componente.
        this._existComponent = true;
    }

    componentWillUnmount = () => {
        // evitar perdidas de memoria, cuando el componente se destruya.
        this._existComponent = false;
    }

    getImage = async () => {
        const xhr = await fetch('https://picsum.photos/500/200');
        const file = await xhr.blob();
        const url = URL.createObjectURL(file);

        if(this._existComponent){
            this.setState({
                images : [...this.state.images, url]
            })
        }
    }

    renderCards = () => {
        if(this.state.images.length > 0){
            return(
                <div className="card w-75 my-4 mx-auto shadow-sm">
                    <img className="card-img-top img-fluid h-100" src={this.state.images[0]} alt={this.name} />
                    <div className="card-body">
                        <div className="row">

                            <div className="col-lg-6">
                                <h5 className="card-title">{this.name}</h5>
                                <h6 style={{
                                    fontWeight : "lighter"
                                }}>Id: {this.id}</h6>
                            </div>

                            <div className="col-lg-6 text-right">
                                <Link to={`/picture-page/${2}`} className="text-dark">
                                    <span>ver mas <i className="fa fa-eye"></i></span>
                                </Link>
                            </div>

                        </div>
                        
                        <small className="card-subtitle mb-2 text-muted">
                            {this.lastupdate}
                        </small>

                        <p className="card-text">
                            {this.theme}
                        </p>
                    </div>
                </div>
            )
        }else{
            return(
                <div className="sk-fading-circle">
                    <div className="sk-circle1 sk-circle"></div>
                    <div className="sk-circle2 sk-circle"></div>
                    <div className="sk-circle3 sk-circle"></div>
                    <div className="sk-circle4 sk-circle"></div>
                    <div className="sk-circle5 sk-circle"></div>
                    <div className="sk-circle6 sk-circle"></div>
                    <div className="sk-circle7 sk-circle"></div>
                    <div className="sk-circle8 sk-circle"></div>
                    <div className="sk-circle9 sk-circle"></div>
                    <div className="sk-circle10 sk-circle"></div>
                    <div className="sk-circle11 sk-circle"></div>
                    <div className="sk-circle12 sk-circle"></div>
                </div>
            )
        }
    }

    render(){
        return(
            <Fragment>
                {
                    this.renderCards()
                }
            </Fragment>
        );
    }
}

export default Picture;