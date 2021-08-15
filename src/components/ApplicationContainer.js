import { TopNav } from "./common/top-nav/TopNav";
import { ApplicationLayout, AppContentContainer, Footer } from './ApplicationStyles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Profile from "./core/pages/profile/profile";

/**
 * Root element of the application
 * @returns {element}
 */
export default function ApplicationContainer() {
  return (
    <ApplicationLayout>
      <TopNav icon="react.svg" title="Devspace" />
      <AppContentContainer>
        <Router>
          <Switch>
            <Route path="/">
              <Profile />
            </Route>
          </Switch>
        </Router>
      </AppContentContainer>
      <Footer>ds-2 prototype</Footer>
    </ApplicationLayout>
  );
};
