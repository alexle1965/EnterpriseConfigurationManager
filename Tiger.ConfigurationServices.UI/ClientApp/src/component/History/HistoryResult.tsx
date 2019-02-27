import * as React from 'react';
import ReactTable from 'react-table';
import { ConfigEditColumns, ConfigSettingEditColumns, ConfigValueEditColumns } from '../../models/EntityDefinition';
import { ViewBy } from '../../models/Enum';

interface IProps {
    detailId: string;
    data: any[];
}

interface IState {}

export class HistoryResult extends React.Component<IProps, IState> {
    public render(): JSX.Element {
        const columns = this.getColumns(this.props.detailId);

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
                            columns={columns}
                        />
                    </div>
                </div>
            </>
        );
    }

    private getColumns = (detailId: string) => {
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
