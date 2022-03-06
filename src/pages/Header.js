import React from "react";
import react from "react";

class Header extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                <img className="masthead-avatar mb-5" src="../../as/assets/img/avatar.jpg" alt="..." />
                <h1 className="masthead-heading text-uppercase mb-0">Protecteur</h1>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <p classNameName="masthead-subheading font-weight-light mb-0"><h3>À votre service </h3><h7>réparations domiciliaires</h7></p>
            </div>
        </header>
       

        )
    }
}
export default Header;