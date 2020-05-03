import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './Header';


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
const Survey=()=><h2>Survey</h2>;
const Landing=()=><h2>Landing</h2>;

const App =()=>{
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
    )
}

export default App;