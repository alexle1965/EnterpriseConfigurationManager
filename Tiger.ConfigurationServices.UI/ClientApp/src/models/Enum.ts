export enum Action {
    Home = '',
    CloneSetting = 'Clone Configuration Setting', // copy ConfigSettings
    ManageConfig = 'Manage Configuration and Setting', // edit config or setting values for a given configname/configsettingname
    ManageServer = 'Manage Server', // edit Servers table
    EditConfig = 'Edit Config', // edit Config table
    EditSetting = 'Edit Setting' // edit ConfigSetting table
}

export enum ViewBy {
    None = '',
    Config = 'config',
    Setting = 'setting',
    Value = 'value'
}
