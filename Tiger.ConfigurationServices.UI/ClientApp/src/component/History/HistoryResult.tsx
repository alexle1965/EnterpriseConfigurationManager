import * as React from 'react';
import ReactTable from 'react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ViewBy } from '../../models/Enum';
import { format } from 'date-fns';
// import { IConfigEdit } from '../../models/ConfigEditModel';
// import { IConfigSettingEdit } from '../../models/ConfigSettingEditModel';

interface IProps {
    detailId: string;
    data: any[];
}

interface IState {}

export class HistoryResult extends React.Component<IProps, IState> {
    public render(): JSX.Element {
        const columnDef = this.getColumns(this.props.detailId);

        return (
            <>
                <div className="row ">
                    <div className="col">
                        <ReactTable
                            className=" -striped -highlight"
                            defaultPageSize={-1}
                            showPagination={false}
                            showPageJump={false}
                            noDataText="No Record Found"
                            style={{ height: '700px' }}
                            data={this.props.data}
                            columns={columnDef}
                        />
                    </div>
                </div>
            </>
        );
    }

    private getColumns = (detailId: string) => {
        const dateEnteredWidth = 150;
        const actionWidth = 95;
        const tlrWidth = 100;

        const ConfigEditColumns = [
            {
                id: 'dateEntered',
                Header: 'Date Entered',
                accessor: (d: any) => {
                    return format(d.dateEntered, 'MM/DD/YYYY');
                },
                show: true,
                headerClassName: 'bold-text bg-light text-left',
                className: 'text-center small',
                maxWidth: dateEnteredWidth,
                sortable: false,
                filterable: true,
                filterMethod: (filter: any, row: any) => filterCaseInsensitive(filter, row, '') // work around solution
            },
            {
                Header: 'Action',
                accessor: 'actionType',
                show: true,
                headerClassName: 'bold-text bg-light text-center ',
                className: 'text-center small',
                maxWidth: actionWidth,
                filterable: true,
                filterMethod: (filter: any, row: any) => filterCaseInsensitive(filter, row, '') // work around solution
            },
            {
                Header: 'TLR',
                accessor: 'tlr',
                show: true,
                headerClassName: 'bold-text bg-light text-center',
                className: 'text-center small',
                maxWidth: tlrWidth,
                filterable: true,
                filterMethod: (filter: any, row: any) => filterCaseInsensitive(filter, row, '') // work around solution
            },
            {
                Header: 'Teller Name',
                accessor: 'tellerName',
                show: true,
                headerClassName: 'bold-text bg-light text-left',
                className: 'text-left small',
                filterable: true,
                filterMethod: (filter: any, row: any) => filterCaseInsensitive(filter, row, '') // work around solution
            },
            {
                Header: 'Config Name',
                accessor: 'configName',
                show: true,
                headerClassName: 'bold-text bg-light text-left',
                className: 'text-left small',
                filterable: true,
                filterMethod: (filter: any, row: any) => filterCaseInsensitive(filter, row, '') // work around solution
            },

            {
                Header: 'Description',
                accessor: 'description',
                show: true,
                headerClassName: 'bold-text bg-light text-left',
                className: 'text-left small',
                minWidth: 300,
                filterable: true,
                filterMethod: (filter: any, row: any) => filterCaseInsensitive(filter, row, '') // work around solution
            },
            {
                id: 'isProduction',
                Header: 'Production',
                accessor: (d: any) => {
                    return d.isProduction ? <FontAwesomeIcon icon="check-circle" className="text-success" /> : '';
                },
                show: true,
                headerClassName: 'bold-text bg-light text-center ',
                className: 'text-center',
                maxWidth: 150
            },
            {
                Header: 'Config Edit Key',
                accessor: 'configEditKey',
                show: false,
                headerClassName: 'bold-text bg-light text-left',
                className: 'text-center small'
            },
            {
                Header: 'Config Key',
                accessor: 'configKey',
                show: false,
                headerClassName: 'bold-text bg-light text-left',
                className: 'text-center small'
            },
            {
                Header: 'Curo Server',
                accessor: 'curoDbServerKey',
                show: false,
                headerClassName: 'bold-text bg-light text-left',
                className: 'text-center small'
            },
            {
                Header: 'Applog Server',
                accessor: 'applogDbServerKey',
                show: false,
                headerClassName: 'bold-text bg-light text-left',
                className: 'text-center small'
            }
        ];

        const ConfigSettingEditColumns = [
            {
                id: 'dateEntered',
                Header: 'Date Entered',
                accessor: (d: any) => {
                    return format(d.dateEntered, 'MM/DD/YYYY');
                },
                show: true,
                headerClassName: 'bold-text bg-light text-left',
                className: 'text-center small',
                maxWidth: dateEnteredWidth,
                filterable: true,
                filterMethod: (filter: any, row: any) => filterCaseInsensitive(filter, row, '') // work around solution
            },
            {
                Header: 'Action',
                accessor: 'actionType',
                show: true,
                headerClassName: 'bold-text bg-light text-center ',
                className: 'text-center small',
                maxWidth: actionWidth,
                filterable: true,
                filterMethod: (filter: any, row: any) => filterCaseInsensitive(filter, row, '') // work around solution
            },
            {
                Header: 'TLR',
                accessor: 'tlr',
                show: true,
                headerClassName: 'bold-text bg-light text-center',
                className: 'text-center small',
                maxWidth: tlrWidth,
                filterable: true,
                filterMethod: (filter: any, row: any) => filterCaseInsensitive(filter, row, '') // work around solution
            },
            {
                Header: 'Teller Name',
                accessor: 'tellerName',
                show: true,
                headerClassName: 'bold-text bg-light text-left',
                className: 'text-left small',
                filterable: true,
                filterMethod: (filter: any, row: any) => filterCaseInsensitive(filter, row, '') // work around solution
            },

            {
                Header: 'Config Setting Name',
                accessor: 'configSettingName',
                show: true,
                headerClassName: 'bold-text bg-light text-left',
                className: 'text-left small',
                minWidth: 200,
                filterable: true,
                filterMethod: (filter: any, row: any) => filterCaseInsensitive(filter, row, '') // work around solution
            },
            {
                Header: 'Description',
                accessor: 'description',
                show: true,
                headerClassName: 'bold-text bg-light text-left',
                className: 'text-left small',
                minWidth: 350,
                filterable: true,
                filterMethod: (filter: any, row: any) => filterCaseInsensitive(filter, row, '') // work around solution
            }
        ];

        const ConfigValueEditColumns = [
            {
                id: 'dateEntered',
                Header: 'Date Entered',
                accessor: (d: any) => {
                    return d.dateEntered.toDateString();
                },
                show: true,
                headerClassName: 'bold-text bg-light text-left',
                className: 'text-center small',
                maxWidth: dateEnteredWidth
            },
            {
                Header: 'Action Type',
                accessor: 'actionType',
                show: true,
                headerClassName: 'bold-text bg-light text-center ',
                className: 'text-center small',
                width: actionWidth
            },
            {
                Header: 'TLR',
                accessor: 'tlr',
                show: true,
                headerClassName: 'bold-text bg-light text-center',
                className: 'text-center small',
                maxWidth: tlrWidth
            },
            {
                Header: 'Teller Name',
                accessor: 'tellerName',
                show: true,
                headerClassName: 'bold-text bg-light text-left',
                className: 'text-left small',
                width: 200
            },

            {
                Header: 'Config Value',
                accessor: 'configValue',
                show: true,
                headerClassName: 'bold-text bg-light text-left',
                className: 'text-left small',
                width: 200
            }
        ];

        switch (detailId) {
            case ViewBy.Config:
                return ConfigEditColumns;
            case ViewBy.Setting:
                return ConfigSettingEditColumns;
            case ViewBy.Value:
                return ConfigValueEditColumns;
            default:
                return;
        }
    };
} // export

// this is a work around for filtering with case insensitive
// default filtering method is case sensitive
// https://react-table.js.org/#/story/custom-filtering
function filterCaseInsensitive(filter: any, row: any, method: string) {
    const id = filter.pivotId || filter.id;

    if (method === 'startwith') {
        // start with
        return row[id] !== undefined ? String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase()) : true;
    } else {
        // contains
        return row[id] !== undefined ? String(row[filter.id].toLowerCase()).includes(filter.value.toLowerCase()) : true;
    }
}
