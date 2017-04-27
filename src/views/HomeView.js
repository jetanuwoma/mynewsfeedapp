import React from 'react';
import GoogleLogin from 'react-google-login';
import { Button } from 'semantic-ui-react';
import createHistory from 'history/createBrowserHistory';
import User from '../models/user';
import siteLogo from '../assets/images/rss.png';

const history = createHistory({
  forceRefresh: true,
});

class HomeView extends React.Component {
  componentWillMount() {
    if (User.isLoggedIn()) {
      history.push('/discover');
    }
  }

  responseGoogle(response) {
    User.Login(response.profileObj);
    history.push('/discover');
  }

  render() {
    return (
      <div className="wrapper" >
        <div className="upper_section" >
          <div className="container">
            <nav className="site_nav">
              <div className="logo">
                <img alt="Site Name" src={siteLogo} />
              </div>
              <div className="site_name">
                <h2>News Headlines </h2>
              </div>
              <div className="clear" />
            </nav>
            <div className="site_description">
              <header>
                <h1>World Most Powerful News Headlines</h1>
                <h2>Read news from over 70 news sources accross the world!</h2>
              </header>
              <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
              />
            </div>
          </div>
        </div>
        <div className="lower_section" >
          <div className="container">
            <div className="info">
              <img alt="Site Name" src={siteLogo} />
              <p className="footer_text">Copyright <span>©2017</span></p>
              <div className="clear" />
            </div>
            <div className="social_icons">
              <Button circular color="facebook" icon="facebook" />
              <Button circular color="twitter" icon="twitter" />
              <Button circular color="linkedin" icon="linkedin" />
              <Button circular color="google plus" icon="google plus" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeView;
