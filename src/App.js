import React, {Component} from 'react';
import PageWrapper from './Component/PageWrapper'
import {BrowserRouter as Router,Route,Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

//Pages
import Home from './Component/Pages/Home';
import About from './Component/Pages/About';
import Contact from './Component/Pages/Contact';
import Services from './Component/Common/Services';
import Portfolio from './Component/Common/Portfolio';
import Team from './Component/Common/Team';
import Login from './Component/Pages/Login';
import Blog from './Component/Pages/Blog';
import Single from './Component/Pages/Single';
import Signup from './Component/Pages/Signup';
//Admin Pages
import Dashboard from './Component/Pages/Admin/Dashboard';
import Users from './Component/Pages/Admin/Users';
import Posts from './Component/Pages/Admin/Posts';
import AddPost from './Component/Pages/Admin/AddPost';
import AdminWrapper from './Component/AdminWrapper';
import LoginWrapper from './Component/LoginWrapper';


class App extends Component {
  render() {
    return (
   
      <Router>
        
     

        <Route
         path="/admin/users"
         render={props => {
          return (
           <div>
             {this.props.auth.token ?
                <AdminWrapper>
                  <Users />
                </AdminWrapper> 
              : 
                <LoginWrapper>
                  <Login />
                </LoginWrapper>
             
             }
           </div>
          )
        }}
        /> 

        <Route
          exact={true}
          path='/admin/posts/:view'
          render={props => {
            return (
              <div>
                 {this.props.auth.token ?
                <AdminWrapper>
                  <AddPost />
                </AdminWrapper> 
              : 
                <LoginWrapper>
                  <Login />
                </LoginWrapper>
             
             }
              </div>
            )
          }}
        />

        <Route
         path="/admin/posts"
         exact={true}
         render={props => {
          return (
           <div>
             {this.props.auth.token ?
                <AdminWrapper>
                  <Posts />
                </AdminWrapper> 
              : 
                <LoginWrapper>
                  <Login />
                </LoginWrapper>
             
             }
           </div>
          )
        }}
        /> 
       
       <Route
         exact={true}
         path="/signup"
         render={props => {
            if(this.props.auth.token){
              return (
                <Redirect to="/" />
              )
            }else {
              return (
                <LoginWrapper>
                  <Signup />
                </LoginWrapper>
              )
            }
         }} /> 


       <Route
        exact={true}
        path="/admin"
        render={props => {
          //console.log("Props", props)
          return (
           <div>
             {this.props.auth.token ?
                <AdminWrapper>
                  <Dashboard />
                </AdminWrapper> 
              : 
                <LoginWrapper>
                  <Login />
                </LoginWrapper>
             
             }
           </div>
          )
        }}
       /> 


      
        <Route
          exact="true"
          path="/"
          render={props =>(
            <PageWrapper>
             <Home {...props} />
            </PageWrapper>
          )}  
        
        />


        <Route
         
         path="/blog/:slug"
         exact={true}
         render={props =>(
           <PageWrapper>
            <Single {...props} />
           </PageWrapper>
         )}  
       
       />

        <Route
         
         path="/blog"
         exact={true}
         render={props =>(
           <PageWrapper>
            <Blog {...props} />
           </PageWrapper>
         )}  
       
       />


        <Route
         
          path="/about"
          render={props =>(
            <PageWrapper>
             <About {...props} />
            </PageWrapper>
          )}  
        
        />
        <Route
     
         path="/contact"
         render={props =>(
            <PageWrapper>
             <Contact {...props} />
            </PageWrapper>
          )}  

        />
        <Route
     
         path="/services"
         component={Services}

        />
        <Route
     
         path="/portfolio"
         component={Portfolio}

        />
         <Route
     
          path="/team"
          component={Team}

        />
  
    </Router>
  );
  }
 
}

const mapStateToProps = state => {
  return {
    auth:state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
