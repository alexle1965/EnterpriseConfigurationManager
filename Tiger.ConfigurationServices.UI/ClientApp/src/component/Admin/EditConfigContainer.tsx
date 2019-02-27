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
                            columns={ConfigColumns}
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
} //class
