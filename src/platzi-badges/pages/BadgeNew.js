import React, {Component, Fragment} from 'react';

//css
import './styles/BadgeNew.css';

//files
import ImgAvatar from '../images/avatar.jpg';
import confLogo from '../images/badge-header.svg';

//components
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends Component{
    state = {
            form : {
                name : "", 
                lastname : "", 
                email : "",
                jobtitle : "", 
                twitter : ""
                },
            }

    // Funcion que se invoca por los inputs que estan en el componente BadgeForm
    handleChange = e =>{
        
        this.setState({
            form : {
                ...this.state.form,
                [e.target.name] : e.target.value// si ya existe la clave, se sobreescribe el valor
            }
        })
        console.log(this.state.form);
    }

    render(){
        return (
            <Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img src={confLogo} alt="Logo" className="Badges_conf-logo"/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">

                            <Badge name={this.state.form.name}
                            lastname={this.state.form.lastname} 
                            jobtitle = {this.state.form.jobtitle} 
                            email = {this.state.form.email}
                            twitter= {this.state.form.twitter}
                            avatarUrl={ImgAvatar}
                            />

                        </div>
                        
                        <div className="col-6">
                             {/* 
                                -- onChange NO es un evento, es una propiedad que se utiliza por el componente
                                 BadgeForm. No hay que confundirse con el evento onChange que es totalmente
                                 diferente, en este caso.
                                 Pasamos una funcion como prop, para luego invocarla dentro de badgeform,
                                 esta se invocara cada vez que un input cambie de valor. El nombre del prop 
                                 'onChange' no tiene nada que ver con el evento de los inputs, se puede 
                                 colocar otro nombre al prop. 
                                 
                                -- formState contiene los valores de los inputs, estos valores estan almacenados
                                en el estado de este componente (BadgeNew), y para poder compartir el estado
                                se lo pasamos como una prop al componente BadgeForm, para que sus inputs puedan
                                usar el estado de otro componente externo
                                 */ }
                            <BadgeForm onChange={this.handleChange} formState={this.state.form}/>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default BadgeNew;