import * as React from 'react';
import { EditButton } from '../Common/EditButton';
import { ConfigOptions } from '../Common/ConfigOptions';
import { ViewBy } from '../../models/Enum';
import { KeyValuePair } from '../Common/KeyValuePair';
import { ManageConfigClient } from './ManageConfigClient';
import { ConfigSelections } from '../Common/ConfigSelections';

interface IProps { }

interface IState {
    uniqueId: number;
    checked: boolean;
    viewBy: string;
    selectedValue: string;
    configList: KeyValuePair<any, string>[];
    settingList: KeyValuePair<any, string>[];
    options: KeyValuePair<any, string>[];
}

const manageConfigClient = new ManageConfigClient();

export class ManageConfigSection extends React.Component<IProps, IState> {
    private isComponentMounted: boolean = false;

    public state: IState = {
        uniqueId: 0,
        checked: false,
        viewBy: ViewBy.Config,
        selectedValue: '',
        configList: [],
        settingList: [],
        options: []
    };

    public render(): JSX.Element {
        return (
            <>
                <div>
                    <h5>Manage Configuration Section</h5>
                </div>
                <div className="container-fluid">
                    <div className="row my-2">
                        <div className="col-3 text-left">
                            <ConfigOptions option={this.state.viewBy} selectedView={this.toggleView} />
                        </div>
                        <div className="col text-left">
                            <ConfigSelections
                                selectFor={this.state.viewBy}
                                selectedValue={this.state.selectedValue}
                                options={this.state.options}
                                onConfigSelect={this.handleConfigSelectChange}
                            />
                        </div>
                        <div className="col-3 text-center">
                            <EditButton editMode={this.toggleEdit} />
                        </div>
                    </div>

                    <div className="row border-red">
                        <div className="col  border-black">configResult</div>
                    </div>
                </div>
                <div>
                    <h6>ManageConfigSection.tsx: Edit Mode is: {this.state.checked ? 'on' : 'off'}</h6>
                    <h6>ManageConfigSection.tsx: View by: {this.state.viewBy}</h6>
                    <h6>ManageConfigSection.tsx: Selected value: {this.state.selectedValue}</h6>
                </div>
            </>
        );
    } // render

    public async componentDidMount() {
        this.fetchData();
        this.isComponentMounted = true;
    }

    public componentWillUnmount(): void {
        this.isComponentMounted = false;
    }

    // populate dropdowns
    private fetchData = async () => {
        const configNameList = await manageConfigClient.populateConfigDropdown();
        const configSettingNameList = await manageConfigClient.populateSettingDropdown();
        const optionList = this.state.viewBy === ViewBy.Config ? configNameList : configSettingNameList;
        this.setState({ configList: configNameList, settingList: configSettingNameList, options: optionList });
    };
    // Edit Mode On or Off
    private toggleEdit = () => {
        this.setState({ checked: !this.state.checked });
    };

    // View By Options Config or Setting
    private toggleView = (selectedView: string) => {
        const optionList = selectedView === ViewBy.Config ? this.state.configList : this.state.settingList;
        this.setState({ viewBy: selectedView, selectedValue: '', options: optionList });
    };

    private handleConfigSelectChange = async (selectedValue: string) => {
        try {
            const cfgKey = this.state.uniqueId + 1;
            if (this.isComponentMounted) {
                this.setState({ uniqueId: cfgKey, selectedValue: selectedValue });
            }
        } catch (asyncError) {
            console.log('ManageConfigSection handleOnSelect async error: ', asyncError);
        }
    };
}