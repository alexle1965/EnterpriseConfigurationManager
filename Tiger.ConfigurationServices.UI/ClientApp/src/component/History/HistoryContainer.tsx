import * as React from 'react';
import { Tabs } from '../Common/Tabs';

export interface HistoryContainerState {}

export class HistoryContainer extends React.Component<{}, {}> {
    render() {
        // const headings: string[] = ['Config Edit', 'Config Setting', 'Config Value'];
        return (
            <>
                <div>History Container</div>
                <div className="row my-2">
                    <div className="col">
                        <Tabs>
                            <Tabs.Tab name="Config" initialActive={true}>
                                <b>Config</b>
                            </Tabs.Tab>
                            <Tabs.Tab name="Config Setting">
                                <b>Config Setting</b>
                            </Tabs.Tab>
                            <Tabs.Tab name="Config Value">
                                <b>Config Value</b>
                            </Tabs.Tab>
                        </Tabs>
                    </div>
                </div>
            </>
        );
    }
}
