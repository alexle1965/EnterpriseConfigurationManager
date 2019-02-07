import * as React from 'react';
import { Loading } from './component/Loading';
import PageContainer from './component/PageContainer';

export class Home extends React.Component<{}, {}> {
    render() {
        const leftContent = <div className="">Page Menu goes here</div>;

        const centerContent = (
            <div className="text-center">
                <h1>Home.tsx</h1>
                <div>
                    <Loading />
                </div>
            </div>
        );

        return <PageContainer leftContent={leftContent} centerContent={centerContent} />;
    }
}
