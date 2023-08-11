import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import RouteGuard from "./guards/RouteGuard";
import { AuthenticationProvider } from "./context/Authentication";
import CssBaseline from '@mui/material/CssBaseline';
import SignIn from "./components/Login/Signin";
import Books from "./components/Books/Books";
import Favorites from "./components/Favorites/Favorites";

function App() {
  return (
    <AuthenticationProvider>
      <CssBaseline />
      <Router>
        <Switch>
          <RouteGuard path="/favorites" exact>
            <Favorites />
          </RouteGuard>
          <Route path="/login" exact>
            <SignIn />
          </Route>
          <RouteGuard path="/">
            <Books />
          </RouteGuard>
        </Switch>
      </Router>
    </AuthenticationProvider>
  );
}

export default App;
