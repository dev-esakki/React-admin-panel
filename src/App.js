import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));

//Authentication
const isAuthenticated = () => {
  const storage = localStorage.getItem('token')
  return storage ? true : false; 
}


const UnauthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    !isAuthenticated()
      ? <Component {...props} />
      : <Redirect to='/dashboard' />
  )} />
);


const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated()
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
);


const ProtectedRouteAfterLogin = ({component : Component, ...rest}) => {    
  return (
      <Route {...rest} render= { 
          props => {                    
          if(!!localStorage.getItem('token')){
              return <Component {...props}/>
          } else {
              return <Redirect to='/login' />
          }
      }}/>
  )
}

const ProtectedRouteBeforeLogin = ({component : Component, ...rest}) => {
  return (
      <Route {...rest} render={
           props => {
               if(!(!!localStorage.getItem('token'))) {
                  return <Component {...props}/>
               } else {
                  return <Redirect to='/dashboard' />
               }
           }
      }/>
  )
}
// <ProtectedRouteBeforeLogin path="/signin" component={FormSignin} />

class App extends Component {

  render() {    
    return (      
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" name="Login Page" component={Login} />
              <Route exact path="/register" name="Register Page" component={Register} />
              <Route exact path="/404" name="Page 404" component={Page404} />
              <Route exact path="/500" name="Page 500" component={Page500} />
              <Route path="/" name="Home" component={DefaultLayout} />
             {/*  <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} /> */}
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
