import React, {Component} from 'react';
import Field from '../Common/Field';
import {withFormik} from 'formik';
import  * as Yup from 'yup';

const fields = {
    sections: [
           [
             {name: 'name', elementName: 'input', type: 'text' , placeholder:'Your name'},
             {name: 'email', elementName: 'input', type: 'email' , placeholder:'Your email'},
             {name: 'phone', elementName: 'input', type: 'text' , placeholder:'Your Phone number'},
            ],

   

           [
             {name: 'message', elementName: 'input', type: 'text' , placeholder:'Your message'},
           ]
    ]
}




class Contact extends Component{
   
    render() {
        return (
           <>
               <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <form onSubmit={this.props.handleSubmit} name="sentMessage" noValidate="novalidate">
                    <div className="row align-items-stretch mb-5">
                       
                      {fields.sections.map((section ,sectionindex) => {
                          return (
                              <div className="col-md-6" key={sectionindex}>
                               
                               {section.map((field,i) => {
                                  return <Field
                                   {...field}
                                   key={i} 
                                   value ={this.props.values[field.name]}
                                   name={field.name}
                                   onChange={this.props.handleChange}
                                   onBlur ={this.props.handleBlur} 
                                   touched={(this.props.touched[field.name])}
                                   errors ={this.props.errors[field.name]}
                                   />
                               }

                               )}

                              </div>
                          )
                      }

                      )}

                    </div>
                    
                    <div className="text-center">
                        <div id="success"></div>
                        <button className="btn btn-primary btn-xl text-uppercase" 
                          
                            type="submit"
                            
                            >Send Message</button>
                    </div>
                </form>
            </div>
        </section>
           </>
        );
    }
}



export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone:'',
        message:'',
    }),
    /*validate: values => {
        const errors = {};
        
        Object.keys(values).map(v => {
            if(!values[v]){
                errors[v]= "Required";
            }
        })
        return errors;
    },*/
    validationSchema: Yup.object().shape({
       name:Yup.string().min(3, 'Come on bro ,your name is longer than that').required('You must give us your name'),
       email:Yup.string().email('You need to give us a valid email.').required('We need Your email'),
       phone:Yup.string().min(10, 'Please write your 10 digit phone number')
            .max(10, 'Your Phone Number is too long.Please enter 10 digit phone number')
            .required('We need a phone number to reach you at.'),
       message:Yup.string().min(50,'You need to write more detailed information')
       .required('Message is requiredd.')
    
    }),
    handleSubmit: (values, {setSubmitting}) => {
        console.log("Values",values);
        alert("You have Submitted",JSON.stringify(values));
    }
})(Contact);