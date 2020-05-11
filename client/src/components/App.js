import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './Header';
import {connect} from 'react-redux'
import * as actions from '../actions/index'
import Landing from './Landing';
import DashBoard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';


class App extends React.Component {
    componentDidMount(){
        this.props.fetchUser()
    }
    
    render(){
    return(
        <div className="container">
            <BrowserRouter>
            <div className='container'>
                <Header/>
                <Route exact path="/" component={Landing} />
                <Route path="/surveys" component={DashBoard} />
                <Route path='/survey/new' component={SurveyNew}/>
            </div>
            </BrowserRouter>
            
        </div>
    );
}
}

export default connect(null,actions)(App);