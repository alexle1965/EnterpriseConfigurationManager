import * as React from 'react';
import { Tabs } from '../Common/Tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface HistoryContainerState {}

export class HistoryContainer extends React.Component<{}, {}> {
    render() {
        // const headings: string[] = ['Config Edit', 'Config Setting', 'Config Value'];
        return (
            <>
                <div className="row my-2">
                    <div className="col  border-red">
                        <Tabs>
                            <Tabs.Tab
                                name="Config"
                                initialActive={true}
                                heading={() => (
                                    <label className="mx-4">
                                        <FontAwesomeIcon icon="home" className="mr-2" style={{ color: '#000000' }} />
                                        Config
                                    </label>
                                )}
                            >
                                <div className="row">
                                    <div className="col">
                                        <div className="m-4 border-blue">
                                            <h1>config history table</h1>
                                        </div>
                                    </div>
                                </div>
                            </Tabs.Tab>
                            <Tabs.Tab
                                name="Config Setting"
                                heading={() => (
                                    <label className="mx-4">
                                        <FontAwesomeIcon icon="home" className="mr-2" style={{ color: '#000000' }} />
                                        Config Setting
                                    </label>
                                )}
                            >
                                <div className="m-4 border-blue">
                                    <h1>config setting history table</h1>
                                </div>
                            </Tabs.Tab>
                            <Tabs.Tab
                                name="Config Value"
                                heading={() => (
                                    <label className="mx-4">
                                        <FontAwesomeIcon icon="home" className="mr-2" style={{ color: '#000000' }} />
                                        Config Value
                                    </label>
                                )}
                            >
                                <div className="m-4 border-blue">
                                    <h1>config value history table</h1>
                                </div>
                            </Tabs.Tab>
                        </Tabs>
                    </div>
                </div>
            </>
        );
    }
}
