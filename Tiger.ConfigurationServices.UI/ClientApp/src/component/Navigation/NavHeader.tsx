import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import curo_logo from '../navigation/curo_logo.png';

export class NavHeader extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="http://www.curo.com">
                    <img src={curo_logo} />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav pl-5">
                        <li className="nav-item  mlr-2">
                            <a className="nav-link" href="/">
                                Home
                            </a>
                        </li>
                        {/*PS Tool - Configuration Manager */}
                        <li className="nav-item dropdown mlr-2">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarPSTool"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <FontAwesomeIcon icon="toolbox" className="mx-2" />
                                Configuration Managment
                            </a>
                            <div className="dropdown-menu mx-1" aria-labelledby="navbarPSTool">
                                <a className="dropdown-item" href="/">
                                    <FontAwesomeIcon icon="search" className="mr-2" /> Search Configuration Settings
                                </a>
                                <a className="dropdown-item" href="#">
                                    <FontAwesomeIcon icon="edit" className="mr-2" /> Add/Edit Configuration Settings
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <span className="form-inline pull-right">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <FontAwesomeIcon icon="sign-in-alt" /> Login
                            </a>
                        </li>
                    </ul>
                </span>
            </nav>
        );
    }
}
