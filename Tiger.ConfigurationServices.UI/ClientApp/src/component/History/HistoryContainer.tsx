import * as React from 'react';
import { Tabs } from '../Common/Tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IConfigEdit } from '../../models/ConfigEditModel';
import { IConfigSettingEdit } from '../../models/ConfigSettingEditModel';
import { IConfigValueEdit } from '../../models/ConfigValueEditModel';
import { HistoryClient } from './HistoryClient';
import { HistoryResult } from './HistoryResult';
import { ViewBy } from '../../models/Enum';

interface IState {
    uniqueId: number;
    configEditResult: IConfigEdit[];
    configSettingEditResult: IConfigSettingEdit[];
    configValueEditResult: IConfigValueEdit[];
}

const historyClient = new HistoryClient();

export class HistoryContainer extends React.Component<{}, IState> {
    public state: IState = {
        uniqueId: 0,
        configEditResult: [],
        configSettingEditResult: [],
        configValueEditResult: []
    };
    public componentDidMount(): void {
        this.load();
    }

    public render(): JSX.Element {
        // const headings: string[] = ['Config Edit', 'Config Setting', 'Config Value'];
        return (
            <>
                <div className="row my-2">
                    <div className="col">
                        <Tabs>
                            <Tabs.Tab
                                name="Config"
                                initialActive={true}
                                heading={() => (
                                    <label className="mx-4" title="Config Edit History">
                                        <FontAwesomeIcon icon="history" className="mr-2" style={{ color: '#274EAA' }} />
                                        Config
                                    </label>
                                )}
                            >
                                {this.state.configEditResult && <HistoryResult key={1} detailId={ViewBy.Config} data={this.state.configEditResult} />}
                                <div className="mx-3">
                                    {this.state.configEditResult && (
                                        <label className="text-left small bold-text">Record count: {this.state.configEditResult.length}</label>
                                    )}
                                </div>
                            </Tabs.Tab>
                            <Tabs.Tab
                                name="Config Setting"
                                heading={() => (
                                    <label className="mx-4" title="Config Setting Edit History">
                                        <FontAwesomeIcon icon="history" className="mr-2" style={{ color: '#B2483C' }} />
                                        Config Setting
                                    </label>
                                )}
                            >
                                {this.state.configSettingEditResult && (
                                    <HistoryResult key={2} detailId={ViewBy.Setting} data={this.state.configSettingEditResult} />
                                )}
                                <div className="mx-3">
                                    {this.state.configSettingEditResult && (
                                        <label className="text-left small bold-text">Record count: {this.state.configSettingEditResult.length}</label>
                                    )}
                                </div>
                            </Tabs.Tab>
                            <Tabs.Tab
                                name="Config Value"
                                heading={() => (
                                    <label className="mx-4" title="Config Value Edit History">
                                        <FontAwesomeIcon icon="history" className="mr-2" style={{ color: '#4FACB9' }} />
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
    } // render

    private async load() {
        const editConfigHistory = await historyClient.getConfigEditHistory();
        const editSettingHistory = await historyClient.getConfigSettingEditHistory();

        this.setState({ configEditResult: editConfigHistory, configSettingEditResult: editSettingHistory });
    }
} // export
