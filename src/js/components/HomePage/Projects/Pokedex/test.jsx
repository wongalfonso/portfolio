import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,Switch,Route,Link,Redirect} from "react-router-dom";


function AnimationExample() {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <div style={styles.fill}>
            <Route exact path="/"
              render={() => <Redirect to="/hsl/10/90/50" />}
            />

            <ul style={styles.nav}>
              <NavLink to="/hsl/10/90/50">Red</NavLink>
              <NavLink to="/hsl/120/100/40">Green</NavLink>
              <NavLink to="/rgb/33/150/243">Blue</NavLink>
              <NavLink to="/rgb/240/98/146">Pink</NavLink>
            </ul>

            <div style={styles.content}>
          
                  <Switch location={location}>
                    <Route exact path="/hsl/:h/:s/:l" component={HSL} />
                    <Route exact path="/rgb/:r/:g/:b" component={RGB} />
                    {/* Without this `Route`, we would get errors during
                    the initial transition from `/` to `/hsl/10/90/50`
                */}
                    <Route render={() => <div>Not Found</div>} />
                  </Switch>
            </div>
          </div>
        )}
      />
    </Router>
  );
}

function NavLink(props) {
  return (
    <li style={styles.navItem}>
      <Link {...props} style={{ color: "inherit" }} />
    </li>
  );
}

function HSL({ match: { params } }) {
  return (
    <div>
      hsl(
      {params.h}, {params.s}
      %, {params.l}
      %)
    </div>
  );
}

function RGB({ match: { params } }) {
  return (
    <div
      style={{
        ...styles.fill,
        ...styles.rgb,
        background: `rgb(${params.r}, ${params.g}, ${params.b})`
      }}
    >
      rgb(
      {params.r}, {params.g}, {params.b})
    </div>
  );
}

export default AnimationExample;