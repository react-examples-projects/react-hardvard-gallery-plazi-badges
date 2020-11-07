import React, {Component} from 'react';

class BadgeForm extends Component{
    
    /*
    state = {} 
    No es posible definir un estado por defecto en este componente, porque estamos usando el estado de otro
    componente externo (BadgeNew) el cual nos lo pasa por una prop llamado formState
    */

    handleClick(_this, e){
        e.preventDefault();
        console.log(_this.props)
    }

    render(){
        /* updateValueCallback: Guardamos la funcion que proviene del componente padre (BadgeNew) 
        la cual actualiza el estado del mismo.
        Enlazamos dicha funcion a cada input cuando estos cambien de valor, y cada vez que se escriba en los inputs
        el estado de BadgeNew va a actualizarse

        formState: contiene una referencia al estado de BadgeNew para poder utilizar sus valores en este componente
        (BadgeForm)
        */
        const updateValueCallback = this.props.onChange;
        const formState = this.props.formState;
        return (
            <div >
                <h1>New Attendant</h1>
                <form>
                    <div className="form-group">
                        <label>First Name</label>

                        <input type="text" 
                        onChange={updateValueCallback} 
                        name="name" 
                        className="form-control"
                        value={formState.name}
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>

                        <input type="text" 
                        onChange={updateValueCallback} 
                        name="lastname"
                        className="form-control"
                        value={formState.lastname}
                        />
                    </div>
                    <hr/>
                    <div className="form-group">
                        <label>Email</label>

                        <input type="email" 
                        onChange={updateValueCallback} 
                        name="email"
                        className="form-control"
                        value={formState.email}
                        />

                    </div>

                    <div className="form-group">
                        <label>Job title</label>

                        <input type="text" 
                        onChange={updateValueCallback} 
                        name="jobtitle"
                        className="form-control"
                        value={formState.jobtitle}
                        />

                    </div>

                    <div className="form-group">
                        <label>Twitter</label>

                        <input type="text" 
                        onChange={updateValueCallback} 
                        name="twitter"
                        className="form-control"
                        value={formState.twitter}
                        />

                    </div>
                    <button onClick={this.handleClick.bind(null, this)} className="btn btn-primary">Save</button> 
                </form>
            </div>
        );
    }
}

export default BadgeForm;