import * as React from 'react';
import { HeaderNav } from '../navigation/HeaderNav';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <HeaderNav />
                        <div>{this.props.children}</div>
                    </div>
                </div>
            </div>
        );
    }
}
