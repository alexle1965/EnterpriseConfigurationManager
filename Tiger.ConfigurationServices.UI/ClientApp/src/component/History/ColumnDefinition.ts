import { format } from 'date-fns';

const dateEnteredWidth = 150;
const actionWidth = 95;
const tlrWidth = 100;

export const ConfigEditColumns = [
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
            return d.isProduction;
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

export const ConfigSettingEditColumns = [
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
        Header: 'Action',
        accessor: 'actionType',
        show: true,
        headerClassName: 'bold-text bg-light text-center ',
        className: 'text-center small',
        maxWidth: actionWidth
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
        className: 'text-left small'
    },

    {
        Header: 'Config Setting Name',
        accessor: 'configSettingName',
        show: true,
        headerClassName: 'bold-text bg-light text-left',
        className: 'text-left small',
        minWidth: 200
    },
    {
        Header: 'Description',
        accessor: 'description',
        show: true,
        headerClassName: 'bold-text bg-light text-left',
        className: 'text-left small',
        minWidth: 350
    }
];

export const ConfigValueEditColumns = [
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

// this is a work around for filtering with case insensitive
// default filtering method is case sensitive
// https://react-table.js.org/#/story/custom-filtering
export function filterCaseInsensitive(filter: any, row: any, method: string) {
    const id = filter.pivotId || filter.id;

    if (method === 'startwith') {
        // start with
        return row[id] !== undefined ? String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase()) : true;
    } else {
        // contains
        return row[id] !== undefined ? String(row[filter.id].toLowerCase()).includes(filter.value.toLowerCase()) : true;
    }
}
