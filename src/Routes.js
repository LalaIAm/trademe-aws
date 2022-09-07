import {Switch, Route} from 'react-router-dom'
import WebRoutes from './Web/WebRoutes'


const Routes = () => ( 
    <Switch>
        <Route path='/' component={WebRoutes} />
    </Switch>
)

export default Routes;