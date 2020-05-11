import React from "react";
import {Link} from 'react-router-dom'
import SurvetList from "./surveys/SurvetList";

const DashBoard = () => {

    return (
        <div>
            <SurvetList/>
            <div className="fixed-action-btn">
                <Link  to='/survey/new' className="btn-floating btn-large red">
                    <i className="material-icons">
                        add
            </i>

                </Link>

            </div>
        </div>
    )
}

export default DashBoard;