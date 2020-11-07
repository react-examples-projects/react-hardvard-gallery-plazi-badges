import React, {Component} from 'react';

class Header extends Component{

    // funciona parecido al constructor, ya que se invoca cuando el componente se renderiza
    componentDidMount(){
        this.setState({
            mode : 'off' // por defecto el modo oscuro esta desactivado
        })

        window.onscroll = e =>{
            const header = document.querySelector('header');
            if(window.pageYOffset >= 48){
                if(!header.classList.contains('position-fixed')){
                    header.classList.add('position-fixed');
                    header.classList.add('top-0');
                    header.classList.add('width-100');
                    header.style.zIndex = '500';
                }
            }else{
                if(header.classList.contains('position-fixed')){
                    header.classList.remove('position-fixed');
                    header.classList.remove('top-0');
                    header.classList.remove('width-100');
                
                }
            }
        }

        if(window.innerWidth <= 768){
            document.querySelector('.header').style.paddingBottom = '0';
        }else{
            document.querySelector('.header').style.paddingBottom = '1rem';
            window.onresize = e => {
                if(window.innerWidth <= 768){
                    document.querySelector('.header').style.paddingBottom = '0';
                }else{
                    document.querySelector('.header').style.paddingBottom = '1rem';
                }
            }
        }
    }

    darkMode = (e) => {
        const status = this.state.mode; // leemos el estado del dark mode
        
        if(status === 'off'){
            this.setState({
                mode : 'on'
            })
            console.warn('Modo oscuro activado');
            document.body.style.backgroundColor = '#1f1f1f';;
            document.body.style.color = '#fff';
            document.querySelector('.mode-dark').style.backgroundColor = 'rgba(0, 0, 0, 0.9)';

            [...document.querySelectorAll('.drawings .row')].forEach(row => {
                row.classList.add('white-shadow');
            })
            document.querySelector('footer').style.background = 'rgba(0, 0, 0, 0.9)';

        }else{
            this.setState({
                mode : 'off'
            })
            console.warn('Modo oscuro desactivado');
            document.body.style.backgroundColor = '#eeeeee';
            document.querySelector('.mode-dark').style.backgroundColor = '#e5dfdf';
            document.body.style.color = '#000';
            [...document.querySelectorAll('.drawings .row')].forEach(row => {
                row.classList.remove('white-shadow');
            })
            document.querySelector('footer').style.background = '#d4d4d48c';
        }
    }

    render(){
        return (
            <header style={{
                boxShadow : 'rgba(0, 0, 0, 0.11) 0px 0px 9px'
            }}>
                <div className="background-blue padding-y-1 text-align-center position-relative header">
                    <span className="text-white" style={{
                        width: "400px"
                    }}>
                        Gracias por visitar mi blog, espero que te haya gustado
                    </span>
                    <input type="checkbox" id="toggle" className="display-none position-absolute"/>
                    <label htmlFor="toggle" onClick = {this.darkMode} id='toggle-mode'
                    className="display-block background-blue-dark position-absolute top-50 
                               right-0 translate-bottom-50 padding-y-1 padding-x-3 text-white cursor-pointer margin-right-1"
                    >
                        <i className="fa fa-moon position-absolute" style={{
                            left: '76%',
                            transform : 'translateY(-50%)'
                            }}>
                        </i>

                        <i className="fa fa-sun position-absolute" style={{
                            left: '9%',
                            transform : 'translateY(-50%)',
                            color: '#feb72b'
                            }}>
                        </i>
                    </label>
                </div>
            </header>
        );
    }
}

export default Header;