import React from 'react'
import BookContainer from '../containers/BookContainer'
import AddBookContainer from '../containers/AddBookContainer';
import BookDetailsContainer from '../containers/BookDetailsContainer';
import { HashRouter as Router } from 'react-router-dom';
import { Switch, Route ,browserHistory} from 'react-router';
import LoginContainer from '../containers/LoginContainer';


class App extends React.Component {

    render() {
        return(
                <Router history={browserHistory}>
                    <div>
                        <Switch>
                            <Route path="/add"   component={() => (<AddBookContainer update="false" />)} />
                            <Route path="/update"  component={() => (<AddBookContainer update="true" />)} />
                            <Route path="/details" component={ BookDetailsContainer }/>
                            <Route path="/Book" component={ BookContainer } />
                            <Route path="/" component={() => (<LoginContainer  />)} />

                        </Switch>
                    </div>
                </Router>
        );
    }
};


export default App