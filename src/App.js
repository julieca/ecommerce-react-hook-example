import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Home from './pages/Home';
import Detail from './pages/Detail';
import './App.css';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00acf0',
      contrastText: '#fff',
    },
  },
});
const App = ({ store }) => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/detail/:id" component={Detail} />
        </Switch>
      </Router>
    </Provider>
  </ThemeProvider>

)
App.propTypes = {
  store: PropTypes.object.isRequired
}
export default App