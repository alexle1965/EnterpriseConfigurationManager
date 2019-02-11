import * as React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Home } from '../../Home';
import { HistoryContainer } from '../History/HistoryContainer';
import { ManageServerContainer } from '../ManageServer/ManageServerContainer';
import { ManageConfigSection } from '../ManageConfig/ManageConfigSection';

export class NavSideMenu extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <div className="container-fluid d-flex flex-fill" style={{ height: '100%' }}>
                <div className="row flex-fill">
                    <div className="col-2 col-xl-2 bg-light border-red">
                        <ul className="nav flex-column" style={{ color: '#FFFFFF' }}>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/'}>
                                    <FontAwesomeIcon icon="home" className="mr-2" style={{ color: '#000000' }} />
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item" title="View Edit History">
                                <NavLink className="nav-link" to={'/History'} activeClassName="nav-link-active">
                                    <FontAwesomeIcon icon="history" className="mr-2" style={{ color: '#800000' }} />
                                    View History
                                </NavLink>
                            </li>
                            <li className="nav-item" title="Edit Config Value by Config or Setting">
                                <NavLink className="nav-link" to={'/ManageConfig'} activeClassName="nav-link-active">
                                    <FontAwesomeIcon icon="tools" className="mr-2" style={{ color: '#1E90FF' }} />
                                    Manage Configuration
                                </NavLink>
                            </li>

                            <li className="nav-item" title="Edit Server">
                                <NavLink className="nav-link" to={'/ManageServer'} activeClassName="nav-link-active">
                                    <FontAwesomeIcon icon="server" className="mr-2" style={{ color: '#4682B4' }} />
                                    Manage Servers
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <Route exact path="/" component={Home} />
                        <Route exact path="/History" component={HistoryContainer} />
                        <Route exact path="/ManageConfig" component={ManageConfigSection} />
                        <Route exact path="/ManageServer" component={ManageServerContainer} />
                    </div>
                </div>
            </div>
        );
    }
}