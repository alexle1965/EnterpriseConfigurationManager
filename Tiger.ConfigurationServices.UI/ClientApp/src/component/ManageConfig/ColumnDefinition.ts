export const ConfigSettingResult = [
    {
        Header: 'Config Setting Name',
        accessor: 'configSettingName',
        headerClassName: 'bold-text bg-light text-left',
        className: 'text-left small',
        width: 400,
        filterMethod: (filter: any, row: any) => filterCaseInsensitive(filter, row, '')
    },
    {
        Header: 'Description',
        headerClassName: 'bold-text bg-light text-left',
        accessor: 'configSettingDescription',
        className: 'small',
        filterMethod: (filter: any, row: any) => filterCaseInsensitive(filter, row, '')
    },
    {
        Header: 'Config Setting Key',
        headerClassName: 'bold-text bg-light text-center',
        accessor: 'configSettingKey',
        show: true,
        className: 'text-center small',
        width: 200
    }
];

// this is a work around for filtering with case insensitive
// default filtering method is case sensitive and start with
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

const baseResultColumns = [
    {
        Header: 'Config Value Key',
        headerClassName: 'bold-text bg-light text-left',
        accessor: 'configValueKey',
        show: false,
        className: 'text-center small',
        width: 200,
        filterable: true,
        filterMethod: (filter: any, row: any) => filterCaseInsensitive(filter, row, '')
    },
    {
        Header: 'Config Key',
        headerClassName: 'bold-text bg-light text-left',
        accessor: 'configKey',
        show: false,
        className: 'text-center small',
        width: 200,
        filterable: true,
        filterMethod: (filter: any, row: any) => filterCaseInsensitive(filter, row, '')
    },
    {
        Header: 'Config Setting Key',
        headerClassName: 'bold-text bg-light text-left',
        accessor: 'configSettingKey',
        show: false,
        className: 'text-center small',
        width: 200,
        filterable: true,
        filterMethod: (filter: any, row: any) => filterCaseInsensitive(filter, row, '')
    },
    {
        Header: 'Config Name',
        headerClassName: 'bold-text bg-light text-left',
        accessor: 'configName',
        show: true,
        className: 'text-left small',
        width: 200,
        filterable: true,
        filterMethod: (filter: any, row: any) => filterCaseInsensitive(filter, row, '')
    },
    {
        Header: 'Config Setting Name',
        headerClassName: 'bold-text bg-light text-left',
        accessor: 'configSettingName',
        show: true,
        className: 'text-left small',
        width: 400,
        filterable: true,
        filterMethod: (filter: any, row: any) => filterCaseInsensitive(filter, row, '')
    }
];

// concatenate to the baseResultColumns
let readOnlyResultColumns = [
    ...baseResultColumns,
    {
        Header: 'Config Value',
        headerClassName: 'bold-text bg-light text-left',
        accessor: 'configValue',
        show: true,
        className: 'text-left small',
        filterable: true,
        filterMethod: (filter: any, row: any) => filterCaseInsensitive(filter, row, '')
    }
];

// Read-Only Columns for ManageConfigResult
export { readOnlyResultColumns };