import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import WidgetFrame from 'react-frame-component';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import { Provider } from 'react-redux';

const store = createStore(...);

const SetupView extends React.Component {
  constructor (props) {
   super(props);
   this.handleReCaptchaChanged = () => {
       // stuff
   };
  } 

  render () {
    return (
        <div>
          { ... }
          <ReCAPTCHA
            sitekey={secureKey.key}
            onChange={this.handleReCaptchaChanged}
          />
        </div>
    );
}
}

const Layout = ({ children }) => {
// __IFRAME_CONTENT__ is replaced during the browserify build operation to match a one-line version of a HTML template, which embed custom iframe-scoped style
    return (
       <WidgetFrame
           initialContent='__IFRAME_CONTENT__'
           id='app-iframe'
        >
          { ... }
          {children}
    </WidgetFrame>
    );
};

const Router = ({ history }) => {
    return (
        <ConnectedRouter history={history}>
          <Layout>
            <Route exact path='/' component={...} />
            { ... }
            <Route path='/setup' component={SetupView} />
          </Layout>
        </ConnectedRouter>
    );
};

// `app` is the button my sdk creates and mounts into the client's webpage
ReactDOM.render(
  <Provider store={store}>
    <Router history={history} />
  </Provider>,
  app
);