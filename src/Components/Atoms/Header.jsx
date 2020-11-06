import React, { Fragment, useEffect } from 'react';
import logo from '../../assets/img/logo.png';
import { Link } from "react-router-dom";

const build_links = () => {
    return (
        <Fragment>
            <div className="father_link">
                <Link to = "/">Inicio</Link>
            </div>                
            <div className="father_link">
                <Link to = "/">Conceptos</Link>
            </div>                
            <div className="father_link">
                <Link to = "/">Recursos</Link>
            </div>                
            <div className="father_link">
                <Link to = "/">AutoEvaluación</Link>
            </div>                
            <div className="father_link">
                <Link to = "/">Autor</Link>
            </div>
        </Fragment>
    )
}
let mobile_links = null;
let desktop_links = null;
let activate = false;
let mobile_links_activate = false;
const resize = () => {
    if ( window.innerWidth <= 800 ) {
        desktop_links.classList.add('hidden_links');
        activate = true;
    }
    else {
        desktop_links.classList.remove('hidden_links');
        mobile_links.classList.add('hidden_links');
        activate = false;
        mobile_links_activate = false;
    }
}
const handleLinks = () => {
    if ( activate ) {
        mobile_links_activate 
        ? mobile_links.classList.add('hidden_links')
        : mobile_links.classList.remove('hidden_links');
        mobile_links_activate = !mobile_links_activate;
    }
}
const Header = () => {
    useEffect(() => {
        desktop_links = document.getElementById('navigation');
        mobile_links = document.getElementById('mobile_links');
        resize();
        window.addEventListener('resize', resize)
    }, [])
    return (
        <div className="Header">
            <div className="Header_content">
                <img id="logo" src={logo} alt="logo"/>
                <div 
                    className="navigation" 
                    id = "navigation"
                    onClick = { handleLinks }
                >
                    <div className="links_navidation">
                        { build_links() }              
                    </div>
                </div>
            </div>
            <div id = "mobile_links" className="linksMobile hidden_links">
                { build_links() }
            </div>
        </div>
    )
}
export default Header;