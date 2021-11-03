import { Switch, Route, Redirect } from "react-router";
// import { Link } from "react-router-dom";
// import { useAuth } from "../hooks";
// import { Button } from "antd";
// import { useHistory } from "react-router";
import {
  NotFound
} from './Features'
import { Home } from './Screens'
import { Header } from './Features'
import Create from './Screens/Create/Create';


export default function Pages() {
  // let auth = useAuth()
  // let history = useHistory();
  // let logout = () => {
  //   auth.signout(() => {
  //     localStorage.removeItem('user')
  //     history.replace('/login')
  //   })
  // }

  return (
    <div className="content-layout">
      <div className="header-layout">
        <Header />
      </div>
      <div className="body-layout">

        <Switch>
          {/* <Route path='/404' component={NotFound} /> */}
          {/* <Redirect from='/*' to='/404' /> */}

          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/create" >
            <Create />
          </Route>
          <Route exact path="/update" >
            {/* <Create /> */}
          </Route>
        </Switch>
      </div>
      <div className="footer-layout">

      </div>

    </div>
  )
}
