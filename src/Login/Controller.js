import { BrowserRouter, Route, Switch, useParams } from "react-router-dom/cjs/react-router-dom.min";
import App from "../App";
import Topics from "../Pages/topics";
import Tutorails from "../Pages/tutorials";
import Details from "../Pages/TutDetails";
import ProtectedRoute from "./ProtectedRoute";

function Controller() {
    var {path} = useParams();
    return ( <>
    
    <Switch>
    <Route exact path="/" component={App}/>
               <Route exact path="/details/:id" 
                      component={Details}/>
               <ProtectedRoute  exact path="/topics" component={Topics}/>
               <ProtectedRoute  exact path="/tutorials" component={Tutorails}/>
               <ProtectedRoute  exact path="/details" component={Details}/>
    </Switch>
    
    </> );
}

export default Controller;