import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router";
import { getIsAuth } from "../../../store/reducers/authReducer/selectors";

interface PrivateRouteProps extends RouteProps {
    component: any;
}

const PrivateRoute = (props: PrivateRouteProps) => {
    const isAuth = useSelector(getIsAuth);
    const { component: Component, ...rest} = props;

    return(
        <Route 
            {...rest}
            render={ (routeProps )  =>
                isAuth ? ( 
                    <Component {...routeProps}/>
                ) : (
                    <Redirect 
                        to={{
                            pathname: '/login',
                            state: {from: routeProps.location}
                        }}
                    />
                ) 
            }
        />
    )
}

export default PrivateRoute;