import { client } from '../../api/HttpClient';
import { IConfig } from '../../models/ConfigModel';
import { IConfigSetting } from '../../models/ConfigSettingModel';

export class AdminClient {
    public getConfigs = () => client.getJson<IConfig[]>('admin/editconfig.json');
    public getSettings = () => client.getJson<IConfigSetting[]>('admin/editsetting.json');
}
