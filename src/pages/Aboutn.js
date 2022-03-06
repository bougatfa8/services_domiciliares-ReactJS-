import React from "react";

class Aboutn extends React.Component{
    constructor(props)
    {
        super(props)
    }
    render(){
        return(
            <section className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row">
                    <div className="col-lg-4 ms-auto"><p className="lead">Protecteur SERVICE REPARATION DOMICILE, société par actions simplifiée, est active depuis 1 an. </p></div>
                    <div className="col-lg-4 me-auto"><p className="lead">Installée à NABEUL(8000), elle est spécialisée dans le secteur d'activité de reparation domicile et de bâtiment et construction. </p></div>
                </div>
               
              
            </div>
        </section>

        )
    }
}
export default Aboutn;