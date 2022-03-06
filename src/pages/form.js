
import React, { useState } from "react";

import { db } from '../firebase';


class Form extends React.Component{
    constructor(props){
        super(props);
      

    }
    
    render(){
        return(

    
      


<>
<section className="page-section" id="contact">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>



                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>



                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7">
                       
                        <form   >
                
           
        <div className="form-floating mb-3">
            <input className="form-control" 
            
            required name="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
            <label for="name">Full name</label>
            <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
        </div>

                <div className="form-floating mb-3">
                <input className="form-control" 
                
                
                name="email" required type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                <label for="email">Email address</label>
                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                </div>

                <div className="form-floating mb-3">
                                <input className="form-control" 
                                
                                
                                
                                
                                name="phone" required type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                    <label for="phone">Phone number</label>
                    <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>                        </div>


                    <div className="form-floating mb-3">
                                <textarea className="form-control"  
                                
                                
                                
                                name="message" placeholder="Address et Vos Besoin" required type="text"  className="message" data-sb-validations="required"></textarea>
                                <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>




                   <button className="btn btn-primary" name="valider" type="submit" >valider</button>



                   </form>
                    
                    </div>
                </div>
            </div>
        </section>
              
</>
          ) }};
        

 
export default Form ;