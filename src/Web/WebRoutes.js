import { Route, Switch, useRouteMatch } from 'react-router-dom'
import WebLayout from './WebLayout'
import Landing from './pages/Landing'

const WebRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <WebLayout>
        <Component {...props} />
      </WebLayout>
    )}
  />
)

const WebRoutes = () => {
    const {path} = useRouteMatch()
  return (
    <Switch>
      <WebRoute exact path={`${path}`} component={Landing} />
    </Switch>
  )
}
export default WebRoutes
