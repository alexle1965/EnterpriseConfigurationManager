import * as React from 'react';
import { IConfigSetting } from '../../models/ConfigSettingModel';
import ReactTable from 'react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Loading } from '../Common/Loading';
import { AdminClient } from './AdminClient';
import { ConfigSettingColumns } from '../../models/EntityDefinition';

interface IState {
    editSettingResult: IConfigSetting[];
    selectedConfigSettingKey: number;
    actionType: string;
}
const adminClient = new AdminClient();

export class EditSettingContainer extends React.Component<{}, IState> {
    public state = {
        editSettingResult: [],
        selectedConfigSettingKey: 0,
        actionType: ''
    };

    public componentDidMount(): void {
        this.load();
    }

    public render(): JSX.Element {
        const { editSettingResult: settingResult } = this.state;

        // Edit & Delete buttons
        const ActionColumn = [
            {
                headerClassName: 'bold-text bg-light text-center',
                className: 'text-center small',
                width: 100,
                filterable: false,
                Cell: (
                    <div>
                        <button id="Edit" name="btnEdit" className="btn btn-link btn-sm" title="Edit Config Setting" onClick={this.handleOnClick}>
                            <FontAwesomeIcon icon="pen" className="small" style={{ color: '#DAA520' }} />
                        </button>
                        <button
                            id="Delete"
                            name="btnDelete"
                            className="btn btn-link btn-sm"
                            title="Delete Config Setting"
                            onClick={this.handleOnClick}
                        >
                            <FontAwesomeIcon icon="trash" className="small" style={{ color: '#FF0000' }} />
                        </button>
                    </div>
                )
            }
        ];

        // add Edit & Delete buttons to the ConfigSettingColumns column definition
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
                            getTdProps={(rowInfo: any, column: any) => {
                                // must have rowInfo in order for getTdProps to work
                                return {
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    },
                                    onClick: () => {
                                        // the button onclick action will trigger the handleOnClick method first
                                        // when the users click on the Edit / Delete buttons on the datagrid
                                        // then getTdProps is invoked immediately after that.  This is where
                                        // we set the state for the selectedConfigKey and clear the actionType
                                        if (column && column.row.configSettingKey) {
                                            this.setState({ selectedConfigSettingKey: column.row.configSettingKey });
                                        }
                                        // --- DO NOT DELETE ---
                                        // IMPORTANT! React-Table uses onClick internally to trigger
                                        // events like expanding SubComponents and pivots.
                                        // By default a custom 'onClick' handler will override this functionality.
                                        // If you want to fire the original onClick handler, call the
                                        // 'handleOriginal' function.
                                        // onClick: (e, handleOriginal) => {
                                        // console.log("A Td Element was clicked!");
                                        // console.log("it produced this event:", e);
                                        // console.log("It was in this column:", column);
                                        // console.log("It was in this row:", rowInfo);
                                        // console.log("It was in this table instance:", instance);
                                        // if (handleOriginal) {
                                        //     handleOriginal();
                                        // }
                                        //}
                                    }
                                };
                            }}
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
                <div>
                    <h6>
                        Action: {this.state.actionType} - You selected configKey: {this.state.selectedConfigSettingKey}
                    </h6>
                </div>
            </>
        );
    } // render

    private async load() {
        const allSettings = await adminClient.getSettings();
        this.setState({ editSettingResult: allSettings });
    }

    private renderLoading = () => {
        let isLoading: boolean = false;

        isLoading = this.state.editSettingResult && this.state.editSettingResult.length === 0;
        return isLoading && <Loading />;
    };

    private handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const action = e.currentTarget.id;
        this.setState({ actionType: action });
    };

    // private alignTextVertically = () => {
    //     return {
    //         style: {
    //             display: 'flex',
    //             flexDirection: 'column',
    //             justifyContent: 'center'
    //         }
    //     };
    // };
} // class
