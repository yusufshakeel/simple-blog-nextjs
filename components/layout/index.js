import {Fragment} from 'react';

import MainNavbar from './main-navbar';
import MainFooter from "./main-footer";
import classes from "./index.module.css"

function Layout(props) {
    return (
        <Fragment>
            <MainNavbar/>
            <main className={classes.mainContainer}>{props.children}</main>
            <MainFooter/>
        </Fragment>
    );
}

export default Layout;