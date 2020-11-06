import React from 'react';
import { withRouter } from 'react-router-dom';
import Author from '../Pages/Author';
import Home from '../Pages/Home';

const select_manager = ( path ) => {
    switch ( path ) {
        case "author":
            return <Author />
        default:
            return <Home />
    }
}

const ContentManager = ( props ) => {

    return (
        <div className="body_content">
            { select_manager( props.match.path ) }
        </div>
    )
}
export default withRouter(ContentManager);