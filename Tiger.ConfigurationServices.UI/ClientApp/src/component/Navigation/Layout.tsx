import * as React from 'react';
import curo_logo from '../Navigation/curo_logo.png';
import { NavSideMenu } from '../Navigation/NavSideMenu';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return (
            <>
                <div>
                    <nav className="navbar navbar-dark bg-dark d-flex justify-space-between">
                        <a className="navbar-brand" href="http://www.curo.com">
                            <img src={curo_logo} />
                        </a>
                    </nav>
                </div>

                <NavSideMenu />
            </>
        );
    }
}
