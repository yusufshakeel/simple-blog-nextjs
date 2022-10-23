"use strict";

import { HeartIcon } from '@heroicons/react/24/solid'
import classes from './main-footer.module.css'

function MainFooter() {
    return (
        <div className="container-fluid bg-light">
            <div className="row">
                <div className="container">
                    <div className="row p-5">
                        <div className="text-center">
                            <p>Made with <HeartIcon className={classes.iconStyle} /> and cool tech in India.</p>
                            <p><small>By <a className="link link-primary" href="https://github.com/yusufshakeel">Yusuf Shakeel</a></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainFooter;