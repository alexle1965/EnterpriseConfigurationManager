import * as React from 'react';
import { IConfigValueResult } from '../../models/ConfigValueResultModel';
import ReactTable from 'react-table';
import { readOnlyResultColumns } from '../../models/EntityDefinition';

interface IProps {
    editMode?: boolean;
    selectedValue?: string;
    data: IConfigValueResult[];
}

interface IState {}

export class ManageConfigResult extends React.Component<IProps, IState> {
    static defaultProps = {
        editMode: false,
        selectedValue: ''
    };

    public render() {
        const columns = readOnlyResultColumns;
        return (
            <>
                <ReactTable
                    className=" -striped -highlight"
                    defaultPageSize={-1}
                    showPagination={false}
                    noDataText="No record found"
                    minRows={20}
                    style={{
                        height: '700px'
                        // This will force the table body to overflow
                        // and scroll, since there is not enough room
                    }}
                    data={this.props.data}
                    columns={columns}
                />
            </>
        );
    } // render
} // export
