import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
import Team from '../Common/Team';


class Home extends Component{
   render() {
       return(
          <>
            <Header 
                title="Welcome to Our Studio"
                subtitle="IT'S NICE TO MEET YOU"
                buttonText="Tell me More"
                link="/services"
                showButton={true}
                img={image}
  
            

            />
             <Services />
             <Portfolio />
             <Team />
          </>
       );
   }

}

export default Home;