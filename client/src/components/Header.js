import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Payment from './Payment';
class Header extends React.Component {

    renderContent = () => {
        switch (this.props.auth) {
            case null:
                return null;
            case false:
                return <li><a href='/auth/google'>Login with Google</a> </li>

            default:
                return [
                    <li key="1"><Payment/></li>,
                    <li key="3" style={{margin:'0 10px'}}>Credits: {this.props.auth.credit}</li>,
                   <li key="2"><a href='api/logout'>Logout</a></li>
        ];

        }
    }
    render() {
        console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to={this.props.auth ? '/survey' : '/'}
                        className="left brand-logo">
                        Survey App
                </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>

                </div>
            </nav>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        auth
    }

}

export default connect(mapStateToProps)(Header); 