import * as React from 'react';
import { IConfigSetting } from '../../models/ConfigSettingModel';
import ReactTable from 'react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Loading } from '../Common/Loading';
import { AdminClient } from './AdminClient';
import { ConfigSettingColumns } from '../../models/EntityDefinition';

interface IState {
    settingResult: IConfigSetting[];
}
const adminClient = new AdminClient();

export class EditSettingContainer extends React.Component<{}, IState> {
    public state = {
        settingResult: []
    };

    public componentDidMount(): void {
        this.load();
    }

    public render(): JSX.Element {
        const { settingResult } = this.state;
        const ActionColumn = [
            {
                headerClassName: 'bold-text bg-light text-center',
                className: 'text-center small',
                width: 100,
                Cell: (
                    <div>
                        <button className="btn btn-link btn-sm" title="Edit Config Setting">
                            <FontAwesomeIcon icon="pen" className="small" style={{ color: '#DAA520' }} />
                        </button>
                        <button className="btn btn-link btn-sm" title="Delete Config Setting">
                            <FontAwesomeIcon icon="trash" className="small" style={{ color: '#FF0000' }} />
                        </button>
                    </div>
                )
            }
        ];

        // add Edit button to the column definition
        // ConfigSettingColumns definition is in EntityDefinition.ts
        const _columns = [...ActionColumn, ...ConfigSettingColumns];

        return (
            <>
                <div className="row">
                    <div className="col-2">
                        <button type="button" className="btn btn-outline-primary my-2">
                            <FontAwesomeIcon icon="plus" className="mr-2" style={{ color: '#007bf' }} /> Add New Config Setting
                        </button>
                    </div>
                    <div className="col text-right">
                        <h4 className="mt-2">Edit Setting</h4>
                        {this.renderLoading()}
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <ReactTable
                            className="-striped -highlight "
                            defaultPageSize={-1}
                            showPagination={false}
                            showPageJump={true}
                            filterable={true}
                            style={{ height: '700px' }}
                            data={settingResult}
                            noDataText="No Record Found"
                            columns={_columns}
                            getTdProps={this.alignTextVertically}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="">
                            {settingResult && <label className="text-left small bold-text">Record count: {settingResult.length}</label>}
                        </div>
                    </div>
                </div>
            </>
        );
    } // render

    private async load() {
        const allSettings = await adminClient.getSettings();
        this.setState({ settingResult: allSettings });
    }

    private renderLoading = () => {
        let isLoading: boolean = false;

        isLoading = this.state.settingResult && this.state.settingResult.length === 0;
        return isLoading && <Loading />;
    };

    private alignTextVertically = () => {
        return {
            style: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }
        };
    };
}
