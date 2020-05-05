import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './Header';
import {connect} from 'react-redux'
import * as actions from '../actions/index'
import Landing from './Landing';


// class App extends React.Component{

//     render(){
//         <div>
//             <p>
//                 app compoents
//             </p>
//         </div>
//     }
// }


const Dashboard=()=><h2>Dashboard</h2>;


class App extends React.Component {
    componentDidMount(){
        this.props.fetchUser()
    }
    render(){
    return(
        <div className="container">
            <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Landing} />
                <Route path="/survey" component={Dashboard} />
            </div>
            </BrowserRouter>
            
        </div>
    );
}
}

export default connect(null,actions)(App);