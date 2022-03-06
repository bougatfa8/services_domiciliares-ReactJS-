import React from "react";


class Product extends React.Component{
    constructor(props){
                super(props)
    }
    render(){
    
    const id1 ="../../as/assets/img/portfolio/macon.jpg" 
    const id2 ="../../as/assets/img/portfolio/electricien.jpg" 
    const id3 ="../../as/assets/img/portfolio/macon.jpg" 
    const id4 ="../../as/assets/img/portfolio/plumber.jpg" 
    const id5 ="../../as/assets/img/portfolio/painter.jpg"
    const id6 ="../../as/assets/img/portfolio/climaticien.jpg"
    const id7 ="../../as/assets/img/portfolio/vitre.jpg" 
    const id8 ="../../as/assets/img/portfolio/menage.jpg" 
    const id9 ="../../as/assets/img/portfolio/jardinier.jpg"
    const id10="../../as/assets/img/portfolio/livreure.jpg"
    const id11 ="../../as/assets/img/portfolio/chantier.jpg"
    

    

        return(
            <section className="page-section portfolio" id="portfolio">
            <div className="container">




            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>



                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>




                <div className="row justify-content-center" >



                    <div className="col-md-6 col-lg-4 mb-5" >
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal"  >
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={id1}alt="..."  />
                        </div>
                    </div>



                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#electricien">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={id2} alt="..." />
                        </div>
                    </div>



                                      <div className="col-md-6 col-lg-4">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#carpentier">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={id3} alt="..." />
                        </div>
                    </div>



                          <div className="col-md-6 col-lg-4">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#plombier">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={id4} alt="..." />
                        </div>
                    </div>
  
                   



                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#painteure">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={id5} alt="..." />
                        </div>
                    </div>
                
                


                    <div className="col-md-6 col-lg-4">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#climaticien">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={id6} alt="..." />
                        </div>
                    </div>
                  
                  


                    <div className="col-md-6 col-lg-4">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#verrier">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={id7}alt="..." />
                        </div>
                    </div>



                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#menage">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={id8} alt="..." />
                        </div>
                    </div>


                   
                    <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#jardinier">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={id9} alt="..." />
                        </div>
                    </div>
                 
                    
                    <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#livreur">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={id10} alt="..." />
                        </div>
                    </div>
                    


                    <div className="col-md-6 col-lg-4">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#chantier">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src={id11} alt="..."  />
                        </div>
                    </div>
                

                </div>
            </div>
        </section>










        )
    }
}
export default Product;