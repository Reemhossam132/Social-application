import React from 'react'
import { Route , Redirect} from'react-router-dom';
import PropTypes from 'prop-types';
import { connect} from 'react-redux' ;

const PrivateRoute = ( { componet : Component,
     auth : {isAuthenticated , loading} , 
        ...rest}) => (
        <Route
         { ...rest} 
         render = {props =>!isAuthenticated && !loading ?(
                <Redirect to ='login'/>
            ) : (
                <Component {...props}/>
            )     
        }/>
    );
 

    PrivateRoute.prototype ={
        auth:PropTypes.object.isRequired
    }
 
    const mapStateToProp = state => ({
        auth:state.auth
    })

export default connect (mapStateToProp  )(PrivateRoute)
