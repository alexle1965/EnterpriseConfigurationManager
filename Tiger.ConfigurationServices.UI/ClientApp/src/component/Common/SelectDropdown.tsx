import * as React from 'react';
import Select from 'react-select';
import { ValueType } from 'react-select/lib/types';
import { KeyValuePair } from './KeyValuePair';

// Using React-Select to populate the Config & Setting Dropdown
//
// Warning:React-Select is not flexible when it comes to styling
//
// Expected options format:
// const options = [
//     { value: 'KEY of KeyValuePair', label: 'VALUE of KeyValuePair' }
//     Example:
//     { value: 'CAN_DEV', label: 'CAN_DEV' },
//     { value: '105', label: 'ACHSEND' },
//   ]

interface IProps {
    optionList: KeyValuePair<string, string>[];
    title?: string;
    selectedValue: string;
    onSelect: (selectedValue: string) => void;
}

interface IState { }

export class SelectDropdown extends React.Component<IProps, IState> {
    static defaultProps = {
        title: 'Search or Type',
        selectedValue: ''
    };

    public render() {
        // React-Select dropdown "VALUE" is expecting the type of ValueType<any>.  However, the "selectedValue" is passed in as "string | undefined"
        const _value = this.props.selectedValue !== '' ? { value: this.props.selectedValue, label: this.props.selectedValue } : null;

        return (
            <Select
                value={_value}
                placeholder={this.props.title}
                isClearable={true}
                isSearchable={true}
                options={this.getSelectOptions(this.props.optionList)}
                onChange={this.handleOnChange}
            />
        );
    }

    // ValueType<> is the React-Select v2 own type
    private handleOnChange = (x: ValueType<any>) => {
        const selectedValue = x != null ? x.value : undefined;
        this.props.onSelect(selectedValue);
    };

    // Convert KeyValuePair[] to an array of object that React-Select is expecting
    // options = [{value: 'kv.key', label: 'kv.value'}]
    // https://react-select.com/home
    private convertKeyValuePairToObject = (kvList: KeyValuePair<string, string>[]) => {
        let configOptions: { value: string; label: string }[] = [];
        for (const nextKV of kvList) {
            configOptions.push({
                label: nextKV.value,
                value: nextKV.value
            });
        }

        return configOptions;
    };

    private getSelectOptions = (kv: KeyValuePair<string, string>[]) => {
        return this.convertKeyValuePairToObject(kv);
    };
} // export