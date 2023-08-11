import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthenticationContext } from "../context/Authentication";

const RouteGuard = ({ children, ...rest }) => {
    const { authenticated } = useContext(AuthenticationContext);

    if (!authenticated) {
        return <Redirect to="/login" />
    }
    return <Route {...rest}>
        {children}
    </Route>
}

export default RouteGuard;