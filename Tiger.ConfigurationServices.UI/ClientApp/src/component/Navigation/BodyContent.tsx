import * as React from 'react';
import { Route } from 'react-router-dom';
import { Home } from '../../Home';
import { HistoryContainer } from '../History/HistoryContainer';
import { ManageServerContainer } from '../ManageServer/ManageServerContainer';
import { ManageConfigSection } from '../ManageConfig/ManageConfigSection';
import { Sidebar } from './Sidebar';

export class BodyContent extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <div className="container-fluid d-flex flex-fill" style={{ height: '100%' }}>
                <div className="row flex-fill">
                    <div className="col-2 col-xl-2 bg-light sidebar">
                        <Sidebar />
                    </div>
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 border-red">
                        {/* display component content - 80px in style.css set the vertical of the content */}
                        <Route exact path="/" component={Home} />
                        <Route exact path="/ManageServer" component={ManageServerContainer} />
                        <Route exact path="/ManageConfig" component={ManageConfigSection} />
                        <Route exact path="/History" component={HistoryContainer} />
                    </main>
                </div>
            </div>
        );
    }
}
