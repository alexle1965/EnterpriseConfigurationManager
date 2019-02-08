import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Home } from '../Home';
import { HistoryContainer } from '../History/HistoryContainer';
import { ManageConfigContainer } from '../ManageConfig/ManageConfigContainer';

export class NavSideMenu extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <div className="container-fluid d-flex flex-fill" style={{ minHeight: 700 }}>
                <div className="row flex-fill">
                    <div className="col-2 col-xl-2 bg-light border-red">
                        <ul className="nav flex-column" style={{ color: '#FFFFFF' }}>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/'}>
                                    <FontAwesomeIcon icon="home" className="mr-2" style={{ color: '#000000' }} />
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/History'}>
                                    <FontAwesomeIcon icon="history" className="mr-2" style={{ color: '#7B68EE' }} />
                                    View History
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/ManageConfig'}>
                                    <FontAwesomeIcon icon="tools" className="mr-2" style={{ color: '#FF5733' }} />
                                    Manage Configuration
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to={'/'}>
                                    <FontAwesomeIcon icon="server" className="mr-2" style={{ color: '#4682B4' }} />
                                    Manage Servers
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/'}>
                                    Menu Item 5
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <Route exact path="/" component={Home} />
                        <Route exact path="/History" component={HistoryContainer} />
                        <Route exact path="/ManageConfig" component={ManageConfigContainer} />
                    </div>
                </div>
            </div>
        );
    }
}
