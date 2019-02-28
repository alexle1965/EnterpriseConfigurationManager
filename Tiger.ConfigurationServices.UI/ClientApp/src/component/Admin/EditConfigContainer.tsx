import * as React from 'react';
import { IConfig } from '../../models/ConfigModel';
import { AdminClient } from './AdminClient';
import { Loading } from '../Common/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTable from 'react-table';
import { ConfigColumns } from '../../models/EntityDefinition';

interface IState {
    editConfigResult: IConfig[];
}
const adminClient = new AdminClient();

export class EditConfigContainer extends React.Component<{}, IState> {
    public state = {
        editConfigResult: []
    };

    public componentDidMount(): void {
        this.load();
    }

    public render(): JSX.Element {
        const ActionColumn = [
            {
                headerClassName: 'bold-text bg-light text-center',
                className: 'text-center small',
                filterable: false,
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

        // add column with Edit button to the column definition
        const _columns = [...ActionColumn, ...ConfigColumns];

        return (
            <>
                <div>{this.renderLoading()}</div>
                <div className="row">
                    <div className="col-2">
                        <button type="button" className="btn btn-outline-primary my-2">
                            <FontAwesomeIcon icon="plus" className="mr-2" style={{ color: '#007bf' }} /> Add New Config
                        </button>
                    </div>
                    <div className="col text-right">
                        <h4 className="mt-2">Edit Config</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ReactTable
                            className="-striped -highlight "
                            defaultPageSize={-1}
                            showPagination={false}
                            showPageJump={true}
                            filterable
                            style={{ height: '700px' }}
                            data={this.state.editConfigResult}
                            noDataText="No Record Found"
                            columns={_columns}
                            getTdProps={this.alignTextVertically}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="">
                            {this.state.editConfigResult && (
                                <label className="text-left small bold-text">Record count: {this.state.editConfigResult.length}</label>
                            )}
                        </div>
                    </div>
                </div>
            </>
        );
    } // render

    private async load() {
        const allConfigs = await adminClient.getConfigs();
        this.setState({ editConfigResult: allConfigs });
    }

    private renderLoading = () => {
        let isLoading: boolean = false;

        isLoading = this.state.editConfigResult && this.state.editConfigResult.length === 0;
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
} //class
